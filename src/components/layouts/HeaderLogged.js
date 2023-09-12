import { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

import {
  setAuthAccessToken,
  setAuthEmail,
  setAuthRole,
  setAuthUserId,
  setAuthState,
} from "../../store/slices/authSlice";
import { setSearchValue } from "../../store/slices/projectSlice";
import HeaderPopup from "../popup/HeaderPopup";

import styles from "../layouts/HeaderLogged.module.css";

function HeaderLogged() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchType, setSearchType] = useState("");
  const [popup, setPopup] = useState(false);
  const ref = useRef(null);
  const dispatch = useDispatch();

  const router = useRouter();
  const { asPath } = router;

  const handleSearchChange = async (e) => {
    setSearchType(e.target.value);
    dispatch(setSearchValue(e.target.value));
  };

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

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    localStorage.removeItem("userId");

    dispatch(setAuthState(false));
    dispatch(setAuthAccessToken(null));
    dispatch(setAuthUserId(null));
    dispatch(setAuthEmail(null));
    dispatch(setAuthRole(null));
    // router.push('/')
    signOut();
    closeModal();
  };

  useEffect(() => {
    if (asPath === "/projects") {
      setIsFilterOpen(true);
    } else {
      setIsFilterOpen(false);
    }
  }, [asPath]);

  return (
    <div
      id="kt_header"
      className="header"
      data-kt-sticky="true"
      data-kt-sticky-name="header"
      data-kt-sticky-offset="{default: '200px', lg: '300px'}"
    >
      <div className="container d-flex flex-grow-1 flex-stack cream-bg">
        <div className="d-flex align-items-center me-5">
          <Link href="/">
            <img
              alt="Logo"
              src="/images/Logo.png"
              className="logo-default h-lg-50px"
            />
          </Link>
        </div>
        <div className="d-flex align-items-center">
          <div className="d-flex align-items-center flex-shrink-0">
            {isFilterOpen && (
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
                  className="bg-white d-none d-lg-block w-100 mb-5 mb-lg-0 position-relative"
                  autoComplete="off"
                >
                  <input type="hidden" />
                  <span className="svg-icon svg-icon-2 svg-icon-gray-700 position-absolute top-50 translate-middle-y ms-4">
                    <svg
                      className={styles.search}
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.436 12.0849L17.376 16.0949C17.5525 16.2857 17.6478 16.5377 17.6417 16.7975C17.6356 17.0573 17.5286 17.3046 17.3433 17.4869C17.158 17.6691 16.9091 17.7721 16.6492 17.774C16.3893 17.7759 16.1389 17.6765 15.951 17.4969L12.013 13.4909C10.4935 14.6356 8.59589 15.16 6.70428 14.9581C4.81266 14.7562 3.06845 13.8431 1.82482 12.4035C0.581181 10.9639 -0.0689429 9.10557 0.00608451 7.2047C0.081112 5.30382 0.875683 3.50248 2.22891 2.16542C3.58214 0.828356 5.3929 0.05549 7.29454 0.00331263C9.19618 -0.0488648 11.0466 0.623545 12.4711 1.88439C13.8956 3.14524 14.7878 4.9003 14.9669 6.7942C15.1461 8.6881 14.5988 10.5793 13.436 12.0849ZM7.5 12.9999C8.95869 12.9999 10.3576 12.4204 11.3891 11.389C12.4205 10.3575 13 8.9586 13 7.49991C13 6.04122 12.4205 4.64227 11.3891 3.61082C10.3576 2.57937 8.95869 1.99991 7.5 1.99991C6.04131 1.99991 4.64236 2.57937 3.61091 3.61082C2.57946 4.64227 2 6.04122 2 7.49991C2 8.9586 2.57946 10.3575 3.61091 11.389C4.64236 12.4204 6.04131 12.9999 7.5 12.9999Z"
                        fill="#8D93B6"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    className="form-control bg-transparent ps-13 fs-7 h-40px"
                    name="search"
                    placeholder="ძიება"
                    data-kt-search-element="search"
                    value={searchType}
                    onChange={(e) => handleSearchChange(e)}
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
            )}
            <div className="d-flex align-items-center ms-3 ms-lg-4">
              <Link
                className="btn btn-icon btn-color-gray-700 btn-active-color-primary btn-outline btn-outline-secondary btn-active-bg-light w-30px h-30px w-lg-40px h-lg-40px"
                href="/projects"
              >
                <span className="svg-icon-1">
                  <svg
                    width="24"
                    height="23"
                    viewBox="0 0 24 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.666672 22.8717V5.53841H6V0.205078H18V10.8717H23.3333V22.8717H14V17.5384H10V22.8717H0.666672ZM2.00001 21.5384H6V17.5384H2.00001V21.5384ZM2.00001 16.2051H6V12.2051H2.00001V16.2051ZM2.00001 10.8717H6V6.87174H2.00001V10.8717ZM7.33334 16.2051H11.3333V12.2051H7.33334V16.2051ZM7.33334 10.8717H11.3333V6.87174H7.33334V10.8717ZM7.33334 5.53841H11.3333V1.53841H7.33334V5.53841ZM12.6667 16.2051H16.6667V12.2051H12.6667V16.2051ZM12.6667 10.8717H16.6667V6.87174H12.6667V10.8717ZM12.6667 5.53841H16.6667V1.53841H12.6667V5.53841ZM18 21.5384H22V17.5384H18V21.5384ZM18 16.2051H22V12.2051H18V16.2051Z"
                      fill="#2B3467"
                    />
                  </svg>
                </span>
              </Link>
            </div>
            {popup && (
              <div className={styles.popup}>
                <HeaderPopup />
              </div>
            )}
            <div className={` d-flex align-items-center ms-3 ms-lg-4 `}>
              <div
                onClick={openModal}
                className={` ${isModalOpen ? styles.activeBg : ""
                  } btn btn-icon btn-color-gray-700 btn-active-color-primary btn-outline btn-outline-secondary w-30px h-30px w-lg-40px h-lg-40px `}
                data-kt-menu-trigger="click"
                data-kt-menu-attach="parent"
                data-kt-menu-placement="bottom-end"
              >
                <span className="svg-icon-1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.26153 19.3128C5.39487 18.4974 6.59743 17.8526 7.86923 17.3782C9.14103 16.9038 10.518 16.6667 12 16.6667C13.482 16.6667 14.859 16.9038 16.1308 17.3782C17.4026 17.8526 18.6051 18.4974 19.7385 19.3128C20.6188 18.4017 21.3269 17.3256 21.8628 16.0846C22.3987 14.8436 22.6667 13.482 22.6667 12C22.6667 9.04445 21.6278 6.52778 19.55 4.45C17.4722 2.37222 14.9556 1.33333 12 1.33333C9.04445 1.33333 6.52778 2.37222 4.45 4.45C2.37222 6.52778 1.33333 9.04445 1.33333 12C1.33333 13.482 1.60128 14.8436 2.13717 16.0846C2.67308 17.3256 3.3812 18.4017 4.26153 19.3128ZM12 12.6667C10.8769 12.6667 9.92948 12.2808 9.1577 11.509C8.3859 10.7372 8 9.78976 8 8.66667C8 7.54358 8.3859 6.59615 9.1577 5.82437C9.92948 5.05257 10.8769 4.66667 12 4.66667C13.1231 4.66667 14.0705 5.05257 14.8423 5.82437C15.6141 6.59615 16 7.54358 16 8.66667C16 9.78976 15.6141 10.7372 14.8423 11.509C14.0705 12.2808 13.1231 12.6667 12 12.6667ZM12 24C10.3265 24 8.75982 23.6885 7.3 23.0654C5.84018 22.4423 4.57009 21.5906 3.48973 20.5103C2.4094 19.4299 1.55769 18.1598 0.9346 16.7C0.311533 15.2402 0 13.6735 0 12C0 10.3265 0.311533 8.75982 0.9346 7.3C1.55769 5.84018 2.4094 4.57009 3.48973 3.48973C4.57009 2.4094 5.84018 1.55769 7.3 0.934601C8.75982 0.311534 10.3265 0 12 0C13.6735 0 15.2402 0.311534 16.7 0.934601C18.1598 1.55769 19.4299 2.4094 20.5103 3.48973C21.5906 4.57009 22.4423 5.84018 23.0654 7.3C23.6885 8.75982 24 10.3265 24 12C24 13.6735 23.6885 15.2402 23.0654 16.7C22.4423 18.1598 21.5906 19.4299 20.5103 20.5103C19.4299 21.5906 18.1598 22.4423 16.7 23.0654C15.2402 23.6885 13.6735 24 12 24Z"
                      fill="#2B3467"
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
                    <Link href="/account" className={styles.hover}>
                      <span>პროფილი</span>
                    </Link>
                    <Link href="/">
                      <div
                        onClick={handleLogout}
                        className={`${styles.hover} justify-content-between d-flex`}
                      >
                        გასვლა
                        <svg
                          className={styles.closeBtn}
                          width="16"
                          height="17"
                          viewBox="0 0 16 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.80776 17C1.34751 17 0.963216 16.8458 0.654883 16.5375C0.346549 16.2292 0.192383 15.8449 0.192383 15.3846V1.61537C0.192383 1.15512 0.346549 0.770833 0.654883 0.4625C0.963216 0.154167 1.34751 0 1.80776 0H8.23086V1H1.80776C1.65392 1 1.51291 1.0641 1.38471 1.1923C1.25649 1.32052 1.19238 1.46154 1.19238 1.61537V15.3846C1.19238 15.5385 1.25649 15.6795 1.38471 15.8077C1.51291 15.9359 1.65392 16 1.80776 16H8.23086V17H1.80776ZM12.2693 12.0385L11.5674 11.3192L13.8866 9H5.23086V8H13.8866L11.5674 5.68075L12.2693 4.96152L15.8078 8.5L12.2693 12.0385Z"
                            fill="#2B3467"
                          />
                        </svg>
                      </div>
                    </Link>
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
