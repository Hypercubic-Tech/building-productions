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
            <div
              className="landing-header"
              data-kt-sticky="true"
              data-kt-sticky-name="landing-header"
              data-kt-sticky-offset="{default: '200px', lg: '300px'}"
            >
              <div className="container">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center flex-equal">
                    <button
                      className="btn btn-icon btn-active-color-primary me-3 d-flex d-lg-none"
                      id="kt_landing_menu_toggle"
                    >
                      <span className="svg-icon svg-icon-2hx">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z"
                            fill="black"
                          />
                          <path
                            opacity="0.3"
                            d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                    </button>
                    <a href="../../demo11/dist/landing.html">
                      <img
                        alt="Logo"
                        src="assets/media/logos/logo-landing.svg"
                        className="logo-default h-25px h-lg-30px"
                      />
                      <img
                        alt="Logo"
                        src="assets/media/logos/logo-landing-dark.svg"
                        className="logo-sticky h-20px h-lg-25px"
                      />
                    </a>
                  </div>
                  <div className="d-lg-block" id="kt_header_nav_wrapper">
                    <div
                      className="d-lg-block p-5 p-lg-0"
                      data-kt-drawer="true"
                      data-kt-drawer-name="landing-menu"
                      data-kt-drawer-activate="{default: true, lg: false}"
                      data-kt-drawer-overlay="true"
                      data-kt-drawer-width="200px"
                      data-kt-drawer-direction="start"
                      data-kt-drawer-toggle="#kt_landing_menu_toggle"
                      data-kt-swapper="true"
                      data-kt-swapper-mode="prepend"
                      data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav_wrapper'}"
                    >
                      <div
                        className="menu menu-column flex-nowrap menu-rounded menu-lg-row menu-title-gray-500 menu-state-title-primary nav nav-flush fs-5 fw-bold"
                        id="kt_landing_menu"
                      >
                        <div className="menu-item">
                          <a
                            className="menu-link nav-link active py-3 px-4 px-xxl-6 georgian"
                            href="#kt_body"
                            data-kt-scroll-toggle="true"
                            data-kt-drawer-dismiss="true"
                          >
                            მთავარი
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link nav-link py-3 px-4 px-xxl-6 georgian"
                            href="#how-it-works"
                            data-kt-scroll-toggle="true"
                            data-kt-drawer-dismiss="true"
                          >
                            როგორ მუშაობს?
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link nav-link py-3 px-4 px-xxl-6 georgian"
                            href="#achievements"
                            data-kt-scroll-toggle="true"
                            data-kt-drawer-dismiss="true"
                          >
                            ჩვენ შესახებ
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link nav-link py-3 px-4 px-xxl-6"
                            href="#team"
                            data-kt-scroll-toggle="true"
                            data-kt-drawer-dismiss="true"
                          >
                            Team
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link nav-link py-3 px-4 px-xxl-6"
                            href="#portfolio"
                            data-kt-scroll-toggle="true"
                            data-kt-drawer-dismiss="true"
                          >
                            Portfolio
                          </a>
                        </div>
                        <div className="menu-item">
                          <a
                            className="menu-link nav-link py-3 px-4 px-xxl-6"
                            href="#pricing"
                            data-kt-scroll-toggle="true"
                            data-kt-drawer-dismiss="true"
                          >
                            Pricing
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-equal text-end ms-1">
                    <a href="#" className="btn btn-success georgian">
                      ავტორიზაცია
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
            <div className="landing-dark-separator" />
            <div className="container">
              <div className="d-flex flex-column flex-md-row flex-stack py-7 py-lg-10">
                <div className="d-flex align-items-center order-2 order-md-1">
                  <a href="../../demo11/dist/landing.html">
                    <img
                      alt="Logo"
                      src="assets/media/logos/logo-landing.svg"
                      className="h-15px h-md-20px"
                    />
                  </a>
                  <span
                    className="mx-5 fs-6 fw-bold text-gray-600 pt-1"
                    href="https://keenthemes.com"
                  >
                    © 2021 Keenthemes Inc.
                  </span>
                </div>
                <ul className="menu menu-gray-600 menu-hover-primary fw-bold fs-6 fs-md-5 order-1 mb-5 mb-md-0">
                  <li className="menu-item">
                    <a
                      href="https://keenthemes.com"
                      target="_blank"
                      className="menu-link px-2"
                    >
                      About
                    </a>
                  </li>
                  <li className="menu-item mx-5">
                    <a
                      href="https://keenthemes.com/support"
                      target="_blank"
                      className="menu-link px-2"
                    >
                      Support
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="" target="_blank" className="menu-link px-2">
                      Purchase
                    </a>
                  </li>
                </ul>
              </div>
            </div>
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
