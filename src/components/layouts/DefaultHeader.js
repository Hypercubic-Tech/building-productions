import { useState, useEffect, useRef } from "react";
import Auth from "../popup/Auth";
import { useSpring, animated } from "react-spring";
import Link from "next/link";

function DefaultHeader() {
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
            <Link href="/">
                <img
                  alt="Logo"
                  src="/assets/media/logos/logo-demo11.svg"
                  className="logo-default h-25px h-lg-30px"
                />
              </Link>
            </div>
            <div className="d-lg-block" id="kt_header_nav_wrapper">
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
