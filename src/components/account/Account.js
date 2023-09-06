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
  const [avatarId, setAvatarId] = useState(null);
  const authUserId = useSelector((state) => state.auth.user_id);
  const authEmail = useSelector((state) => state.auth.email);
  const isLoggedIn = useSelector((state) => state.auth.loggedIn);
  const { data: session } = useSession();

  const loggedUserInfo = async () => {
    let url;

    if (session?.user) {
      setAuthUser(session.user);
    } else if (authUserId) {
      url = `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/users?filters[id]=${authUserId}&populate=*`;
    } else {
      url = `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/users?filters[email]=${authEmail}&populate=*`;
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
        });
    } catch (err) {
      console.error(err);
      notify(true, "სურათის ატვირთვა უარყოფილია");
    }
  };

  const handleImageRemove = async () => {
    console.log("authUser:", authUser);
    console.log("authUser avatar:", authUser[0]?.avatar);
  
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
      console.log("Ff");
      notify(false, "არჩეული სურათი წარმატებით აიტვირთა");
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
    handleUserImage();
  }, [authUserId, session, isImageUpload]);

  return (
    <>
      {!isLoggedIn ? (
        <Unauthorized />
      ) : (
        <div className={`${styles.mainContainer} container`}>
          <div className={styles.imageContainer}>
            <div className={styles.imageBorder}>
              {((authUser || session?.user) && imgSrc && (
                <img
                  src={`${process.env.NEXT_PUBLIC_BUILDING_URL}${imgSrc}`}
                  width={"100%"}
                  height={"100%"}
                  style={{ borderRadius: "8px" }}
                  alt="Picture of the product"
                />
              )) || (
                <h2
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  Uploaded Image
                </h2>
              )}
            </div>
            <ImageUpload
              onImageUpload={imgSrc ? handleMediaUpdate : handleMediaUpload}
              handleImageRemove={handleImageRemove}
            />
          </div>
          {authUser.length > 0
            ? authUser?.map((user, index) => {
                return (
                  <div className={styles.userInfoWrapper} key={index}>
                    <div
                      className={`d-flex pt-3 pb-3 ${styles.userInfoContainer}`}
                    >
                      <div className="col-sm-3">
                        <h6 className="mb-0">მომხმარებლის სახელი</h6>
                      </div>
                      <div className={`col-sm-6 ${styles.userInfo}`}>
                        {user?.username}
                      </div>
                    </div>
                    <hr />
                    <div
                      className={`d-flex pt-3 pb-3 ${styles.userInfoContainer}`}
                    >
                      <div className="col-sm-3">
                        <h6 className="mb-0">მომხმარებლის ტიპი</h6>
                      </div>
                      <div className={`col-sm-6 ${styles.userInfo}`}>
                        {user?.userType === "company"
                          ? "კომპანია"
                          : "პერსონალური"}
                      </div>
                    </div>
                    <hr />
                    <div
                      className={`d-flex pt-3 pb-3 ${styles.userInfoContainer}`}
                    >
                      <div className="col-sm-3">
                        <h6 className="mb-0">იმეილი</h6>
                      </div>
                      <div className={`col-sm-6 ${styles.userInfo}`}>
                        {user?.email}
                      </div>
                    </div>
                    <hr />
                    <div
                      className={`d-flex pt-3 pb-3 ${styles.userInfoContainer}`}
                    >
                      <div className="col-sm-3">
                        <h6 className="mb-0">მობილურის ნომერი</h6>
                      </div>
                      <div className={`col-sm-6 ${styles.userInfo}`}>
                        {user?.phoneNumber}
                      </div>
                    </div>
                    <hr />
                    <div
                      className={`d-flex pt-3 pb-3 ${styles.userInfoContainer}`}
                    >
                      <div className="col-sm-3">
                        <h6 className="mb-0">გადახდის გეგმა</h6>
                      </div>
                      <div className={`col-sm-6 ${styles.userInfo}`}>
                        {user?.paymentPlan === "paid" ? "ფასიანი" : "უფასო"}
                      </div>
                    </div>
                    <hr />
                    {user?.paymentPlan === "paid" && user?.paymentMethod && (
                      <div
                        className={`d-flex pt-3 pb-3 ${styles.userInfoContainer}`}
                      >
                        <div className="col-sm-3">
                          <h6 className="mb-0">გადახდის მეთოდი</h6>
                        </div>
                        <div className={`col-sm-6 ${styles.userInfo}`}>
                          {user?.paymentMethod === "tbc" ? "თბს ბანკი" : ""}
                        </div>
                      </div>
                    )}
                    {user?.paymentPlan === "paid" && user?.paymentMethod && (
                      <hr />
                    )}
                    {!isEdit && <EditButton onClick={() => setIsEdit(true)} />}
                  </div>
                );
              })
            : session?.user && (
                <div className={styles.userInfoWrapper}>
                  <div
                    className={`d-flex pt-3 pb-3 ${styles.userInfoContainer}`}
                  >
                    <div className="col-sm-3">
                      <h6 className="mb-0">მომხმარებლის სახელი</h6>
                    </div>
                    <div className={`col-sm-6 ${styles.userInfo}`}>
                      {session.user?.name}
                    </div>
                  </div>
                  <hr />
                  <div
                    className={`d-flex pt-3 pb-3 ${styles.userInfoContainer}`}
                  >
                    <div className="col-sm-3">
                      <h6 className="mb-0">მომხმარებლის ტიპი</h6>
                    </div>
                    <div className={`col-sm-6 ${styles.userInfo}`}>
                      {session.user?.userType === "company"
                        ? "კომპანია"
                        : "პერსონალური"}
                    </div>
                  </div>
                  <hr />
                  <div
                    className={`d-flex pt-3 pb-3 ${styles.userInfoContainer}`}
                  >
                    <div className="col-sm-3">
                      <h6 className="mb-0">იმეილი</h6>
                    </div>
                    <div className={`col-sm-6 ${styles.userInfo}`}>
                      {session.user?.email}
                    </div>
                  </div>
                  <hr />
                  {!isEdit && <EditButton onClick={() => setIsEdit(true)} />}
                </div>
              )}
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
