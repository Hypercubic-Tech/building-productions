import AboutCompany from "@/components/main/AboutCompany";
import Heading from "../../components/main/Heading";
import HowItWorks from "@/components/main/HowItWorks";
import OurTeem from "@/components/main/OurTeem";
import OurProjects from "@/components/main/OurProjects";
import Price from "@/components/main/Price";
import WhatOuerClientsSay from "@/components/main/WhatOurClientsSay";

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
        <div className="mb-0" id="home">
          <div
            className="bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-bottom landing-dark-bg"
            style={{
              backgroundImage:
                "url(assets/media/svg/illustrations/landing.svg)",
            }}
          >
            <Heading />
          </div>
          <div className="landing-curve landing-dark-color mb-10 mb-lg-20">
            <svg
              viewBox="15 12 1470 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 11C3.93573 11.3356 7.85984 11.6689 11.7725 12H1488.16C1492.1 11.6689 1496.04 11.3356 1500 11V12H1488.16C913.668 60.3476 586.282 60.6117 11.7725 12H0V11Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
        <HowItWorks />
        <div className="mt-sm-n10">
          <div className="landing-curve landing-dark-color">
            <svg
              viewBox="15 -1 1470 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 48C4.93573 47.6644 8.85984 47.3311 12.7725 47H1489.16C1493.1 47.3311 1497.04 47.6644 1501 48V47H1489.16C914.668 -1.34764 587.282 -1.61174 12.7725 47H1V48Z"
                fill="currentColor"
              />
            </svg>
          </div>
          
          <AboutCompany />
          <div className="landing-curve landing-dark-color">
            <svg
              viewBox="15 12 1470 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 11C3.93573 11.3356 7.85984 11.6689 11.7725 12H1488.16C1492.1 11.6689 1496.04 11.3356 1500 11V12H1488.16C913.668 60.3476 586.282 60.6117 11.7725 12H0V11Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
        <OurTeem />
        <OurProjects />
        <Price />
        <WhatOuerClientsSay />
        <div className="mb-0">
          <div className="landing-curve landing-dark-color">
            <svg
              viewBox="15 -1 1470 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 48C4.93573 47.6644 8.85984 47.3311 12.7725 47H1489.16C1493.1 47.3311 1497.04 47.6644 1501 48V47H1489.16C914.668 -1.34764 587.282 -1.61174 12.7725 47H1V48Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="landing-dark-bg pt-20">
            <div className="container">
              <div className="row py-10 py-lg-20">
                <div className="col-lg-6 pe-lg-16 mb-10 mb-lg-0">
                  <div className="rounded landing-dark-border p-9 mb-10">
                    <h2 className="text-white">
                      Would you need a Custom License?
                    </h2>
                    <span className="fw-normal fs-4 text-gray-700">
                      Email us to
                      <a
                        href="https://keenthemes.com/support"
                        className="text-white opacity-50 text-hover-primary"
                      >
                        support@keenthemes.com
                      </a>
                    </span>
                  </div>
                  <div className="rounded landing-dark-border p-9">
                    <h2 className="text-white">How About a Custom Project?</h2>
                    <span className="fw-normal fs-4 text-gray-700">
                      Use Our Custom Development Service.
                      <a
                        href="../../demo11/dist/pages/profile/overview.html"
                        className="text-white opacity-50 text-hover-primary"
                      >
                        Click to Get a Quote
                      </a>
                    </span>
                  </div>
                </div>
                <div className="col-lg-6 ps-lg-16">
                  <div className="d-flex justify-content-center">
                    <div className="d-flex fw-bold flex-column me-20">
                      <h4 className="fw-bolder text-gray-400 mb-6">
                        More for Metronic
                      </h4>
                      <a
                        href="#"
                        className="text-white opacity-50 text-hover-primary fs-5 mb-6"
                      >
                        FAQ
                      </a>
                      <a
                        href="#"
                        className="text-white opacity-50 text-hover-primary fs-5 mb-6"
                      >
                        Documentaions
                      </a>
                      <a
                        href="#"
                        className="text-white opacity-50 text-hover-primary fs-5 mb-6"
                      >
                        Video Tuts
                      </a>
                      <a
                        href="#"
                        className="text-white opacity-50 text-hover-primary fs-5 mb-6"
                      >
                        Changelog
                      </a>
                      <a
                        href="#"
                        className="text-white opacity-50 text-hover-primary fs-5 mb-6"
                      >
                        Github
                      </a>
                      <a
                        href="#"
                        className="text-white opacity-50 text-hover-primary fs-5"
                      >
                        Tutorials
                      </a>
                    </div>
                    <div className="d-flex fw-bold flex-column ms-lg-20">
                      <h4 className="fw-bolder text-gray-400 mb-6">
                        Stay Connected
                      </h4>
                      <a href="#" className="mb-6">
                        <img
                          src="assets/media/svg/brand-logos/facebook-4.svg"
                          className="h-20px me-2"
                          alt=""
                        />
                        <span className="text-white opacity-50 text-hover-primary fs-5 mb-6">
                          Facebook
                        </span>
                      </a>
                      <a href="#" className="mb-6">
                        <img
                          src="assets/media/svg/brand-logos/github.svg"
                          className="h-20px me-2"
                          alt=""
                        />
                        <span className="text-white opacity-50 text-hover-primary fs-5 mb-6">
                          Github
                        </span>
                      </a>
                      <a href="#" className="mb-6">
                        <img
                          src="assets/media/svg/brand-logos/twitter.svg"
                          className="h-20px me-2"
                          alt=""
                        />
                        <span className="text-white opacity-50 text-hover-primary fs-5 mb-6">
                          Twitter
                        </span>
                      </a>
                      <a href="#" className="mb-6">
                        <img
                          src="assets/media/svg/brand-logos/dribbble-icon-1.svg"
                          className="h-20px me-2"
                          alt=""
                        />
                        <span className="text-white opacity-50 text-hover-primary fs-5 mb-6">
                          Dribbble
                        </span>
                      </a>
                      <a href="#" className="mb-6">
                        <img
                          src="assets/media/svg/brand-logos/instagram-2-1.svg"
                          className="h-20px me-2"
                          alt=""
                        />
                        <span className="text-white opacity-50 text-hover-primary fs-5 mb-6">
                          Instagram
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="landing-dark-separator landing-dark-bg" /> */}
          </div>
        </div>
        <div id="kt_scrolltop" className="scrolltop" data-kt-scrolltop="true">
          <span className="svg-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect
                opacity="0.5"
                x={13}
                y={6}
                width={13}
                height={2}
                rx={1}
                transform="rotate(90 13 6)"
                fill="black"
              />
              <path
                d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z"
                fill="black"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Main;
