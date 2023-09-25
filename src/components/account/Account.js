import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSession } from "next-auth/react";
import axios from "axios";
import notify from "../../utils/notify";

import ImageUpload from "../ui/ImageUpload";
import LoadingPage from "../ui/LoadingPage";
import EditAccount from "./EditAccount";
import EditSvg from "../svg/EditSvg";

import styles from "./Account.module.css";

const index = () => {
  const { data: session } = useSession();

  const provider = useSelector((state) => state.auth.provider);
  const authUserId = useSelector((state) => state.auth.user_id);

  const [authUser, setAuthUser] = useState([]);
  const [userData, setUserData] = useState({});
  const [startEdit, setStartEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isImageUpload, setIsImageUpload] = useState(false);
  const [imgSrc, setImgSrc] = useState(null);
  const [image, setImage] = useState(null);
  const [pricesData, setPricesData] = useState(null);


  const loggedUserInfo = async () => {
    let url;

    if (provider === "google") {
      url = `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/users?filters[email]=${session?.user.email}&populate=*`;
    } else {
      url = `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/users?filters[id]=${authUserId}&populate=*`;
    }
    if (url) {
      await axios
        .get(url)
        .then((res) => {
          const data = res.data;
          setAuthUser(data);
          setUserData({
            id: data[0]?.id,
            username: data[0]?.username,
            email: data[0]?.email,
            phoneNumber: data[0]?.phoneNumber,
            payment_duration: data[0]?.payment_duration,
            payment_plan: {
              connect: [{ id: data[0]?.payment_plan?.id.toString(), }],
            },
            card_number: data[0]?.card_number,
            card_cvc: data[0]?.card_cvc,
            card_month: data[0]?.card_month,
            card_year: data[0]?.card_year
          })
        })
        .then(() => {
          setIsLoading(false);
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
    if (authUser[0]?.avatar) {
      const avatarId = authUser[0].avatar[0]?.id;
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

  const getPricesData = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/payment-plans`
      );
      const data = response.data;
      setPricesData(data?.data);
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    loggedUserInfo();
    getPricesData();
  }, [session, authUserId]);

  useEffect(() => {
    handleUserImage();
  }, [authUser, session, isImageUpload]);

  return (
    <>
      {isLoading || !authUser ? (
        <LoadingPage />
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
              // onImageUpload
              handleImageRemove={handleImageRemove}
            />
            <ImageUpload
              type="account"
              onImageUpload={imgSrc ? handleMediaUpdate : handleMediaUpload}
              quantity={10}
            />
          </div>
          <div
            style={{ height: '44px' }}
            onClick={() => setStartEdit(!startEdit)}
            className={`fill-btn rotate-svg-btn btn btn-primary fw-boldest`}
          >
            <EditSvg />
            <span>რედაქტირება</span>
          </div>
          {authUser && (
            <EditAccount
              authUserId={authUserId}
              startEdit={startEdit}
              userData={userData}
              setUserData={setUserData}
              setIsEdit={setStartEdit}
              pricesData={pricesData}
              loggedUserInfo={loggedUserInfo}
            />
          )}
        </div>
      )}
    </>
  );
};

export default index;
