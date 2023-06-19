import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";
import { setAuthAccessToken, setAuthEmail, setAuthUserId } from "../store/slices/authSlice";

import AboutCompany from "../components/main/AboutCompany";
import Heading from "../components/main/Heading";
import HowItWorks from "../components/main/HowItWorks";
import OurTeam from "../components/main/OurTeam";
import OurProjects from "../components/main/OurProjects";
import Price from "../components/main/Price";
import WhatOuerClientsSay from "../components/main/WhatOurClientsSay";
import ContactUs from "../components/main/ContactUs";
import Faq from "../components/main/Faq";
import SignedWithGoogleModal from "../components/popup/SignedWithGoogleModal";
import axios from "axios";
import notify from "../utils/notify";

const priceData = {
  monthlyPrice: {
    startup: 50,
    business: 150,
    enterprise: 200,
  },
  annualPrice: {
    startup: 500,
    business: 700,
    enterprise: 1000,
  },
};

const Home = () => {
  const [isAuthWithGoogle, setIsAuthWithGoogle] = useState(null);
  const [isClosed, setIsClosed] = useState(true);
  const dispatch = useDispatch();
  const router = useRouter();
  const { id_token } = router.query;
  const userObject = id_token ? jwt_decode(id_token) : null;

  const toggleModal = () => {
    setIsClosed(false);
  };

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
        <AboutCompany />
        <OurTeam />
        <OurProjects />
        <Price price={priceData} />
        <WhatOuerClientsSay />
        <ContactUs />
        <Faq />
        {id_token && isClosed && isAuthWithGoogle?.length === 0 && <SignedWithGoogleModal onClose={toggleModal} userEmail={userObject?.email} userToken={id_token} />}
      </div>
    </div>
  );
};

export default Home;