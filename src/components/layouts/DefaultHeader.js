import { useState, useEffect, useRef } from "react";
import Auth from "../popup/Auth";
import { useSpring, animated } from "react-spring";

function DefaultHeader() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  const [showAuthModal, setShowAuthModal] = useState(false);
  const modalRef = useRef(null);

  const animation = useSpring({
    opacity: showAuthModal ? 1 : 0,
  });

  const handleAuthClick = () => {
    setShowAuthModal(true);
  };

  const handleClose = () => {
    setShowAuthModal(false);
  };

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowAuthModal(false);
    }
  };

  useEffect(() => {
    if (showAuthModal) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showAuthModal]);

  return (
    <>
      <div
        className="landing-header header-bg"
        data-kt-sticky="true"
        data-kt-sticky-name="landing-header"
        data-kt-sticky-offset="{default: '200px', lg: '300px'}"
      >
        <div className="container-xxl">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              {/* <button
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
            </button> */}
              <a href="/">
                <img
                  alt="Logo"
                  src="/assets/media/logos/logo-demo11.svg"
                  className="logo-default h-25px h-lg-30px"
                />
                <img
                  alt="Logo"
                  src="/assets/media/logos/logo-demo11.svg"
                  className="logo-sticky h-20px h-lg-25px"
                />
              </a>
            </div>
            <div className="d-lg-block" id="kt_header_nav_wrapper">
              {/* <div
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
            </div> */}
            </div>
            <div className="ms-1">
              <div
                className={` btn btn-success georgian `}
                onClick={handleAuthClick}
              >
                ავტორიზაცია
              </div>
              {showAuthModal && (
                <animated.div
                  className="modal"
                  style={animation}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div ref={modalRef}>
                    <div>
                      <Auth onClose={handleClose} />
                    </div>
                  </div>
                </animated.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DefaultHeader;
