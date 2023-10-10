import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSession } from "next-auth/react";
import axios from "axios";
import notify from "../../utils/notify";

import { setUserStatus } from "../../store/slices/statusSlice";

import ImageUpload from "../ui/ImageUpload";
import LoadingPage from "../ui/LoadingPage";
import EditAccount from "./EditAccount";
import ChangePassword from "../popup/ChangePassword";
import FingerprintSvg from "../svg/FingerprintSvg";

import styles from "./Account.module.css";

const index = () => {
  const dispatch = useDispatch();
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
  const [openPasswordPopup, setOpenPasswordPopup] = useState(false);

  const [trialExpired, setTrialExpired] = useState(false);
  const [trialExpiredDate, setTrialExpiredDate] = useState(null);
  const [userStatusUpdate, setUserStatusUpdate] = useState({});
  // console.log(trialExpired)
  const trialExpiredChecker = () => {
    const now = new Date();
    // console.log(userDa, 'now')
    const expiredDate = new Date(userData?.trial_expires);
    console.log(expiredDate, 'expired')
    setTrialExpiredDate(expiredDate)
    if (now > expiredDate) {
      setTrialExpired(true);
      console.log('hi');
    } else {
      setTrialExpired(false);
      console.log('ok')
    }
  };

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
          console.log(data, 'data')
          setAuthUser(data);
          setUserData({
            id: data[0]?.id,
            username: data[0]?.username,
            email: data[0]?.email,
            phoneNumber: data[0]?.phoneNumber,
            payment_duration: data[0]?.payment_duration,
            payment_plan: {
              connect: [{ id: data[0]?.payment_plan?.id.toString() }],
            },
            trial_expires: data[0]?.trial_expires,
            trial_used: data[0]?.trial_used,
            card_number: data[0]?.card_number,
            card_cvc: data[0]?.card_cvc,
            card_month: data[0]?.card_month,
            card_year: data[0]?.card_year,
          });

          // for user dashboard
          if (data[0]?.payment_duration === "month") {
            setUserStatusUpdate({
              username: data[0]?.username,
              p_title: data[0]?.payment_plan?.name,
              payment_duration: data[0]?.payment_duration,
              allowed_export: data[0]?.payment_plan?.allowed_export,
              allowed_media: data[0]?.payment_plan?.allowed_media,
              allowed_projects: data[0]?.payment_plan?.month_allowed_projects,
              all_projects:
                data[0]?.projects.length === 0 ? 0 : data[0]?.projects.length,
              trial_expires: data[0]?.trial_expires,
              trial_used: data[0]?.trial_used,
            });
          }
          if (data[0]?.payment_duration === "year") {
            setUserStatusUpdate({
              username: data[0]?.username,
              p_title: data[0]?.payment_plan?.name,
              payment_duration: data[0]?.payment_duration,
              allowed_export: data[0]?.payment_plan?.allowed_export,
              allowed_media: data[0]?.payment_plan?.allowed_media,
              allowed_projects: data[0]?.payment_plan?.year_allowed_projects,
              all_projects: data[0]?.projects.lenght,
              trial_expires: data[0]?.trial_expires,
              trial_used: data[0]?.trial_used,
            });
          }
        })
        .then(() => {
          trialExpiredChecker();
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
    getPricesData();
    loggedUserInfo();

  }, [session, authUserId]);

  useEffect(() => {
    handleUserImage();
  }, [authUser, session, isImageUpload]);

  useEffect(() => {
    dispatch(setUserStatus(userStatusUpdate));
  }, [userStatusUpdate]);

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
            <div className={styles.imageUpload}>
              <ImageUpload
                type="account"
                onImageUpload={imgSrc ? handleMediaUpdate : handleMediaUpload}
                quantity={10}
                handleImageRemove={handleImageRemove}
              />
              <FingerprintSvg onClick={() => setOpenPasswordPopup(true)} />
            </div>
          </div>
          <div style={{ width: "100%" }}>
            {authUser && (
              <EditAccount
                trialExpired={trialExpired}
                authUserId={authUserId}
                startEdit={startEdit}
                setStartEdit={setStartEdit}
                userData={userData}
                setUserData={setUserData}
                setIsEdit={setStartEdit}
                pricesData={pricesData}
                loggedUserInfo={loggedUserInfo}
                authUser={authUser}
              />
            )}
          </div>
          {openPasswordPopup && (
            <ChangePassword setOpenPasswordPopup={setOpenPasswordPopup} />
          )}
        </div>
      )}
    </>
  );
};

export default index;
