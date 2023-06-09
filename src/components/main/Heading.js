import Auth from "../popup/Auth.js";
import HeaderPopup from "../popup/HeaderPopup";
import Link from 'next/link';
import { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAuthState,
  setAuthState,
  selectAuthAccessToken,
} from "../../store/slices/authSlice";

const Heading = () => {
  const loggedIn = useSelector(setAuthState);
  const log = loggedIn.payload.auth.loggedIn;
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

  return (
    <div className="mb-0" id="home">
      <div
        className="bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-bottom landing-dark-bg"
        style={{
          backgroundImage: "url(assets/media/svg/illustrations/landing.svg)",
        }}
      >
        <div className="d-flex flex-column flex-center w-100 min-h-350px min-h-lg-500px px-9 relative">
          <div className="text-center mb-5 mb-lg-10 py-10 py-lg-20">
            <h1 style={{
                background:
                "linear-gradient(to right, #12CE5D 0%, #FFD80C 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
            }}
              className="lh-base fw-bolder fs-2x fs-lg-3x mb-15 georgian">
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
            {log ? (
             <Link href="/projects">
                <div
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
                <b>გამოთვალე!</b>
                </div>
              </Link>
            ) : (
              <div
              onClick={handleAuthClick}
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
              <b>გამოთვალე!</b>
            </div>
            )}
            {log ? (null) : (
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
