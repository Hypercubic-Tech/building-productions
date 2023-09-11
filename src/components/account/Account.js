import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import axios from "axios";
import notify from "../../utils/notify";
import EditAccount from "../../components/popup/EditAccount";
import Unauthorized from "../../pages/401";
import EditButton from "../ui/EditButton";
import ImageUpload from "../ui/ImageUpload";

import styles from "./Account.module.css";

const index = () => {
  const [authUser, setAuthUser] = useState([]);
  const [imgSrc, setImgSrc] = useState(null);
  const [image, setImage] = useState(null);
  const [isImageUpload, setIsImageUpload] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const authUserId = useSelector((state) => state.auth.user_id);
  const authEmail = useSelector((state) => state.auth.email);
  const isLoggedIn = useSelector((state) => state.auth.loggedIn);
  const { data: session } = useSession();

  const loggedUserInfo = async () => {
    let url;

    if (session?.user) {
      url = `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/users?filters[email]=${session?.user.email}&populate=*`;
    } else if (authUserId) {
      url = `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/users?filters[id]=${authUserId}&populate=*`;
    }
    if (url) {
      await axios.get(url).then((res) => {
        const data = res.data;
        setAuthUser(data);
      });
    }
  };

  const handleMediaUpload = async (img) => {
    if (!img) {
      return;
    }

    const formData = new FormData();
    formData.append("files", img);

    try {
      await axios
        .post(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/upload`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          const data = res.data;
          setImage(data[0]);
          setImgSrc(data[0].url);
          setIsImageUpload(true);
          notify(false, "არჩეული სურათი წარმატებით აიტვირთა");
          console.log(data, "one");
        });
    } catch (err) {
      console.error(err);
      notify(true, "სურათის ატვირთვა უარყოფილია");
    }
  };

  const handleImageRemove = async () => {
    if (authUser[0]?.avatar) {
      const avatarId = authUser[0].avatar[0]?.id;
      console.log("avatarId:", avatarId);
      if (avatarId) {
        await axios.delete(
          `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/upload/files/${avatarId}`
        );
      }
    }
    await axios
      .put(
        `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/users/${authUser[0]?.id}`,
        {
          avatar: null,
        }
      )
      .then(() => {
        loggedUserInfo();
        setImgSrc(null);
        setIsImageUpload(false);
      });
  };

  const handleMediaUpdate = async (img) => {
    if (!img) {
      return;
    }

    const formData = new FormData();
    formData.append("files", img);

    try {
      await handleImageRemove();

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const data = res.data;
      setImage(data[0]);
      setImgSrc(data[0].url);
      setIsImageUpload(true);
      console.log(data, "gg");
      notify(false, "არჩეული სურათი წარმატებით აიტვირთა");
      console.log(data, "one");
    } catch (err) {
      console.error(err);
      notify(true, "სურათის ატვირთვა უარყოფილია");
    }
  };

  const handleUserImage = async () => {
    if (isImageUpload) {
      await axios.put(
        `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/users/${authUser[0]?.id}`,
        {
          avatar: image?.id,
        }
      );
    }

    if (authUser[0]?.avatar) {
      await axios
        .get(
          `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/upload/files/${authUser[0]?.avatar[0]?.id}`
        )
        .then((res) => {
          const data = res.data;
          setImgSrc(data.url);
        });
    }
  };

  useEffect(() => {
    loggedUserInfo();
  }, [session, authUserId]);

  useEffect(() => {
    handleUserImage();
  }, [authUser, session, isImageUpload]);

  const authUserData = [
    {
      id: 1,
      name: "მომხმარებლის სახელი",
      value: authUser[0]?.username,
    },
    {
      id: 2,
      name: "მომხმარებლის ტიპი",
      value: authUser[0]?.userType === "company" ? "კომპანია" : "პერსონალური",
    },
    {
      id: 3,
      name: "იმეილი",
      value: authUser[0]?.email,
    },
    {
      id: 4,
      name: "მობილურის ნომერი",
      value: authUser[0]?.phoneNumber,
    },
    {
      id: 5,
      name: "გადახდის გეგმა",
      value: authUser[0]?.paymentPlan === "paid" ? "ფასიანი" : "უფასო",
    },
    {
      id: 6,
      name: "გადახდის მეთოდი",
      value: authUser[0]?.paymentMethod === "tbc" ? "თბს ბანკი" : "",
    },
  ];

  return (
    <>
      {!isLoggedIn ? (
        <Unauthorized />
      ) : (
        <div className={`${styles.mainContainer} container`}>
          <div className={styles.imageContainer}>
            <div className={styles.imageBorder}>
              {(imgSrc && (
                <img
                  src={`${process.env.NEXT_PUBLIC_BUILDING_URL}${imgSrc}`}
                  width={"100%"}
                  height={"100%"}
                  style={{ borderRadius: "8px" }}
                  alt="Picture of the product"
                />
              )) || <h2 className={styles.imageText}>Uploaded Image</h2>}
            </div>
            <ImageUpload
              onImageUpload={imgSrc ? handleMediaUpdate : handleMediaUpload}
              handleImageRemove={handleImageRemove}
            />
          </div>
          {authUser.length > 0 &&
            authUser?.map((user, index) => {
              return (
                <div className={styles.userInfoWrapper} key={index}>
                  {authUserData.map((item) => {
                    return (
                      <div key={item.id}>
                        {item.value && (
                          <>
                            <div className={styles.userInfoContainer}>
                              <h6 className={styles.infoType}>{item.name}</h6>
                              <div className={styles.userInfo}>
                                {item.value}
                              </div>
                            </div>
                            <hr />
                          </>
                        )}
                      </div>
                    );
                  })}
                  {!isEdit && <EditButton onClick={() => setIsEdit(true)} />}
                </div>
              );
            })}
          {isEdit && (
            <EditAccount
              authUser={authUser}
              onClose={() => setIsEdit(false)}
              loggedUserInfo={loggedUserInfo}
            />
          )}
        </div>
      )}
    </>
  );
};

export default index;
