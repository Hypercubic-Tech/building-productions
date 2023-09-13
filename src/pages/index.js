import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setAuthAccessToken, setAuthEmail, setAuthUserId } from "../store/slices/authSlice";
import axios from "axios";
import jwt_decode from "jwt-decode";

import Heading from "../components/main/Heading";
import HowItWorks from "../components/main/HowItWorks";
import OurTeam from "../components/main/OurTeam";
import Price from "../components/main/Price";
import ContactUs from "../components/main/ContactUs";
import Faq from "../components/main/Faq";
import SignedWithGoogleModal from "../components/popup/SignedWithGoogleModal";
import notify from "../utils/notify";

const priceData = {
  monthlyPrice: {
    startup: 20,
    business: 50,
    enterprise: 100,
  },
  annualPrice: {
    startup: 100,
    business: 180,
    enterprise: 360,
  },
};

const Home = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id_token } = router.query;
  const userObject = id_token ? jwt_decode(id_token) : null;

  const [isAuthWithGoogle, setIsAuthWithGoogle] = useState(null);
  const [isClosed, setIsClosed] = useState(true);

  const [faqData, setFaqData] = useState(null);
  const [pricesData, setPricesData] = useState(null);

  const toggleModal = () => {
    setIsClosed(false);
  };

  const getFaqData = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/FAQs`);
      const data = response.data;
      setFaqData(data?.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getPricesData = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/payment-plans`);
      const data = response.data;
      setPricesData(data?.data);
    } catch (error) {
      console.error(error);
    }

  }
  // /api/payment-plans


  useEffect(() => {
    if (id_token) {

      const checkEmail = async () => {
        await axios.get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/users?filters[email][$eq]=${userObject?.email}`)
          .then((res) => {
            const data = res.data;
            setIsAuthWithGoogle(data)
            if (data?.length === 0) {

              localStorage.setItem("access_token", id_token);
              localStorage.setItem("email", userObject?.email);
              localStorage.setItem("userId", data[0]?.id);

              dispatch(setAuthUserId(data[0]?.id))
              dispatch(setAuthAccessToken(id_token));
              dispatch(setAuthEmail(userObject?.email));
              // router.push('/');
              notify(false, 'თქვენ წარმატებით გაიარეთ ავტორიზაცია!');
            } else {
              localStorage.setItem("access_token", id_token);
              localStorage.setItem("email", userObject?.email);
              localStorage.setItem("userId", data[0]?.id);

              dispatch(setAuthUserId(data[0]?.id))
              dispatch(setAuthAccessToken(id_token));
              dispatch(setAuthEmail(userObject?.email));

              notify(false, 'თქვენ წარმატებით გაიარეთ ავტორიზაცია!');
              router.push('/');
            }
          })

      };

      checkEmail();
    }
  }, [id_token]);

  useEffect(() => {
    getFaqData();
    getPricesData();
  }, []);

  return (
    <div
      id="kt_body"
      data-bs-spy="scroll"
      data-bs-target="#kt_landing_menu"
      data-bs-offset={200}
      className="bg-white position-relative"
    >
      <div className="d-flex flex-column flex-root">
        <Heading />
        <HowItWorks />
        <OurTeam />
        <Price pricesData={pricesData} price={priceData} />
        {/* <ContactUs /> */}
        <Faq faqData={faqData} />
        {id_token && isClosed && isAuthWithGoogle?.length === 0 && <SignedWithGoogleModal onClose={toggleModal} userEmail={userObject?.email} userToken={id_token} />}
      </div>
    </div>
  );
};

export default Home;