import { useState, useEffect, useRef, use } from "react";
import { useSpring, animated } from "react-spring";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import { useMobileWidth } from "../../hooks/useMobileWidth";
import Link from "next/link";

import {
  setAuthAccessToken,
  setAuthEmail,
  setAuthRole,
  setAuthUserId,
  setAuthState,
  selectAuthState,
} from "../../store/slices/authSlice";
import { setSearchValue } from "../../store/slices/projectSlice";

import HeaderPopup from "../popup/HeaderPopup";
import LogOutSvg from "../svg/LogOutSvg";
import ProfileSvg from "../svg/ProfileSvg";
import BuildSvg from "../svg/BuildSvg";
import XSvg from "../svg/XSvg";
import SearchSvg from "../svg/SearchSvg";
import Search2Svg from "../svg/Search2Svg";

import styles from "../layouts/HeaderLogged.module.css";

function HeaderLogged() {
  const [hideSearch, setHideSearch] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchType, setSearchType] = useState("");
  const [popup, setPopup] = useState(false);
  const ref = useRef(null);
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const loggedIn = useSelector(selectAuthState);

  const router = useRouter();
  const { asPath } = router;
  const formRef = useRef(null);
  const buttonRef = useRef(null);

  const { width } = useMobileWidth();

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
        setIsModalOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  function openModal() {
    setIsModalOpen(true);
  }

  const handleLogout = () => {
    router.push("/");
    setTimeout(() => {
      localStorage.removeItem("access_token");
      localStorage.removeItem("email");
      localStorage.removeItem("role");
      localStorage.removeItem("userId");

      dispatch(setAuthState(false));
      dispatch(setAuthAccessToken(null));
      dispatch(setAuthUserId(null));
      dispatch(setAuthEmail(null));
      dispatch(setAuthRole(null));
    }, 300);
    setIsModalOpen(false);
  };

  const handleGoogleLogout = async () => {
    setTimeout(() => {
      localStorage.removeItem("access_token");
      localStorage.removeItem("email");
      localStorage.removeItem("role");
      localStorage.removeItem("userId");

      dispatch(setAuthState(false));
      dispatch(setAuthAccessToken(null));
      dispatch(setAuthUserId(null));
      dispatch(setAuthEmail(null));
      dispatch(setAuthRole(null));
    }, 300);
    setIsModalOpen(false);
    await signOut({
      callbackUrl: `${window.location.origin}/`,
    });
  };

  useEffect(() => {
    if (asPath === "/projects") {
      setIsFilterOpen(true);
    } else {
      setIsFilterOpen(false);
    }
  }, [asPath]);

  useEffect(() => {
    if (width > 991) {
      setHideSearch(true);
    }
    function handleClickOutside(event) {
      if (formRef.current && !formRef.current.contains(event.target)) {
        if (buttonRef.current && !buttonRef.current.contains(event.target)) {
          setHideSearch(true);
        }
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [width]);

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
                  style={{
                    zIndex: !hideSearch ? "-1" : "9999",
                    transitionDelay: !hideSearch ? "0s" : "0.5s",
                  }}
                >
                  <div className="btn btn-icon btn-color-gray-700 btn-active-color-primary btn-outline btn-outline-secondary w-30px h-30px">
                    <span className="svg-icon svg-icon-2">
                      <Search2Svg
                        onClick={() => setHideSearch(false)}
                        ref={buttonRef}
                      />
                    </span>
                  </div>
                </div>
                <form
                  data-kt-search-element="form"
                  className={`bg-white d-lg-block w-100 mb-lg-0 position-relative ${
                    hideSearch ? `${styles.hideSearch}` : `${styles.showSearch}`
                  }`}
                  autoComplete="off"
                  ref={formRef}
                >
                  <input type="hidden" />
                  <span className="svg-icon svg-icon-2 svg-icon-gray-700 position-absolute top-50 translate-middle-y ms-4">
                    <SearchSvg className={styles.search} />
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
                      <XSvg />
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
                  <BuildSvg />
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
                className={` ${
                  isModalOpen ? styles.activeBg : ""
                } btn btn-icon btn-color-gray-700 btn-active-color-primary btn-outline btn-outline-secondary w-30px h-30px w-lg-40px h-lg-40px `}
                data-kt-menu-trigger="click"
                data-kt-menu-attach="parent"
                data-kt-menu-placement="bottom-end"
              >
                <span className="svg-icon-1">
                  <ProfileSvg />
                </span>
              </div>
              {isModalOpen && (
                <animated.div className="modal" style={animation}>
                  <div ref={ref} className={`${styles.modalWindow}`}>
                    <Link href="/account" className={styles.hover}>
                      <span>პროფილი</span>
                    </Link>
                    <div
                      className={`${styles.hover} justify-content-between d-flex`}
                      onClick={loggedIn ? handleGoogleLogout : handleLogout}
                    >
                      გასვლა
                      <LogOutSvg className={styles.closeBtn} />
                    </div>
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
