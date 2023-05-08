import { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import { useDispatch } from "react-redux";
import {
  setAuthAccessToken,
  setAuthEmail,
  setAuthRole,
  setAuthUserId,
} from "@/store/slices/authSlice";
import HeaderPopup from "../popup/HeaderPopup";

import styles from "../layouts/HeaderLogged.module.css";

function HeaderLogged() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [popup, setPopup] = useState(false);
  const ref = useRef(null);
  const dispatch = useDispatch();

  const animation = useSpring({
    opacity: isModalOpen ? 1 : 0,
  });

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        closeModal();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  function openModal() {
    setIsModalOpen((prevState) => !prevState);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  const popupHandler = () => {
    if (!popup) {
      setPopup(true);
    } else {
      setPopup(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    localStorage.removeItem("userId");
    dispatch(setAuthAccessToken(null));
    dispatch(setAuthUserId(null));
    dispatch(setAuthEmail(null));
    dispatch(setAuthRole(null));
  };

  return (
    <div
      id="kt_header"
      className="header"
      data-kt-sticky="true"
      data-kt-sticky-name="header"
      data-kt-sticky-offset="{default: '200px', lg: '300px'}"
    >
      <div className="container-xxl d-flex flex-grow-1 flex-stack">
        <div className="d-flex align-items-center me-5">
          <div
            className="d-lg-none btn btn-icon btn-active-color-primary w-30px h-30px ms-n2 me-3"
            id="kt_header_menu_toggle"
          >
            <span className="svg-icon svg-icon-1">
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
          </div>
          <a href="../../demo11/dist/index.html">
            <img
              alt="Logo"
              src="assets/media/logos/logo-demo11.svg"
              className="h-20px h-lg-30px"
            />
          </a>
        </div>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center flex-shrink-0">
            <div
              id="kt_header_search"
              className="d-flex align-items-center w-lg-225px"
              data-kt-search-keypress="true"
              data-kt-search-min-length={2}
              data-kt-search-enter="enter"
              data-kt-search-layout="menu"
              data-kt-search-responsive="lg"
              data-kt-menu-trigger="auto"
              data-kt-menu-permanent="true"
              data-kt-menu-placement="bottom-end"
            >
              <div
                data-kt-search-element="toggle"
                className="d-flex d-lg-none align-items-center"
              >
                <div className="btn btn-icon btn-color-gray-700 btn-active-color-primary btn-outline btn-outline-secondary w-30px h-30px">
                  <span className="svg-icon svg-icon-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M21.7 18.9L18.6 15.8C17.9 16.9 16.9 17.9 15.8 18.6L18.9 21.7C19.3 22.1 19.9 22.1 20.3 21.7L21.7 20.3C22.1 19.9 22.1 19.3 21.7 18.9Z"
                        fill="black"
                      />
                      <path
                        opacity="0.3"
                        d="M11 20C6 20 2 16 2 11C2 6 6 2 11 2C16 2 20 6 20 11C20 16 16 20 11 20ZM11 4C7.1 4 4 7.1 4 11C4 14.9 7.1 18 11 18C14.9 18 18 14.9 18 11C18 7.1 14.9 4 11 4ZM8 11C8 9.3 9.3 8 11 8C11.6 8 12 7.6 12 7C12 6.4 11.6 6 11 6C8.2 6 6 8.2 6 11C6 11.6 6.4 12 7 12C7.6 12 8 11.6 8 11Z"
                        fill="black"
                      />
                    </svg>
                  </span>
                </div>
              </div>
              <form
                data-kt-search-element="form"
                className="d-none d-lg-block w-100 mb-5 mb-lg-0 position-relative"
                autoComplete="off"
              >
                <input type="hidden" />
                <span className="svg-icon svg-icon-2 svg-icon-gray-700 position-absolute top-50 translate-middle-y ms-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21.7 18.9L18.6 15.8C17.9 16.9 16.9 17.9 15.8 18.6L18.9 21.7C19.3 22.1 19.9 22.1 20.3 21.7L21.7 20.3C22.1 19.9 22.1 19.3 21.7 18.9Z"
                      fill="black"
                    />
                    <path
                      opacity="0.3"
                      d="M11 20C6 20 2 16 2 11C2 6 6 2 11 2C16 2 20 6 20 11C20 16 16 20 11 20ZM11 4C7.1 4 4 7.1 4 11C4 14.9 7.1 18 11 18C14.9 18 18 14.9 18 11C18 7.1 14.9 4 11 4ZM8 11C8 9.3 9.3 8 11 8C11.6 8 12 7.6 12 7C12 6.4 11.6 6 11 6C8.2 6 6 8.2 6 11C6 11.6 6.4 12 7 12C7.6 12 8 11.6 8 11Z"
                      fill="black"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  className="form-control bg-transparent ps-13 fs-7 h-40px"
                  name="search"
                  defaultValue=""
                  placeholder="Quick Search"
                  data-kt-search-element="input"
                />
                <span
                  className="position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-5"
                  data-kt-search-element="spinner"
                >
                  <span className="spinner-border h-15px w-15px align-middle text-gray-400" />
                </span>
                <span
                  className="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 d-none me-4"
                  data-kt-search-element="clear"
                >
                  <span className="svg-icon svg-icon-2 svg-icon-lg-1 me-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <rect
                        opacity="0.5"
                        x={6}
                        y="17.3137"
                        width={16}
                        height={2}
                        rx={1}
                        transform="rotate(-45 6 17.3137)"
                        fill="black"
                      />
                      <rect
                        x="7.41422"
                        y={6}
                        width={16}
                        height={2}
                        rx={1}
                        transform="rotate(45 7.41422 6)"
                        fill="black"
                      />
                    </svg>
                  </span>
                </span>
              </form>
            </div>
            <div className="d-flex align-items-center ms-3 ms-lg-4">
              <div
                onClick={popupHandler}
                className="btn btn-icon btn-color-gray-700 btn-active-color-primary btn-outline btn-outline-secondary btn-active-bg-light w-30px h-30px w-lg-40px h-lg-40px"
              >
                <span className="svg-icon svg-icon-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-buildings"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5V8.694ZM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15Z" />
                    <path d="M2 11h1v1H2v-1Zm2 0h1v1H4v-1Zm-2 2h1v1H2v-1Zm2 0h1v1H4v-1Zm4-4h1v1H8V9Zm2 0h1v1h-1V9Zm-2 2h1v1H8v-1Zm2 0h1v1h-1v-1Zm2-2h1v1h-1V9Zm0 2h1v1h-1v-1ZM8 7h1v1H8V7Zm2 0h1v1h-1V7Zm2 0h1v1h-1V7ZM8 5h1v1H8V5Zm2 0h1v1h-1V5Zm2 0h1v1h-1V5Zm0-2h1v1h-1V3Z" />
                  </svg>
                </span>
              </div>
              {popup && (
                <div className={styles.popup}>
                  <HeaderPopup />
                </div>
              )}
            </div>
            <div className={` d-flex align-items-center ms-3 ms-lg-4 `}>
              <div
                onClick={openModal}
                className={` ${
                  isModalOpen ? styles.activeBg : ""
                } btn btn-icon btn-color-gray-700 btn-active-color-primary btn-outline btn-outline-secondary w-30px h-30px w-lg-40px h-lg-40px `}
                data-kt-menu-trigger="click"
                data-kt-menu-attach="parent"
                data-kt-menu-placement="bottom-end"
              >
                <span className="svg-icon svg-icon-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M6.28548 15.0861C7.34369 13.1814 9.35142 12 11.5304 12H12.4696C14.6486 12 16.6563 13.1814 17.7145 15.0861L19.3493 18.0287C20.0899 19.3618 19.1259 21 17.601 21H6.39903C4.87406 21 3.91012 19.3618 4.65071 18.0287L6.28548 15.0861Z"
                      fill="black"
                    />
                    <rect
                      opacity="0.3"
                      x={8}
                      y={3}
                      width={8}
                      height={8}
                      rx={4}
                      fill="black"
                    />
                  </svg>
                </span>
                {isModalOpen && (
                  <div className={styles.backdrop} onClick={closeModal}></div>
                )}
              </div>
              {isModalOpen && (
                <animated.div className="modal" style={animation}>
                  <div ref={ref} className={`${styles.modalWindow}`}>
                    <div onClick={handleLogout} className={styles.hover}>
                      გამოსვლა
                    </div>
                    <svg
                      onClick={closeModal}
                      className={styles.closeBtn}
                      width="64px"
                      height="64px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke="#CCCCCC"
                        strokeWidth="0.336"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <g id="Menu / Close_MD">
                          <path
                            id="Vector"
                            d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                </animated.div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="separator" />
    </div>
  );
}

export default HeaderLogged;
