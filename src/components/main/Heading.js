import Auth from "../popup/Auth.js";
import HeaderPopup from "../popup/HeaderPopup";
import { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import { useSelector, useDispatch } from "react-redux";
import { selectAuthState, setAuthState, selectAuthAccessToken } from "@/store/slices/authSlice";

const Heading = () => {
  const loggedIn = useSelector(selectAuthAccessToken);
  console.log(loggedIn, 'loggedIn')
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    if (
      localStorage.getItem("access_token") &&
      localStorage.getItem("access_token") !== ""
    ) {
      dispatch(setAuthState(true));
    }
  }, [loggedIn, dispatch]);

  const animation = useSpring({
    opacity: showModal ? 1 : 0,
    visibility: showModal ? "visible" : "hidden",
  });

  const handleAuthClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    if (showModal) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showModal]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsSticky(window.pageYOffset > 0);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  
  return (
    <div className="mb-0" id="home">
      <div
        className="bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-bottom landing-dark-bg"
        style={{
          backgroundImage: "url(assets/media/svg/illustrations/landing.svg)",
        }}
      >
        <div className="d-flex flex-column flex-center w-100 min-h-350px min-h-lg-500px px-9 relative">
          {loggedIn ? (
            <animated.div onClick={(e) => e.stopPropagation()}>
              <div ref={modalRef}>
                <div>{showModal && <HeaderPopup />}</div>
              </div>
            </animated.div>
          ) : (
            <animated.div
              className="modal"
              style={animation}
              onClick={(e) => e.stopPropagation()}
            >
              <div ref={modalRef}>
                <div>{showModal && <Auth onClose={handleClose} />}</div>
              </div>
            </animated.div>
          )}
          <div className="text-center mb-5 mb-lg-10 py-10 py-lg-20">
            <h1 className="text-white lh-base fw-bolder fs-2x fs-lg-3x mb-15 georgian">
              გამოთვალე მარტივად
              <br />
              <span
                style={{
                  background:
                    "linear-gradient(to right, #12CE5D 0%, #FFD80C 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                <span id="kt_landing_hero_text">სარემონტო ხარჯთაღრიცხვა!</span>
              </span>
            </h1>
            <div
              href="/projects"
              className="btn btn-primary georgian"
              data-bs-toggle="modal"
              data-bs-target="#kt_modal_create_app"
              id="kt_toolbar_primary_button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-calculator-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm2 .5v2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5zm0 4v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zM4.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM4 12.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zM7.5 6a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM7 9.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm.5 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM10 6.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm.5 2.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5h-1z" />
              </svg>
              <b onClick={handleAuthClick}>გამოთვალე!</b>
            </div>
          </div>
          {/* <div className="d-flex flex-center flex-wrap position-relative px-5">
            <div
              className="d-flex flex-center m-3 m-md-6"
              data-bs-toggle="tooltip"
              title="Fujifilm"
            >
              <img
                src="assets/media/svg/brand-logos/fujifilm.svg"
                className="mh-30px mh-lg-40px"
                alt=""
              />
            </div>
            <div
              className="d-flex flex-center m-3 m-md-6"
              data-bs-toggle="tooltip"
              title="Vodafone"
            >
              <img
                src="assets/media/svg/brand-logos/vodafone.svg"
                className="mh-30px mh-lg-40px"
                alt=""
              />
            </div>
            <div
              className="d-flex flex-center m-3 m-md-6"
              data-bs-toggle="tooltip"
              title="KPMG International"
            >
              <img
                src="assets/media/svg/brand-logos/kpmg.svg"
                className="mh-30px mh-lg-40px"
                alt=""
              />
            </div>
            <div
              className="d-flex flex-center m-3 m-md-6"
              data-bs-toggle="tooltip"
              title="Nasa"
            >
              <img
                src="assets/media/svg/brand-logos/nasa.svg"
                className="mh-30px mh-lg-40px"
                alt=""
              />
            </div>
            <div
              className="d-flex flex-center m-3 m-md-6"
              data-bs-toggle="tooltip"
              title="Aspnetzero"
            >
              <img
                src="assets/media/svg/brand-logos/aspnetzero.svg"
                className="mh-30px mh-lg-40px"
                alt=""
              />
            </div>
            <div
              className="d-flex flex-center m-3 m-md-6"
              data-bs-toggle="tooltip"
              title="AON - Empower Results"
            >
              <img
                src="assets/media/svg/brand-logos/aon.svg"
                className="mh-30px mh-lg-40px"
                alt=""
              />
            </div>
            <div
              className="d-flex flex-center m-3 m-md-6"
              data-bs-toggle="tooltip"
              title="Hewlett-Packard"
            >
              <img
                src="assets/media/svg/brand-logos/hp-3.svg"
                className="mh-30px mh-lg-40px"
                alt=""
              />
            </div>
            <div
              className="d-flex flex-center m-3 m-md-6"
              data-bs-toggle="tooltip"
              title="Truman"
            >
              <img
                src="assets/media/svg/brand-logos/truman.svg"
                className="mh-30px mh-lg-40px"
                alt=""
              />
            </div>
          </div> */}
        </div>
        {/* <div className="landing-curve landing-dark-color mb-10 mb-lg-20">
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
        </div> */}
      </div>
    </div>
  );
};

export default Heading;
