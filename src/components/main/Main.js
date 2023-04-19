import AboutCompany from "@/components/main/AboutCompany";
import Heading from "./Heading";
import HowItWorks from "@/components/main/HowItWorks";
import OurTeem from "@/components/main/OurTeem";
import OurProjects from "@/components/main/OurProjects";
import Price from "@/components/main/Price";
import WhatOuerClientsSay from "@/components/main/WhatOurClientsSay";
import ContactUs from "./ContactUs";

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
  }
}

const Main = () => {
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
      </div>
    </div>
  );
};

export default Main;