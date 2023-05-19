// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
import AboutCompany from "@/components/main/AboutCompany";
import Heading from "./Heading";
import HowItWorks from "@/components/main/HowItWorks";
import OurTeem from "@/components/main/OurTeem";
import OurProjects from "@/components/main/OurProjects";
import Price from "@/components/main/Price";
import WhatOuerClientsSay from "@/components/main/WhatOurClientsSay";
import ContactUs from "./ContactUs";
// import HeaderPopup from "../popup/HeaderPopup";
// import AuthModal from "../popup/AuthModal";
// import { selectAuthState, setAuthState } from "@/store/slices/authSlice";

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

const Main = () => {
  // const loggedIn = useSelector(selectAuthState);
  // const dispatch = useDispatch();
  // const modalIsOpen = useSelector((state) => state.modal.isOpen);
  // const headerModalIsOpen = useSelector((state) => state.modal.isOpen);

  // useEffect(() => {
  //   if (
  //     localStorage.getItem("access_token") &&
  //     localStorage.getItem("access_token") !== ""
  //   ) {
  //     dispatch(setAuthState(true));
  //   }
  // }, [loggedIn, dispatch]);

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
        <OurTeem />
        <OurProjects />
        <Price price={priceData} />
        <WhatOuerClientsSay />
        <ContactUs />
        {/* {loggedIn ? (
          <AuthModal isOpen={modalIsOpen} />
        ) : (
          <HeaderPopup isOpen={headerModalIsOpen} />
        )} */}
      </div>
    </div>
  );
};

export default Main;
