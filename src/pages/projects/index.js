const Projects = () => {
  return (
    <>
      <div className="d-flex flex-column flex-root">
        <div className="page d-flex flex-row flex-column-fluid">
          <div
            className="wrapper d-flex flex-column flex-row-fluid"
            id="kt_wrapper"
          >
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
                      <div
                        data-kt-search-element="content"
                        className="menu menu-sub menu-sub-dropdown w-300px w-md-350px py-7 px-7 overflow-hidden"
                      >
                        <div data-kt-search-element="wrapper">
                          <div
                            data-kt-search-element="results"
                            className="d-none"
                          >
                            <div className="scroll-y mh-200px mh-lg-350px">
                              <h3
                                className="fs-5 text-muted m-0 pb-5"
                                data-kt-search-element="category-title"
                              >
                                Users
                              </h3>
                              <a
                                href="#"
                                className="d-flex text-dark text-hover-primary align-items-center mb-5"
                              >
                                <div className="symbol symbol-40px me-4">
                                  <img
                                    src="assets/media/avatars/150-1.png"
                                    alt=""
                                  />
                                </div>
                                <div className="d-flex flex-column justify-content-start fw-bold">
                                  <span className="fs-6 fw-bold">
                                    Karina Clark
                                  </span>
                                  <span className="fs-7 fw-bold text-muted">
                                    Marketing Manager
                                  </span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="d-flex text-dark text-hover-primary align-items-center mb-5"
                              >
                                <div className="symbol symbol-40px me-4">
                                  <img
                                    src="assets/media/avatars/150-3.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="d-flex flex-column justify-content-start fw-bold">
                                  <span className="fs-6 fw-bold">
                                    Olivia Bold
                                  </span>
                                  <span className="fs-7 fw-bold text-muted">
                                    Software Engineer
                                  </span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="d-flex text-dark text-hover-primary align-items-center mb-5"
                              >
                                <div className="symbol symbol-40px me-4">
                                  <img
                                    src="assets/media/avatars/150-8.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="d-flex flex-column justify-content-start fw-bold">
                                  <span className="fs-6 fw-bold">
                                    Ana Clark
                                  </span>
                                  <span className="fs-7 fw-bold text-muted">
                                    UI/UX Designer
                                  </span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="d-flex text-dark text-hover-primary align-items-center mb-5"
                              >
                                <div className="symbol symbol-40px me-4">
                                  <img
                                    src="assets/media/avatars/150-11.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="d-flex flex-column justify-content-start fw-bold">
                                  <span className="fs-6 fw-bold">
                                    Nick Pitola
                                  </span>
                                  <span className="fs-7 fw-bold text-muted">
                                    Art Director
                                  </span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="d-flex text-dark text-hover-primary align-items-center mb-5"
                              >
                                <div className="symbol symbol-40px me-4">
                                  <img
                                    src="assets/media/avatars/150-12.jpg"
                                    alt=""
                                  />
                                </div>
                                <div className="d-flex flex-column justify-content-start fw-bold">
                                  <span className="fs-6 fw-bold">
                                    Edward Kulnic
                                  </span>
                                  <span className="fs-7 fw-bold text-muted">
                                    System Administrator
                                  </span>
                                </div>
                              </a>
                              <h3
                                className="fs-5 text-muted m-0 pt-5 pb-5"
                                data-kt-search-element="category-title"
                              >
                                Customers
                              </h3>
                              <a
                                href="#"
                                className="d-flex text-dark text-hover-primary align-items-center mb-5"
                              >
                                <div className="symbol symbol-40px me-4">
                                  <span className="symbol-label bg-light">
                                    <img
                                      className="w-20px h-20px"
                                      src="assets/media/svg/brand-logos/volicity-9.svg"
                                      alt=""
                                    />
                                  </span>
                                </div>
                                <div className="d-flex flex-column justify-content-start fw-bold">
                                  <span className="fs-6 fw-bold">
                                    Company Rbranding
                                  </span>
                                  <span className="fs-7 fw-bold text-muted">
                                    UI Design
                                  </span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="d-flex text-dark text-hover-primary align-items-center mb-5"
                              >
                                <div className="symbol symbol-40px me-4">
                                  <span className="symbol-label bg-light">
                                    <img
                                      className="w-20px h-20px"
                                      src="assets/media/svg/brand-logos/tvit.svg"
                                      alt=""
                                    />
                                  </span>
                                </div>
                                <div className="d-flex flex-column justify-content-start fw-bold">
                                  <span className="fs-6 fw-bold">
                                    Company Re-branding
                                  </span>
                                  <span className="fs-7 fw-bold text-muted">
                                    Web Development
                                  </span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="d-flex text-dark text-hover-primary align-items-center mb-5"
                              >
                                <div className="symbol symbol-40px me-4">
                                  <span className="symbol-label bg-light">
                                    <img
                                      className="w-20px h-20px"
                                      src="assets/media/svg/misc/infography.svg"
                                      alt=""
                                    />
                                  </span>
                                </div>
                                <div className="d-flex flex-column justify-content-start fw-bold">
                                  <span className="fs-6 fw-bold">
                                    Business Analytics App
                                  </span>
                                  <span className="fs-7 fw-bold text-muted">
                                    Administration
                                  </span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="d-flex text-dark text-hover-primary align-items-center mb-5"
                              >
                                <div className="symbol symbol-40px me-4">
                                  <span className="symbol-label bg-light">
                                    <img
                                      className="w-20px h-20px"
                                      src="assets/media/svg/brand-logos/leaf.svg"
                                      alt=""
                                    />
                                  </span>
                                </div>
                                <div className="d-flex flex-column justify-content-start fw-bold">
                                  <span className="fs-6 fw-bold">
                                    EcoLeaf App Launch
                                  </span>
                                  <span className="fs-7 fw-bold text-muted">
                                    Marketing
                                  </span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="d-flex text-dark text-hover-primary align-items-center mb-5"
                              >
                                <div className="symbol symbol-40px me-4">
                                  <span className="symbol-label bg-light">
                                    <img
                                      className="w-20px h-20px"
                                      src="assets/media/svg/brand-logos/tower.svg"
                                      alt=""
                                    />
                                  </span>
                                </div>
                                <div className="d-flex flex-column justify-content-start fw-bold">
                                  <span className="fs-6 fw-bold">
                                    Tower Group Website
                                  </span>
                                  <span className="fs-7 fw-bold text-muted">
                                    Google Adwords
                                  </span>
                                </div>
                              </a>
                              <h3
                                className="fs-5 text-muted m-0 pt-5 pb-5"
                                data-kt-search-element="category-title"
                              >
                                Projects
                              </h3>
                              <a
                                href="#"
                                className="d-flex text-dark text-hover-primary align-items-center mb-5"
                              >
                                <div className="symbol symbol-40px me-4">
                                  <span className="symbol-label bg-light">
                                    <span className="svg-icon svg-icon-2 svg-icon-primary">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                      >
                                        <path
                                          opacity="0.3"
                                          d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM15 17C15 16.4 14.6 16 14 16H8C7.4 16 7 16.4 7 17C7 17.6 7.4 18 8 18H14C14.6 18 15 17.6 15 17ZM17 12C17 11.4 16.6 11 16 11H8C7.4 11 7 11.4 7 12C7 12.6 7.4 13 8 13H16C16.6 13 17 12.6 17 12ZM17 7C17 6.4 16.6 6 16 6H8C7.4 6 7 6.4 7 7C7 7.6 7.4 8 8 8H16C16.6 8 17 7.6 17 7Z"
                                          fill="black"
                                        />
                                        <path
                                          d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z"
                                          fill="black"
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                </div>
                                <div className="d-flex flex-column">
                                  <span className="fs-6 fw-bold">
                                    Si-Fi Project by AU Themes
                                  </span>
                                  <span className="fs-7 fw-bold text-muted">
                                    #45670
                                  </span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="d-flex text-dark text-hover-primary align-items-center mb-5"
                              >
                                <div className="symbol symbol-40px me-4">
                                  <span className="symbol-label bg-light">
                                    <span className="svg-icon svg-icon-2 svg-icon-primary">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                      >
                                        <rect
                                          x={8}
                                          y={9}
                                          width={3}
                                          height={10}
                                          rx="1.5"
                                          fill="black"
                                        />
                                        <rect
                                          opacity="0.5"
                                          x={13}
                                          y={5}
                                          width={3}
                                          height={14}
                                          rx="1.5"
                                          fill="black"
                                        />
                                        <rect
                                          x={18}
                                          y={11}
                                          width={3}
                                          height={8}
                                          rx="1.5"
                                          fill="black"
                                        />
                                        <rect
                                          x={3}
                                          y={13}
                                          width={3}
                                          height={6}
                                          rx="1.5"
                                          fill="black"
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                </div>
                                <div className="d-flex flex-column">
                                  <span className="fs-6 fw-bold">
                                    Shopix Mobile App Planning
                                  </span>
                                  <span className="fs-7 fw-bold text-muted">
                                    #45690
                                  </span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="d-flex text-dark text-hover-primary align-items-center mb-5"
                              >
                                <div className="symbol symbol-40px me-4">
                                  <span className="symbol-label bg-light">
                                    <span className="svg-icon svg-icon-2 svg-icon-primary">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                      >
                                        <path
                                          opacity="0.3"
                                          d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                                          fill="black"
                                        />
                                        <rect
                                          x={6}
                                          y={12}
                                          width={7}
                                          height={2}
                                          rx={1}
                                          fill="black"
                                        />
                                        <rect
                                          x={6}
                                          y={7}
                                          width={12}
                                          height={2}
                                          rx={1}
                                          fill="black"
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                </div>
                                <div className="d-flex flex-column">
                                  <span className="fs-6 fw-bold">
                                    Finance Monitoring SAAS Discussion
                                  </span>
                                  <span className="fs-7 fw-bold text-muted">
                                    #21090
                                  </span>
                                </div>
                              </a>
                              <a
                                href="#"
                                className="d-flex text-dark text-hover-primary align-items-center mb-5"
                              >
                                <div className="symbol symbol-40px me-4">
                                  <span className="symbol-label bg-light">
                                    <span className="svg-icon svg-icon-2 svg-icon-primary">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                      >
                                        <path
                                          opacity="0.3"
                                          d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 7C10.3 7 9 8.3 9 10C9 11.7 10.3 13 12 13C13.7 13 15 11.7 15 10C15 8.3 13.7 7 12 7Z"
                                          fill="black"
                                        />
                                        <path
                                          d="M12 22C14.6 22 17 21 18.7 19.4C17.9 16.9 15.2 15 12 15C8.8 15 6.09999 16.9 5.29999 19.4C6.99999 21 9.4 22 12 22Z"
                                          fill="black"
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                </div>
                                <div className="d-flex flex-column">
                                  <span className="fs-6 fw-bold">
                                    Dashboard Analitics Launch
                                  </span>
                                  <span className="fs-7 fw-bold text-muted">
                                    #34560
                                  </span>
                                </div>
                              </a>
                            </div>
                          </div>
                          <div data-kt-search-element="main">
                            <div className="d-flex flex-stack fw-bold mb-5">
                              <span className="text-muted fs-6 me-2">
                                Recently Searched
                              </span>
                              <div
                                className="d-flex"
                                data-kt-search-element="toolbar"
                              >
                                <div
                                  data-kt-search-element="preferences-show"
                                  className="btn btn-icon w-20px btn-sm btn-active-color-primary me-2 data-bs-toggle="
                                  title="Show search preferences"
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
                                        opacity="0.3"
                                        d="M22.1 11.5V12.6C22.1 13.2 21.7 13.6 21.2 13.7L19.9 13.9C19.7 14.7 19.4 15.5 18.9 16.2L19.7 17.2999C20 17.6999 20 18.3999 19.6 18.7999L18.8 19.6C18.4 20 17.8 20 17.3 19.7L16.2 18.9C15.5 19.3 14.7 19.7 13.9 19.9L13.7 21.2C13.6 21.7 13.1 22.1 12.6 22.1H11.5C10.9 22.1 10.5 21.7 10.4 21.2L10.2 19.9C9.4 19.7 8.6 19.4 7.9 18.9L6.8 19.7C6.4 20 5.7 20 5.3 19.6L4.5 18.7999C4.1 18.3999 4.1 17.7999 4.4 17.2999L5.2 16.2C4.8 15.5 4.4 14.7 4.2 13.9L2.9 13.7C2.4 13.6 2 13.1 2 12.6V11.5C2 10.9 2.4 10.5 2.9 10.4L4.2 10.2C4.4 9.39995 4.7 8.60002 5.2 7.90002L4.4 6.79993C4.1 6.39993 4.1 5.69993 4.5 5.29993L5.3 4.5C5.7 4.1 6.3 4.10002 6.8 4.40002L7.9 5.19995C8.6 4.79995 9.4 4.39995 10.2 4.19995L10.4 2.90002C10.5 2.40002 11 2 11.5 2H12.6C13.2 2 13.6 2.40002 13.7 2.90002L13.9 4.19995C14.7 4.39995 15.5 4.69995 16.2 5.19995L17.3 4.40002C17.7 4.10002 18.4 4.1 18.8 4.5L19.6 5.29993C20 5.69993 20 6.29993 19.7 6.79993L18.9 7.90002C19.3 8.60002 19.7 9.39995 19.9 10.2L21.2 10.4C21.7 10.5 22.1 11 22.1 11.5ZM12.1 8.59998C10.2 8.59998 8.6 10.2 8.6 12.1C8.6 14 10.2 15.6 12.1 15.6C14 15.6 15.6 14 15.6 12.1C15.6 10.2 14 8.59998 12.1 8.59998Z"
                                        fill="black"
                                      />
                                      <path
                                        d="M17.1 12.1C17.1 14.9 14.9 17.1 12.1 17.1C9.30001 17.1 7.10001 14.9 7.10001 12.1C7.10001 9.29998 9.30001 7.09998 12.1 7.09998C14.9 7.09998 17.1 9.29998 17.1 12.1ZM12.1 10.1C11 10.1 10.1 11 10.1 12.1C10.1 13.2 11 14.1 12.1 14.1C13.2 14.1 14.1 13.2 14.1 12.1C14.1 11 13.2 10.1 12.1 10.1Z"
                                        fill="black"
                                      />
                                    </svg>
                                  </span>
                                </div>
                                <div
                                  data-kt-search-element="advanced-options-form-show"
                                  className="btn btn-icon w-20px btn-sm btn-active-color-primary me-n1"
                                  data-bs-toggle="tooltip"
                                  title="Show more search options"
                                >
                                  <span className="svg-icon svg-icon-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <path
                                        d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                        fill="black"
                                      />
                                    </svg>
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="scroll-y mh-200px mh-lg-325px">
                              <div className="d-flex align-items-center mb-5">
                                <div className="symbol symbol-40px me-4">
                                  <span className="symbol-label bg-light">
                                    <span className="svg-icon svg-icon-2 svg-icon-primary">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                      >
                                        <path
                                          d="M2 16C2 16.6 2.4 17 3 17H21C21.6 17 22 16.6 22 16V15H2V16Z"
                                          fill="black"
                                        />
                                        <path
                                          opacity="0.3"
                                          d="M21 3H3C2.4 3 2 3.4 2 4V15H22V4C22 3.4 21.6 3 21 3Z"
                                          fill="black"
                                        />
                                        <path
                                          opacity="0.3"
                                          d="M15 17H9V20H15V17Z"
                                          fill="black"
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                </div>
                                <div className="d-flex flex-column">
                                  <a
                                    href="#"
                                    className="fs-6 text-gray-800 text-hover-primary fw-bold"
                                  >
                                    BoomApp by Keenthemes
                                  </a>
                                  <span className="fs-7 text-muted fw-bold">
                                    #45789
                                  </span>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-5">
                                <div className="symbol symbol-40px me-4">
                                  <span className="symbol-label bg-light">
                                    <span className="svg-icon svg-icon-2 svg-icon-primary">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                      >
                                        <path
                                          opacity="0.3"
                                          d="M14 3V21H10V3C10 2.4 10.4 2 11 2H13C13.6 2 14 2.4 14 3ZM7 14H5C4.4 14 4 14.4 4 15V21H8V15C8 14.4 7.6 14 7 14Z"
                                          fill="black"
                                        />
                                        <path
                                          d="M21 20H20V8C20 7.4 19.6 7 19 7H17C16.4 7 16 7.4 16 8V20H3C2.4 20 2 20.4 2 21C2 21.6 2.4 22 3 22H21C21.6 22 22 21.6 22 21C22 20.4 21.6 20 21 20Z"
                                          fill="black"
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                </div>
                                <div className="d-flex flex-column">
                                  <a
                                    href="#"
                                    className="fs-6 text-gray-800 text-hover-primary fw-bold"
                                  >
                                    "Kept API Project Meeting
                                  </a>
                                  <span className="fs-7 text-muted fw-bold">
                                    #84050
                                  </span>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-5">
                                <div className="symbol symbol-40px me-4">
                                  <span className="symbol-label bg-light">
                                    <span className="svg-icon svg-icon-2 svg-icon-primary">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                      >
                                        <path
                                          d="M13 5.91517C15.8 6.41517 18 8.81519 18 11.8152C18 12.5152 17.9 13.2152 17.6 13.9152L20.1 15.3152C20.6 15.6152 21.4 15.4152 21.6 14.8152C21.9 13.9152 22.1 12.9152 22.1 11.8152C22.1 7.01519 18.8 3.11521 14.3 2.01521C13.7 1.91521 13.1 2.31521 13.1 3.01521V5.91517H13Z"
                                          fill="black"
                                        />
                                        <path
                                          opacity="0.3"
                                          d="M19.1 17.0152C19.7 17.3152 19.8 18.1152 19.3 18.5152C17.5 20.5152 14.9 21.7152 12 21.7152C9.1 21.7152 6.50001 20.5152 4.70001 18.5152C4.30001 18.0152 4.39999 17.3152 4.89999 17.0152L7.39999 15.6152C8.49999 16.9152 10.2 17.8152 12 17.8152C13.8 17.8152 15.5 17.0152 16.6 15.6152L19.1 17.0152ZM6.39999 13.9151C6.19999 13.2151 6 12.5152 6 11.8152C6 8.81517 8.2 6.41515 11 5.91515V3.01519C11 2.41519 10.4 1.91519 9.79999 2.01519C5.29999 3.01519 2 7.01517 2 11.8152C2 12.8152 2.2 13.8152 2.5 14.8152C2.7 15.4152 3.4 15.7152 4 15.3152L6.39999 13.9151Z"
                                          fill="black"
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                </div>
                                <div className="d-flex flex-column">
                                  <a
                                    href="#"
                                    className="fs-6 text-gray-800 text-hover-primary fw-bold"
                                  >
                                    "KPI Monitoring App Launch
                                  </a>
                                  <span className="fs-7 text-muted fw-bold">
                                    #84250
                                  </span>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-5">
                                <div className="symbol symbol-40px me-4">
                                  <span className="symbol-label bg-light">
                                    <span className="svg-icon svg-icon-2 svg-icon-primary">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                      >
                                        <path
                                          opacity="0.3"
                                          d="M20 8L12.5 5L5 14V19H20V8Z"
                                          fill="black"
                                        />
                                        <path
                                          d="M21 18H6V3C6 2.4 5.6 2 5 2C4.4 2 4 2.4 4 3V18H3C2.4 18 2 18.4 2 19C2 19.6 2.4 20 3 20H4V21C4 21.6 4.4 22 5 22C5.6 22 6 21.6 6 21V20H21C21.6 20 22 19.6 22 19C22 18.4 21.6 18 21 18Z"
                                          fill="black"
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                </div>
                                <div className="d-flex flex-column">
                                  <a
                                    href="#"
                                    className="fs-6 text-gray-800 text-hover-primary fw-bold"
                                  >
                                    Project Reference FAQ
                                  </a>
                                  <span className="fs-7 text-muted fw-bold">
                                    #67945
                                  </span>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-5">
                                <div className="symbol symbol-40px me-4">
                                  <span className="symbol-label bg-light">
                                    <span className="svg-icon svg-icon-2 svg-icon-primary">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                      >
                                        <path
                                          d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z"
                                          fill="black"
                                        />
                                        <path
                                          opacity="0.3"
                                          d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z"
                                          fill="black"
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                </div>
                                <div className="d-flex flex-column">
                                  <a
                                    href="#"
                                    className="fs-6 text-gray-800 text-hover-primary fw-bold"
                                  >
                                    "FitPro App Development
                                  </a>
                                  <span className="fs-7 text-muted fw-bold">
                                    #84250
                                  </span>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-5">
                                <div className="symbol symbol-40px me-4">
                                  <span className="symbol-label bg-light">
                                    <span className="svg-icon svg-icon-2 svg-icon-primary">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                      >
                                        <path
                                          d="M20 19.725V18.725C20 18.125 19.6 17.725 19 17.725H5C4.4 17.725 4 18.125 4 18.725V19.725H3C2.4 19.725 2 20.125 2 20.725V21.725H22V20.725C22 20.125 21.6 19.725 21 19.725H20Z"
                                          fill="black"
                                        />
                                        <path
                                          opacity="0.3"
                                          d="M22 6.725V7.725C22 8.325 21.6 8.725 21 8.725H18C18.6 8.725 19 9.125 19 9.725C19 10.325 18.6 10.725 18 10.725V15.725C18.6 15.725 19 16.125 19 16.725V17.725H15V16.725C15 16.125 15.4 15.725 16 15.725V10.725C15.4 10.725 15 10.325 15 9.725C15 9.125 15.4 8.725 16 8.725H13C13.6 8.725 14 9.125 14 9.725C14 10.325 13.6 10.725 13 10.725V15.725C13.6 15.725 14 16.125 14 16.725V17.725H10V16.725C10 16.125 10.4 15.725 11 15.725V10.725C10.4 10.725 10 10.325 10 9.725C10 9.125 10.4 8.725 11 8.725H8C8.6 8.725 9 9.125 9 9.725C9 10.325 8.6 10.725 8 10.725V15.725C8.6 15.725 9 16.125 9 16.725V17.725H5V16.725C5 16.125 5.4 15.725 6 15.725V10.725C5.4 10.725 5 10.325 5 9.725C5 9.125 5.4 8.725 6 8.725H3C2.4 8.725 2 8.325 2 7.725V6.725L11 2.225C11.6 1.925 12.4 1.925 13.1 2.225L22 6.725ZM12 3.725C11.2 3.725 10.5 4.425 10.5 5.225C10.5 6.025 11.2 6.725 12 6.725C12.8 6.725 13.5 6.025 13.5 5.225C13.5 4.425 12.8 3.725 12 3.725Z"
                                          fill="black"
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                </div>
                                <div className="d-flex flex-column">
                                  <a
                                    href="#"
                                    className="fs-6 text-gray-800 text-hover-primary fw-bold"
                                  >
                                    Shopix Mobile App
                                  </a>
                                  <span className="fs-7 text-muted fw-bold">
                                    #45690
                                  </span>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-5">
                                <div className="symbol symbol-40px me-4">
                                  <span className="symbol-label bg-light">
                                    <span className="svg-icon svg-icon-2 svg-icon-primary">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                      >
                                        <path
                                          opacity="0.3"
                                          d="M20 8L12.5 5L5 14V19H20V8Z"
                                          fill="black"
                                        />
                                        <path
                                          d="M21 18H6V3C6 2.4 5.6 2 5 2C4.4 2 4 2.4 4 3V18H3C2.4 18 2 18.4 2 19C2 19.6 2.4 20 3 20H4V21C4 21.6 4.4 22 5 22C5.6 22 6 21.6 6 21V20H21C21.6 20 22 19.6 22 19C22 18.4 21.6 18 21 18Z"
                                          fill="black"
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                </div>
                                <div className="d-flex flex-column">
                                  <a
                                    href="#"
                                    className="fs-6 text-gray-800 text-hover-primary fw-bold"
                                  >
                                    "Landing UI Design" Launch
                                  </a>
                                  <span className="fs-7 text-muted fw-bold">
                                    #24005
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            data-kt-search-element="empty"
                            className="text-center d-none"
                          >
                            <div className="pt-10 pb-10">
                              <span className="svg-icon svg-icon-4x opacity-50">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <path
                                    opacity="0.3"
                                    d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z"
                                    fill="black"
                                  />
                                  <path
                                    d="M20 8L14 2V6C14 7.10457 14.8954 8 16 8H20Z"
                                    fill="black"
                                  />
                                  <rect
                                    x="13.6993"
                                    y="13.6656"
                                    width="4.42828"
                                    height="1.73089"
                                    rx="0.865447"
                                    transform="rotate(45 13.6993 13.6656)"
                                    fill="black"
                                  />
                                  <path
                                    d="M15 12C15 14.2 13.2 16 11 16C8.8 16 7 14.2 7 12C7 9.8 8.8 8 11 8C13.2 8 15 9.8 15 12ZM11 9.6C9.68 9.6 8.6 10.68 8.6 12C8.6 13.32 9.68 14.4 11 14.4C12.32 14.4 13.4 13.32 13.4 12C13.4 10.68 12.32 9.6 11 9.6Z"
                                    fill="black"
                                  />
                                </svg>
                              </span>
                            </div>
                            <div className="pb-15 fw-bold">
                              <h3 className="text-gray-600 fs-5 mb-2">
                                No result found
                              </h3>
                              <div className="text-muted fs-7">
                                Please try again with a different query
                              </div>
                            </div>
                          </div>
                        </div>
                        <form
                          data-kt-search-element="advanced-options-form"
                          className="pt-1 d-none"
                        >
                          <h3 className="fw-bold text-dark mb-7">
                            Advanced Search
                          </h3>
                          <div className="mb-5">
                            <input
                              type="text"
                              className="form-control form-control-sm form-control-solid"
                              placeholder="Contains the word"
                              name="query"
                            />
                          </div>
                          <div className="mb-5">
                            <div className="nav-group nav-group-fluid">
                              <label>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="type"
                                  defaultValue="has"
                                  defaultChecked="checked"
                                />
                                <span className="btn btn-sm btn-color-muted btn-active btn-active-primary">
                                  All
                                </span>
                              </label>
                              <label>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="type"
                                  defaultValue="users"
                                />
                                <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                                  Users
                                </span>
                              </label>
                              <label>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="type"
                                  defaultValue="orders"
                                />
                                <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                                  Orders
                                </span>
                              </label>
                              <label>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="type"
                                  defaultValue="projects"
                                />
                                <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                                  Projects
                                </span>
                              </label>
                            </div>
                          </div>
                          <div className="mb-5">
                            <input
                              type="text"
                              name="assignedto"
                              className="form-control form-control-sm form-control-solid"
                              placeholder="Assigned to"
                              defaultValue=""
                            />
                          </div>
                          <div className="mb-5">
                            <input
                              type="text"
                              name="collaborators"
                              className="form-control form-control-sm form-control-solid"
                              placeholder="Collaborators"
                              defaultValue=""
                            />
                          </div>
                          <div className="mb-5">
                            <div className="nav-group nav-group-fluid">
                              <label>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="attachment"
                                  defaultValue="has"
                                  defaultChecked="checked"
                                />
                                <span className="btn btn-sm btn-color-muted btn-active btn-active-primary">
                                  Has attachment
                                </span>
                              </label>
                              <label>
                                <input
                                  type="radio"
                                  className="btn-check"
                                  name="attachment"
                                  defaultValue="any"
                                />
                                <span className="btn btn-sm btn-color-muted btn-active btn-active-primary px-4">
                                  Any
                                </span>
                              </label>
                            </div>
                          </div>
                          <div className="mb-5">
                            <select
                              name="timezone"
                              aria-label="Select a Timezone"
                              data-control="select2"
                              data-placeholder="date_period"
                              className="form-select form-select-sm form-select-solid"
                            >
                              <option value="next">Within the next</option>
                              <option value="last">Within the last</option>
                              <option value="between">Between</option>
                              <option value="on">On</option>
                            </select>
                          </div>
                          <div className="row mb-8">
                            <div className="col-6">
                              <input
                                type="number"
                                name="date_number"
                                className="form-control form-control-sm form-control-solid"
                                placeholder="Lenght"
                                defaultValue=""
                              />
                            </div>
                            <div className="col-6">
                              <select
                                name="date_typer"
                                aria-label="Select a Timezone"
                                data-control="select2"
                                data-placeholder="Period"
                                className="form-select form-select-sm form-select-solid"
                              >
                                <option value="days">Days</option>
                                <option value="weeks">Weeks</option>
                                <option value="months">Months</option>
                                <option value="years">Years</option>
                              </select>
                            </div>
                          </div>
                          <div className="d-flex justify-content-end">
                            <button
                              type="reset"
                              className="btn btn-sm btn-light fw-bolder btn-active-light-primary me-2"
                              data-kt-search-element="advanced-options-form-cancel"
                            >
                              Cancel
                            </button>
                            <a
                              href="../../demo11/dist/pages/search/horizontal.html"
                              className="btn btn-sm fw-bolder btn-primary"
                              data-kt-search-element="advanced-options-form-search"
                            >
                              Search
                            </a>
                          </div>
                        </form>
                        <form
                          data-kt-search-element="preferences"
                          className="pt-1 d-none"
                        >
                          <h3 className="fw-bold text-dark mb-7">
                            Search Preferences
                          </h3>
                          <div className="pb-4 border-bottom">
                            <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                              <span className="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2">
                                Projects
                              </span>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue={1}
                                defaultChecked="checked"
                              />
                            </label>
                          </div>
                          <div className="py-4 border-bottom">
                            <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                              <span className="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2">
                                Targets
                              </span>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue={1}
                                defaultChecked="checked"
                              />
                            </label>
                          </div>
                          <div className="py-4 border-bottom">
                            <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                              <span className="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2">
                                Affiliate Programs
                              </span>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue={1}
                              />
                            </label>
                          </div>
                          <div className="py-4 border-bottom">
                            <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                              <span className="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2">
                                Referrals
                              </span>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue={1}
                                defaultChecked="checked"
                              />
                            </label>
                          </div>
                          <div className="py-4 border-bottom">
                            <label className="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack">
                              <span className="form-check-label text-gray-700 fs-6 fw-bold ms-0 me-2">
                                Users
                              </span>
                              <input
                                className="form-check-input"
                                type="checkbox"
                                defaultValue={1}
                              />
                            </label>
                          </div>
                          <div className="d-flex justify-content-end pt-7">
                            <button
                              type="reset"
                              className="btn btn-sm btn-light fw-bolder btn-active-light-primary me-2"
                              data-kt-search-element="preferences-dismiss"
                            >
                              Cancel
                            </button>
                            <button
                              type="submit"
                              className="btn btn-sm fw-bolder btn-primary"
                            >
                              Save Changes
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="d-flex align-items-center ms-3 ms-lg-4">
                      <div
                        className="btn btn-icon btn-color-gray-700 btn-active-color-primary btn-outline btn-outline-secondary btn-active-bg-light w-30px h-30px w-lg-40px h-lg-40px"
                        id="kt_activities_toggle"
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
                    </div>
                    <div
                      className="d-flex align-items-center ms-3 ms-lg-4"
                      id="kt_header_user_menu_toggle"
                    >
                      <div
                        className="btn btn-icon btn-color-gray-700 btn-active-color-primary btn-outline btn-outline-secondary w-30px h-30px w-lg-40px h-lg-40px"
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
                      </div>
                      <div
                        className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px"
                        data-kt-menu="true"
                      >
                        <div className="menu-item px-3">
                          <div className="menu-content d-flex align-items-center px-3">
                            <div className="symbol symbol-50px me-5">
                              <img
                                alt="Logo"
                                src="assets/media/avatars/150-26.jpg"
                              />
                            </div>
                            <div className="d-flex flex-column">
                              <div className="fw-bolder d-flex align-items-center fs-5">
                                Max Smith
                                <span className="badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2">
                                  Pro
                                </span>
                              </div>
                              <a
                                href="#"
                                className="fw-bold text-muted text-hover-primary fs-7"
                              >
                                max@kt.com
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="separator my-2" />
                        <div className="menu-item px-5">
                          <a
                            href="../../demo11/dist/account/overview.html"
                            className="menu-link px-5"
                          >
                            My Profile
                          </a>
                        </div>
                        <div className="menu-item px-5">
                          <a
                            href="../../demo11/dist/pages/projects/list.html"
                            className="menu-link px-5"
                          >
                            <span className="menu-text">My Projects</span>
                            <span className="menu-badge">
                              <span className="badge badge-light-danger badge-circle fw-bolder fs-7">
                                3
                              </span>
                            </span>
                          </a>
                        </div>
                        <div
                          className="menu-item px-5"
                          data-kt-menu-trigger="hover"
                          data-kt-menu-placement="left-start"
                        >
                          <a href="#" className="menu-link px-5">
                            <span className="menu-title">My Subscription</span>
                            <span className="menu-arrow" />
                          </a>
                          <div className="menu-sub menu-sub-dropdown w-175px py-4">
                            <div className="menu-item px-3">
                              <a
                                href="../../demo11/dist/account/referrals.html"
                                className="menu-link px-5"
                              >
                                Referrals
                              </a>
                            </div>
                            <div className="menu-item px-3">
                              <a
                                href="../../demo11/dist/account/billing.html"
                                className="menu-link px-5"
                              >
                                Billing
                              </a>
                            </div>
                            <div className="menu-item px-3">
                              <a
                                href="../../demo11/dist/account/statements.html"
                                className="menu-link px-5"
                              >
                                Payments
                              </a>
                            </div>
                            <div className="menu-item px-3">
                              <a
                                href="../../demo11/dist/account/statements.html"
                                className="menu-link d-flex flex-stack px-5"
                              >
                                Statements
                                <i
                                  className="fas fa-exclamation-circle ms-2 fs-7"
                                  data-bs-toggle="tooltip"
                                  title="View your statements"
                                />
                              </a>
                            </div>
                            <div className="separator my-2" />
                            <div className="menu-item px-3">
                              <div className="menu-content px-3">
                                <label className="form-check form-switch form-check-custom form-check-solid">
                                  <input
                                    className="form-check-input w-30px h-20px"
                                    type="checkbox"
                                    defaultValue={1}
                                    defaultChecked="checked"
                                    name="notifications"
                                  />
                                  <span className="form-check-label text-muted fs-7">
                                    Notifications
                                  </span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="menu-item px-5">
                          <a
                            href="../../demo11/dist/account/statements.html"
                            className="menu-link px-5"
                          >
                            My Statements
                          </a>
                        </div>
                        <div className="separator my-2" />
                        <div
                          className="menu-item px-5"
                          data-kt-menu-trigger="hover"
                          data-kt-menu-placement="left-start"
                        >
                          <a href="#" className="menu-link px-5">
                            <span className="menu-title position-relative">
                              Language
                              <span className="fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0">
                                English
                                <img
                                  className="w-15px h-15px rounded-1 ms-2"
                                  src="assets/media/flags/united-states.svg"
                                  alt=""
                                />
                              </span>
                            </span>
                          </a>
                          <div className="menu-sub menu-sub-dropdown w-175px py-4">
                            <div className="menu-item px-3">
                              <a
                                href="../../demo11/dist/account/settings.html"
                                className="menu-link d-flex px-5 active"
                              >
                                <span className="symbol symbol-20px me-4">
                                  <img
                                    className="rounded-1"
                                    src="assets/media/flags/united-states.svg"
                                    alt=""
                                  />
                                </span>
                                English
                              </a>
                            </div>
                            <div className="menu-item px-3">
                              <a
                                href="../../demo11/dist/account/settings.html"
                                className="menu-link d-flex px-5"
                              >
                                <span className="symbol symbol-20px me-4">
                                  <img
                                    className="rounded-1"
                                    src="assets/media/flags/spain.svg"
                                    alt=""
                                  />
                                </span>
                                Spanish
                              </a>
                            </div>
                            <div className="menu-item px-3">
                              <a
                                href="../../demo11/dist/account/settings.html"
                                className="menu-link d-flex px-5"
                              >
                                <span className="symbol symbol-20px me-4">
                                  <img
                                    className="rounded-1"
                                    src="assets/media/flags/germany.svg"
                                    alt=""
                                  />
                                </span>
                                German
                              </a>
                            </div>
                            <div className="menu-item px-3">
                              <a
                                href="../../demo11/dist/account/settings.html"
                                className="menu-link d-flex px-5"
                              >
                                <span className="symbol symbol-20px me-4">
                                  <img
                                    className="rounded-1"
                                    src="assets/media/flags/japan.svg"
                                    alt=""
                                  />
                                </span>
                                Japanese
                              </a>
                            </div>
                            <div className="menu-item px-3">
                              <a
                                href="../../demo11/dist/account/settings.html"
                                className="menu-link d-flex px-5"
                              >
                                <span className="symbol symbol-20px me-4">
                                  <img
                                    className="rounded-1"
                                    src="assets/media/flags/france.svg"
                                    alt=""
                                  />
                                </span>
                                French
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="menu-item px-5 my-1">
                          <a
                            href="../../demo11/dist/account/settings.html"
                            className="menu-link px-5"
                          >
                            Account Settings
                          </a>
                        </div>
                        <div className="menu-item px-5">
                          <a
                            href="../../demo11/dist/authentication/flows/basic/sign-in.html"
                            className="menu-link px-5"
                          >
                            Sign Out
                          </a>
                        </div>
                        <div className="separator my-2" />
                        <div className="menu-item px-5">
                          <div className="menu-content px-5">
                            <label
                              className="form-check form-switch form-check-custom form-check-solid pulse pulse-success"
                              htmlFor="kt_user_menu_dark_mode_toggle"
                            >
                              <input
                                className="form-check-input w-30px h-20px"
                                type="checkbox"
                                defaultValue={1}
                                name="mode"
                                id="kt_user_menu_dark_mode_toggle"
                                data-kt-url="../../demo11/dist/index.html"
                              />
                              <span className="pulse-ring ms-n1" />
                              <span className="form-check-label text-gray-600 fs-7">
                                Dark Mode
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="separator" />
              <div
                className="header-menu-container container-xxl d-flex flex-stack h-lg-75px"
                id="kt_header_nav"
              >
                <div
                  className="header-menu flex-column flex-lg-row"
                  data-kt-drawer="true"
                  data-kt-drawer-name="header-menu"
                  data-kt-drawer-activate="{default: true, lg: false}"
                  data-kt-drawer-overlay="true"
                  data-kt-drawer-width="{default:'200px', '300px': '250px'}"
                  data-kt-drawer-direction="start"
                  data-kt-drawer-toggle="#kt_header_menu_toggle"
                  data-kt-swapper="true"
                  data-kt-swapper-mode="prepend"
                  data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav'}"
                >
                  <div
                    className="menu menu-lg-rounded menu-column menu-lg-row menu-state-bg menu-title-gray-700 menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-400 fw-bold my-5 my-lg-0 align-items-stretch flex-grow-1"
                    id="#kt_header_menu"
                    data-kt-menu="true"
                  >
                    <div
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-start"
                      className="menu-item here show menu-lg-down-accordion me-lg-1"
                    >
                      <a
                        className="menu-link active py-3"
                        href="../../demo11/dist/index.html"
                      >
                        <span className="menu-title georgian">
                          <i className="bi bi-plug-fill" /> ელექტროობა
                        </span>
                      </a>
                    </div>
                    <div
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-start"
                      className="menu-item menu-lg-down-accordion me-lg-1"
                    >
                      <span className="menu-link py-3">
                        <span className="menu-title georgian">
                          <i className="bi bi-droplet-half" /> &nbsp;სანტექნიკა
                        </span>
                      </span>
                    </div>
                    <div
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-start"
                      className="menu-item menu-lg-down-accordion me-lg-1"
                    >
                      <span className="menu-link py-3">
                        <span className="menu-title georgian">
                          <i className="bi bi-hammer" />
                          &nbsp;დემონტაჟი
                        </span>
                      </span>
                    </div>
                    <div
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-start"
                      className="menu-item menu-lg-down-accordion me-lg-1"
                    >
                      <span className="menu-link py-3">
                        <span className="menu-title georgian">
                          <i className="bi bi-palette2" />
                          &nbsp;სამღებრო
                        </span>
                      </span>
                    </div>
                    <div
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-start"
                      className="menu-item menu-lg-down-accordion me-lg-1"
                    >
                      <span className="menu-link py-3">
                        <span className="menu-title georgian">
                          <i className="bi bi-thermometer-sun" />
                          &nbsp;გათბობა
                        </span>
                      </span>
                    </div>
                    <div
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-start"
                      className="menu-item menu-lg-down-accordion me-lg-1"
                    >
                      <span className="menu-link py-3">
                        <span className="menu-title georgian">
                          <i className="bi bi-layers-fill" />
                          &nbsp;კაფელ-მეტლახი
                        </span>
                      </span>
                    </div>
                    <div
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-start"
                      className="menu-item menu-lg-down-accordion me-lg-1"
                    >
                      <span className="menu-link py-3">
                        <span className="menu-title georgian">
                          <i className="bi bi-star-fill" />
                          &nbsp;<b>ჯამური განფასება</b>
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="toolbar py-5 py-lg-5" id="kt_toolbar">
              <div
                id="kt_toolbar_container"
                className="container-xxl d-flex flex-stack flex-wrap"
              >
                <div className="page-title d-flex flex-column me-3">
                  <h1 className="d-flex text-dark fw-bolder my-1 fs-3 georgian">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-geo-alt-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>
                    &nbsp;წერეთლის ქუჩა N114{" "}
                  </h1>
                  <ul className="breadcrumb breadcrumb-dot fw-bold text-gray-600 fs-7 my-1">
                    <li className="breadcrumb-item text-gray-600 georgian">
                      ბინა
                    </li>
                    <li className="breadcrumb-item text-gray-600 georgian">
                      შავი კარკასი
                    </li>
                    <li className="breadcrumb-item text-gray-600 georgian">
                      200 კვ.მ
                    </li>
                    <li className="breadcrumb-item text-warning georgian">
                      29.03.2023 - 29.05.2023
                    </li>
                  </ul>
                </div>
                <div className="d-flex align-items-center py-2 py-md-1">
                  <div className="me-3">
                    <a
                      href="#"
                      className="btn btn-light-primary fw-bolder georgian"
                      data-kt-menu-trigger="click"
                      data-kt-menu-placement="bottom-end"
                    >
                      <i className="bi bi-image-fill" />
                      სურათები
                    </a>
                    <div
                      className="menu menu-sub menu-sub-dropdown w-250px w-md-300px"
                      data-kt-menu="true"
                      id="kt_menu_61484d4eae1ca"
                    ></div>
                  </div>
                  <div className="d-flex align-items-center py-2 py-md-1">
                    <a
                      href="#"
                      className="btn btn-primary fw-bolder georgian"
                      data-bs-toggle="modal"
                      data-bs-target="#kt_modal_create_app"
                      id="kt_toolbar_primary_button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={16}
                        fill="currentColor"
                        className="bi bi-rulers"
                        viewBox="0 0 16 16"
                      >
                        <path d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v-1H2v-1h4v-1H4v-1h2v-1H2v-1h4V9H4V8h2V7H2V6h4V2h1v4h1V4h1v2h1V2h1v4h1V4h1v2h1V2h1v4h1V1a1 1 0 0 0-1-1H1z" />
                      </svg>
                      ნახაზები
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="kt_content_container"
              className="d-flex flex-column-fluid align-items-start container-xxl"
            >
              <div className="content flex-row-fluid" id="kt_content">
                <div className="row gy-0 gx-10">
                  <div className="col-xl-12">
                    <div className="mb-10">
                      <div className="content flex-row-fluid" id="kt_content">
                        <div className="card">
                          <div className="card-header border-0 pt-6">
                            <div className="card-title">
                              <div className="d-flex align-items-center position-relative my-1">
                                <span className="svg-icon svg-icon-1 position-absolute ms-6">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <rect
                                      opacity="0.5"
                                      x="17.0365"
                                      y="15.1223"
                                      width="8.15546"
                                      height={2}
                                      rx={1}
                                      transform="rotate(45 17.0365 15.1223)"
                                      fill="black"
                                    />
                                    <path
                                      d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                                      fill="black"
                                    />
                                  </svg>
                                </span>
                                <input
                                  type="text"
                                  data-kt-user-table-filter="search"
                                  className="form-control form-control-solid w-250px ps-14 georgian"
                                  placeholder="ძებნა"
                                />
                              </div>
                            </div>
                            <div className="card-toolbar">
                              <div
                                className="d-flex justify-content-end"
                                data-kt-user-table-toolbar="base"
                              >
                                <button
                                  type="button"
                                  className="btn btn-light-primary me-3"
                                  data-kt-menu-trigger="click"
                                  data-kt-menu-placement="bottom-end"
                                >
                                  <span className="svg-icon svg-icon-2 ">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <path
                                        d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z"
                                        fill="black"
                                      />
                                    </svg>
                                  </span>
                                  <b className="georgian">ფილტრი</b>
                                </button>
                                <div
                                  className="menu menu-sub menu-sub-dropdown w-300px w-md-325px"
                                  data-kt-menu="true"
                                >
                                  <div className="px-7 py-5">
                                    <div className="fs-5 text-dark fw-bolder">
                                      Filter Options
                                    </div>
                                  </div>
                                  <div className="separator border-gray-200" />
                                  <div
                                    className="px-7 py-5"
                                    data-kt-user-table-filter="form"
                                  >
                                    <div className="mb-10">
                                      <label className="form-label fs-6 fw-bold">
                                        Role:
                                      </label>
                                      <select
                                        className="form-select form-select-solid fw-bolder"
                                        data-kt-select2="true"
                                        data-placeholder="Select option"
                                        data-allow-clear="true"
                                        data-kt-user-table-filter="role"
                                        data-hide-search="true"
                                      >
                                        <option />
                                        <option value="Administrator">
                                          Administrator
                                        </option>
                                        <option value="Analyst">Analyst</option>
                                        <option value="Developer">
                                          Developer
                                        </option>
                                        <option value="Support">Support</option>
                                        <option value="Trial">Trial</option>
                                      </select>
                                    </div>
                                    <div className="mb-10">
                                      <label className="form-label fs-6 fw-bold">
                                        Two Step Verification:
                                      </label>
                                      <select
                                        className="form-select form-select-solid fw-bolder"
                                        data-kt-select2="true"
                                        data-placeholder="Select option"
                                        data-allow-clear="true"
                                        data-kt-user-table-filter="two-step"
                                        data-hide-search="true"
                                      >
                                        <option />
                                        <option value="Enabled">Enabled</option>
                                      </select>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                      <button
                                        type="reset"
                                        className="btn btn-light btn-active-light-primary fw-bold me-2 px-6"
                                        data-kt-menu-dismiss="true"
                                        data-kt-user-table-filter="reset"
                                      >
                                        Reset
                                      </button>
                                      <button
                                        type="submit"
                                        className="btn btn-primary fw-bold px-6"
                                        data-kt-menu-dismiss="true"
                                        data-kt-user-table-filter="filter"
                                      >
                                        Apply
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <button
                                  type="button"
                                  className="btn btn-light-primary me-3 georgian"
                                  data-bs-toggle="modal"
                                  data-bs-target="#kt_modal_export_users"
                                >
                                  <span className="svg-icon svg-icon-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      fill="none"
                                    >
                                      <rect
                                        opacity="0.3"
                                        x="12.75"
                                        y="4.25"
                                        width={12}
                                        height={2}
                                        rx={1}
                                        transform="rotate(90 12.75 4.25)"
                                        fill="black"
                                      />
                                      <path
                                        d="M12.0573 6.11875L13.5203 7.87435C13.9121 8.34457 14.6232 8.37683 15.056 7.94401C15.4457 7.5543 15.4641 6.92836 15.0979 6.51643L12.4974 3.59084C12.0996 3.14332 11.4004 3.14332 11.0026 3.59084L8.40206 6.51643C8.0359 6.92836 8.0543 7.5543 8.44401 7.94401C8.87683 8.37683 9.58785 8.34458 9.9797 7.87435L11.4427 6.11875C11.6026 5.92684 11.8974 5.92684 12.0573 6.11875Z"
                                        fill="black"
                                      />
                                      <path
                                        d="M18.75 8.25H17.75C17.1977 8.25 16.75 8.69772 16.75 9.25C16.75 9.80228 17.1977 10.25 17.75 10.25C18.3023 10.25 18.75 10.6977 18.75 11.25V18.25C18.75 18.8023 18.3023 19.25 17.75 19.25H5.75C5.19772 19.25 4.75 18.8023 4.75 18.25V11.25C4.75 10.6977 5.19771 10.25 5.75 10.25C6.30229 10.25 6.75 9.80228 6.75 9.25C6.75 8.69772 6.30229 8.25 5.75 8.25H4.75C3.64543 8.25 2.75 9.14543 2.75 10.25V19.25C2.75 20.3546 3.64543 21.25 4.75 21.25H18.75C19.8546 21.25 20.75 20.3546 20.75 19.25V10.25C20.75 9.14543 19.8546 8.25 18.75 8.25Z"
                                        fill="#C4C4C4"
                                      />
                                    </svg>
                                  </span>
                                  <b>ეხპორტი</b>
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary georgian"
                                  data-bs-toggle="modal"
                                  data-bs-target="#kt_modal_add_user"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={16}
                                    height={16}
                                    fill="currentColor"
                                    className="bi bi-send-plus-fill"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 1.59 2.498C8 14 8 13 8 12.5a4.5 4.5 0 0 1 5.026-4.47L15.964.686Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                                    <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z" />
                                  </svg>
                                  <b>დამატება</b>
                                </button>
                              </div>
                              <div
                                className="d-flex justify-content-end align-items-center d-none"
                                data-kt-user-table-toolbar="selected"
                              >
                                <div className="fw-bolder me-5">
                                  <span
                                    className="me-2"
                                    data-kt-user-table-select="selected_count"
                                  />
                                  Selected
                                </div>
                                <button
                                  type="button"
                                  className="btn btn-danger"
                                  data-kt-user-table-select="delete_selected"
                                >
                                  Delete Selected
                                </button>
                              </div>
                              <div
                                className="modal fade"
                                id="kt_modal_export_users"
                                tabIndex={-1}
                                aria-hidden="true"
                              >
                                <div className="modal-dialog modal-dialog-centered mw-650px">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h2 className="fw-bolder georgian">
                                        მონაცემების ამოღება
                                      </h2>
                                      <div
                                        className="btn btn-icon btn-sm btn-active-icon-primary"
                                        data-kt-users-modal-action="close"
                                      >
                                        <span className="svg-icon svg-icon-1">
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
                                      </div>
                                    </div>
                                    <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                                      <form
                                        id="kt_modal_export_users_form"
                                        className="form"
                                        action="#"
                                      >
                                        <div className="fv-row mb-10">
                                          <label className="fs-6 fw-bold form-label mb-2 georgian">
                                            კატეგორია:
                                          </label>
                                          <select
                                            name="role"
                                            data-control="select2"
                                            data-placeholder="მონიშნეთ სამუშაოები"
                                            data-hide-search="true"
                                            className="form-select form-select-solid georgian"
                                          >
                                            <option />
                                            <option value={1}>
                                              ელექტროობა
                                            </option>
                                            <option value={2}>
                                              სანტექნიკა
                                            </option>
                                            <option value={3}>დემონტაჟი</option>
                                            <option value={4}>სამღებრო</option>
                                            <option value={5}>გათბობა</option>
                                            <option value={6}>
                                              კაფელ-მეტლახი
                                            </option>
                                            <option value={6}>ყველა</option>
                                          </select>
                                        </div>
                                        <div className="fv-row mb-10">
                                          <label className="required fs-6 fw-bold form-label mb-2 georgian">
                                            აირჩიეთ ფორმატი:
                                          </label>
                                          <select
                                            name="format"
                                            data-control="select2"
                                            data-placeholder="აირჩიეთ ფორმატი"
                                            data-hide-search="true"
                                            className="form-select form-select-solid georgian"
                                          >
                                            <option />
                                            <option value="excel">Excel</option>
                                            <option value="pdf">PDF</option>
                                            <option value="cvs">CVS</option>
                                            <option value="zip">ZIP</option>
                                          </select>
                                        </div>
                                        <div className="text-center">
                                          <button
                                            type="reset"
                                            className="btn btn-light me-3 georgian"
                                            data-kt-users-modal-action="cancel"
                                          >
                                            გამორთვა
                                          </button>
                                          <button
                                            type="submit"
                                            className="btn btn-primary"
                                            data-kt-users-modal-action="submit"
                                          >
                                            <span className="indicator-label georgian">
                                              გადმოწერა
                                            </span>
                                            <span className="indicator-progress georgian">
                                              გთხოვთ დაიცადოთ...
                                              <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                            </span>
                                          </button>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="modal fade"
                                id="kt_modal_add_user"
                                tabIndex={-1}
                                aria-hidden="true"
                              >
                                <div className="modal-dialog modal-dialog-centered mw-650px">
                                  <div className="modal-content">
                                    <div
                                      className="modal-header"
                                      id="kt_modal_add_user_header"
                                    >
                                      <h2 className="fw-bolder georgian">
                                        პროდუქციის დამატება
                                      </h2>
                                      <div
                                        className="btn btn-icon btn-sm btn-active-icon-primary"
                                        data-kt-users-modal-action="close"
                                      >
                                        <span className="svg-icon svg-icon-1">
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
                                      </div>
                                    </div>
                                    <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
                                      <form
                                        id="kt_modal_add_user_form"
                                        className="form"
                                        action="#"
                                      >
                                        <div
                                          className="d-flex flex-column scroll-y me-n7 pe-7"
                                          id="kt_modal_add_user_scroll"
                                          data-kt-scroll="true"
                                          data-kt-scroll-activate="{default: false, lg: true}"
                                          data-kt-scroll-max-height="auto"
                                          data-kt-scroll-dependencies="#kt_modal_add_user_header"
                                          data-kt-scroll-wrappers="#kt_modal_add_user_scroll"
                                          data-kt-scroll-offset="300px"
                                        >
                                          <div className="notice d-flex bg-light-warning rounded border-warning border border-dashed mb-9 p-6">
                                            <span className="svg-icon svg-icon-2tx svg-icon-warning me-4">
                                              <div
                                                className="image-input image-input-outline"
                                                data-kt-image-input="true"
                                                style={{
                                                  backgroundImage:
                                                    "url(assets/media/avatars/blank.png)",
                                                }}
                                              >
                                                <div
                                                  className="image-input-wrapper w-125px h-125px"
                                                  style={{
                                                    backgroundImage:
                                                      "url(assets/media/avatars/150-1.png)",
                                                  }}
                                                />
                                                <label
                                                  className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                  data-kt-image-input-action="change"
                                                  data-bs-toggle="tooltip"
                                                  title="Change avatar"
                                                >
                                                  <i className="bi bi-pencil-fill fs-7" />
                                                  <input
                                                    type="file"
                                                    name="avatar"
                                                    accept=".png, .jpg, .jpeg"
                                                  />
                                                  <input
                                                    type="hidden"
                                                    name="avatar_remove"
                                                  />
                                                </label>
                                                <span
                                                  className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                  data-kt-image-input-action="cancel"
                                                  data-bs-toggle="tooltip"
                                                  title="Cancel avatar"
                                                >
                                                  <i className="bi bi-x fs-2" />
                                                </span>
                                                <span
                                                  className="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow"
                                                  data-kt-image-input-action="remove"
                                                  data-bs-toggle="tooltip"
                                                  title="Remove avatar"
                                                >
                                                  <i className="bi bi-x fs-2" />
                                                </span>
                                              </div>
                                            </span>
                                            <div className="d-flex flex-stack flex-grow-1">
                                              <div className="fw-bold">
                                                <h4 className="text-gray-900 fw-bolder georgian">
                                                  სურათი
                                                </h4>
                                                <div className="fs-6 text-gray-700 georgian">
                                                  მიუთითეთ მხოლოდ:
                                                  <a href="#">
                                                    png, jpg, jpeg.
                                                  </a>
                                                  ფორმატი!
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="row mb-5">
                                            <div className="col-md-8 fv-row fv-plugins-icon-container">
                                              <label className="required fs-5 fw-bold mb-2 georgian">
                                                დასახელება
                                              </label>
                                              <input
                                                type="text"
                                                className="form-control form-control-solid georgian"
                                                placeholder="პროდუქციის დასახელება"
                                                name="პროდუქციის დასახელება"
                                              />
                                              <div className="fv-plugins-message-container invalid-feedback"></div>
                                            </div>
                                            <div className="col-md-4 fv-row fv-plugins-icon-container">
                                              <label className="required fs-5 fw-bold mb-2 georgian">
                                                მომწოდებელი
                                              </label>
                                              <select
                                                name="saler"
                                                className="form-select form-select-solid georgian"
                                                data-placeholder="მომწოდებელი"
                                              >
                                                <option value={0}>
                                                  გორგია
                                                </option>
                                                <option value={2}>
                                                  დომინო
                                                </option>
                                                <option value={3}>
                                                  ბრიკორამა
                                                </option>
                                                <option value={4}>
                                                  ციტადელი
                                                </option>
                                                <option value={5}>
                                                  მიჰაუსი
                                                </option>
                                                <option value={6}>ნოვა</option>
                                                <option value={7}>სხვა</option>
                                              </select>
                                              <div className="fv-plugins-message-container invalid-feedback"></div>
                                            </div>
                                            <div className="col-md-12 fv-row fv-plugins-icon-container">
                                              <label className="required fs-5 fw-bold mb-2 georgian">
                                                ლინკი
                                              </label>
                                              <input
                                                type="text"
                                                className="form-control form-control-solid georgian"
                                                placeholder="http://momwodebeli.ge"
                                                name="პროდუქციის ელექტონული მისამართი"
                                              />
                                              <div className="fv-plugins-message-container invalid-feedback"></div>
                                            </div>
                                            <div className="col-md-4 fv-row fv-plugins-icon-container">
                                              <label className="required fs-5 fw-bold mb-2 georgian">
                                                რაოდენობა
                                              </label>
                                              <input
                                                type="text"
                                                className="form-control form-control-solid georgian"
                                                placeholder="პრო: რაოდენობა"
                                                name="პროდუქციის რაოდენობა"
                                              />
                                              <div className="fv-plugins-message-container invalid-feedback"></div>
                                            </div>
                                            <div className="col-md-4 fv-row fv-plugins-icon-container">
                                              <label className="required fs-5 fw-bold mb-2 georgian">
                                                ერთეული
                                              </label>
                                              <select
                                                name="saler"
                                                className="form-select form-select-solid georgian"
                                                data-placeholder="მომწოდებელი"
                                              >
                                                <option value={0}>კვ.მ</option>
                                                <option value={2}>გრ.მ</option>
                                                <option value={3}>ცალი</option>
                                                <option value={4}>ლიტრი</option>
                                                <option value={5}>
                                                  ტომარა
                                                </option>
                                              </select>
                                              <div className="fv-plugins-message-container invalid-feedback"></div>
                                            </div>
                                            <div className="col-md-4 fv-row fv-plugins-icon-container">
                                              <label className="required fs-5 fw-bold mb-2 georgian">
                                                ღირეულება
                                              </label>
                                              <input
                                                type="text"
                                                className="form-control form-control-solid georgian"
                                                placeholder="პროდ: ღირებულება"
                                                name=""
                                              />
                                              <div className="fv-plugins-message-container invalid-feedback"></div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="text-center pt-15">
                                          <button
                                            type="reset"
                                            className="btn btn-light me-3"
                                            data-kt-users-modal-action="cancel"
                                          >
                                            Discard
                                          </button>
                                          <button
                                            type="submit"
                                            className="btn btn-primary"
                                            data-kt-users-modal-action="submit"
                                          >
                                            <span className="indicator-label">
                                              Submit
                                            </span>
                                            <span className="indicator-progress">
                                              Please wait...
                                              <span className="spinner-border spinner-border-sm align-middle ms-2" />
                                            </span>
                                          </button>
                                        </div>
                                      </form>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="card-body pt-0">
                            <table
                              className="table align-middle table-row-dashed fs-6 gy-5"
                              id="kt_table_users"
                            >
                              <thead>
                                <tr className="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                                  <th className="w-10px pe-2">
                                    <div className="form-check form-check-sm form-check-custom form-check-solid me-3">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        data-kt-check="true"
                                        data-kt-check-target="#kt_table_users .form-check-input"
                                        defaultValue={1}
                                      />
                                    </div>
                                  </th>
                                  <th className="min-w-125px georgian">
                                    სამუშაო
                                  </th>
                                  <th className="min-w-125px georgian">
                                    ერთეული
                                  </th>
                                  <th className="min-w-125px georgian">
                                    რაოდენობა
                                  </th>
                                  <th className="min-w-125px georgian">
                                    ღირებულება
                                  </th>
                                  <th className="min-w-125px georgian">ჯამი</th>
                                  <th className="text-end min-w-100px georgian">
                                    ცვლილება
                                  </th>
                                </tr>
                              </thead>
                              <tbody className="text-gray-600 fw-bold">
                                <tr>
                                  <td>
                                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue={1}
                                      />
                                    </div>
                                  </td>
                                  <td className="d-flex align-items-center">
                                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                      <a href="https://www.domino.com.ge/products/electrical-goods/cables-and-wires/cable-wire/%E1%83%99%E1%83%90%E1%83%91%E1%83%94%E1%83%9A%E1%83%98-sakcable-%E1%83%9E%E1%83%A3%E1%83%9C%E1%83%9E-3x2.5-h03vvh2-u-h05vvh2-u/">
                                        <div className="symbol-label georgian">
                                          <img
                                            src="assets/media/avatars/150-1.png"
                                            alt="ელექტრო სადენი მრავალწვერიანი 3X2.5"
                                            className="w-100"
                                          />
                                        </div>
                                      </a>
                                    </div>
                                    <div className="d-flex flex-column georgian">
                                      <a
                                        href="https://www.domino.com.ge/products/electrical-goods/cables-and-wires/cable-wire/%E1%83%99%E1%83%90%E1%83%91%E1%83%94%E1%83%9A%E1%83%98-sakcable-%E1%83%9E%E1%83%A3%E1%83%9C%E1%83%9E-3x2.5-h03vvh2-u-h05vvh2-u/"
                                        className="text-gray-800 text-hover-primary mb-1 georgian"
                                      >
                                        ელექტრო სადენი მრავალწვერიანი 3X2.5
                                      </a>
                                      <span>გორგია / ნოვა</span>
                                    </div>
                                  </td>
                                  <td className="georgian">მეტრი</td>
                                  <td className="georgian">
                                    <div>120</div>
                                  </td>
                                  <td className="georgian">3.50 ლარი</td>
                                  <td className="georgian">
                                    <b>420 ლარი</b>
                                  </td>
                                  <td className="text-end">
                                    <a
                                      href="#"
                                      className="btn btn-light btn-active-light-primary btn-sm georgian"
                                      data-kt-menu-trigger="click"
                                      data-kt-menu-placement="bottom-end"
                                    >
                                      შეცვლა
                                      <span className="svg-icon svg-icon-5 m-0">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </a>
                                    <div
                                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                                      data-kt-menu="true"
                                    >
                                      <div className="menu-item px-3">
                                        <a
                                          href="../../demo11/dist/apps/user-management/users/view.html"
                                          className="menu-link px-3 georgian"
                                        >
                                          <i className="bi bi-pencil-fill" />
                                          &nbsp;გადაკეთება
                                        </a>
                                      </div>
                                      <div className="menu-item px-3">
                                        <a
                                          href="#"
                                          className="menu-link px-3 georgian"
                                          data-kt-users-table-filter="delete_row"
                                        >
                                          <i className="bi bi-eraser-fill" />
                                          &nbsp;წაშლა
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue={1}
                                      />
                                    </div>
                                  </td>
                                  <td className="d-flex align-items-center">
                                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                      <a href="../../demo11/dist/apps/user-management/users/view.html">
                                        <div className="symbol-label fs-3 bg-light-danger text-danger">
                                          M
                                        </div>
                                      </a>
                                    </div>
                                    <div className="d-flex flex-column">
                                      <a
                                        href="../../demo11/dist/apps/user-management/users/view.html"
                                        className="text-gray-800 text-hover-primary mb-1"
                                      >
                                        Melody Macy
                                      </a>
                                      <span>melody@altbox.com</span>
                                    </div>
                                  </td>
                                  <td>Analyst</td>
                                  <td>
                                    <div className="badge badge-light fw-bolder">
                                      20 mins ago
                                    </div>
                                  </td>
                                  <td>
                                    <div className="badge badge-light-success fw-bolder">
                                      Enabled
                                    </div>
                                  </td>
                                  <td>25 Jul 2021, 5:20 pm</td>
                                  <td className="text-end">
                                    <a
                                      href="#"
                                      className="btn btn-light btn-active-light-primary btn-sm"
                                      data-kt-menu-trigger="click"
                                      data-kt-menu-placement="bottom-end"
                                    >
                                      Actions
                                      <span className="svg-icon svg-icon-5 m-0">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </a>
                                    <div
                                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                                      data-kt-menu="true"
                                    >
                                      <div className="menu-item px-3">
                                        <a
                                          href="../../demo11/dist/apps/user-management/users/view.html"
                                          className="menu-link px-3"
                                        >
                                          Edit
                                        </a>
                                      </div>
                                      <div className="menu-item px-3">
                                        <a
                                          href="#"
                                          className="menu-link px-3"
                                          data-kt-users-table-filter="delete_row"
                                        >
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue={1}
                                      />
                                    </div>
                                  </td>
                                  <td className="d-flex align-items-center">
                                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                      <a href="../../demo11/dist/apps/user-management/users/view.html">
                                        <div className="symbol-label">
                                          <img
                                            src="assets/media/avatars/150-26.jpg"
                                            alt="Max Smith"
                                            className="w-100"
                                          />
                                        </div>
                                      </a>
                                    </div>
                                    <div className="d-flex flex-column">
                                      <a
                                        href="../../demo11/dist/apps/user-management/users/view.html"
                                        className="text-gray-800 text-hover-primary mb-1"
                                      >
                                        Max Smith
                                      </a>
                                      <span>max@kt.com</span>
                                    </div>
                                  </td>
                                  <td>Developer</td>
                                  <td>
                                    <div className="badge badge-light fw-bolder">
                                      3 days ago
                                    </div>
                                  </td>
                                  <td />
                                  <td>21 Feb 2021, 6:05 pm</td>
                                  <td className="text-end">
                                    <a
                                      href="#"
                                      className="btn btn-light btn-active-light-primary btn-sm"
                                      data-kt-menu-trigger="click"
                                      data-kt-menu-placement="bottom-end"
                                    >
                                      Actions
                                      <span className="svg-icon svg-icon-5 m-0">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </a>
                                    <div
                                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                                      data-kt-menu="true"
                                    >
                                      <div className="menu-item px-3">
                                        <a
                                          href="../../demo11/dist/apps/user-management/users/view.html"
                                          className="menu-link px-3"
                                        >
                                          Edit
                                        </a>
                                      </div>
                                      <div className="menu-item px-3">
                                        <a
                                          href="#"
                                          className="menu-link px-3"
                                          data-kt-users-table-filter="delete_row"
                                        >
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue={1}
                                      />
                                    </div>
                                  </td>
                                  <td className="d-flex align-items-center">
                                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                      <a href="../../demo11/dist/apps/user-management/users/view.html">
                                        <div className="symbol-label">
                                          <img
                                            src="assets/media/avatars/150-4.jpg"
                                            alt="Sean Bean"
                                            className="w-100"
                                          />
                                        </div>
                                      </a>
                                    </div>
                                    <div className="d-flex flex-column">
                                      <a
                                        href="../../demo11/dist/apps/user-management/users/view.html"
                                        className="text-gray-800 text-hover-primary mb-1"
                                      >
                                        Sean Bean
                                      </a>
                                      <span>sean@dellito.com</span>
                                    </div>
                                  </td>
                                  <td>Support</td>
                                  <td>
                                    <div className="badge badge-light fw-bolder">
                                      5 hours ago
                                    </div>
                                  </td>
                                  <td>
                                    <div className="badge badge-light-success fw-bolder">
                                      Enabled
                                    </div>
                                  </td>
                                  <td>20 Dec 2021, 2:40 pm</td>
                                  <td className="text-end">
                                    <a
                                      href="#"
                                      className="btn btn-light btn-active-light-primary btn-sm"
                                      data-kt-menu-trigger="click"
                                      data-kt-menu-placement="bottom-end"
                                    >
                                      Actions
                                      <span className="svg-icon svg-icon-5 m-0">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </a>
                                    <div
                                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                                      data-kt-menu="true"
                                    >
                                      <div className="menu-item px-3">
                                        <a
                                          href="../../demo11/dist/apps/user-management/users/view.html"
                                          className="menu-link px-3"
                                        >
                                          Edit
                                        </a>
                                      </div>
                                      <div className="menu-item px-3">
                                        <a
                                          href="#"
                                          className="menu-link px-3"
                                          data-kt-users-table-filter="delete_row"
                                        >
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue={1}
                                      />
                                    </div>
                                  </td>
                                  <td className="d-flex align-items-center">
                                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                      <a href="../../demo11/dist/apps/user-management/users/view.html">
                                        <div className="symbol-label">
                                          <img
                                            src="assets/media/avatars/150-15.jpg"
                                            alt="Brian Cox"
                                            className="w-100"
                                          />
                                        </div>
                                      </a>
                                    </div>
                                    <div className="d-flex flex-column">
                                      <a
                                        href="../../demo11/dist/apps/user-management/users/view.html"
                                        className="text-gray-800 text-hover-primary mb-1"
                                      >
                                        Brian Cox
                                      </a>
                                      <span>brian@exchange.com</span>
                                    </div>
                                  </td>
                                  <td>Developer</td>
                                  <td>
                                    <div className="badge badge-light fw-bolder">
                                      2 days ago
                                    </div>
                                  </td>
                                  <td>
                                    <div className="badge badge-light-success fw-bolder">
                                      Enabled
                                    </div>
                                  </td>
                                  <td>24 Jun 2021, 10:30 am</td>
                                  <td className="text-end">
                                    <a
                                      href="#"
                                      className="btn btn-light btn-active-light-primary btn-sm"
                                      data-kt-menu-trigger="click"
                                      data-kt-menu-placement="bottom-end"
                                    >
                                      Actions
                                      <span className="svg-icon svg-icon-5 m-0">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </a>
                                    <div
                                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                                      data-kt-menu="true"
                                    >
                                      <div className="menu-item px-3">
                                        <a
                                          href="../../demo11/dist/apps/user-management/users/view.html"
                                          className="menu-link px-3"
                                        >
                                          Edit
                                        </a>
                                      </div>
                                      <div className="menu-item px-3">
                                        <a
                                          href="#"
                                          className="menu-link px-3"
                                          data-kt-users-table-filter="delete_row"
                                        >
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue={1}
                                      />
                                    </div>
                                  </td>
                                  <td className="d-flex align-items-center">
                                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                      <a href="../../demo11/dist/apps/user-management/users/view.html">
                                        <div className="symbol-label fs-3 bg-light-warning text-warning">
                                          M
                                        </div>
                                      </a>
                                    </div>
                                    <div className="d-flex flex-column">
                                      <a
                                        href="../../demo11/dist/apps/user-management/users/view.html"
                                        className="text-gray-800 text-hover-primary mb-1"
                                      >
                                        Mikaela Collins
                                      </a>
                                      <span>mikaela@pexcom.com</span>
                                    </div>
                                  </td>
                                  <td>Administrator</td>
                                  <td>
                                    <div className="badge badge-light fw-bolder">
                                      5 days ago
                                    </div>
                                  </td>
                                  <td />
                                  <td>22 Sep 2021, 2:40 pm</td>
                                  <td className="text-end">
                                    <a
                                      href="#"
                                      className="btn btn-light btn-active-light-primary btn-sm"
                                      data-kt-menu-trigger="click"
                                      data-kt-menu-placement="bottom-end"
                                    >
                                      Actions
                                      <span className="svg-icon svg-icon-5 m-0">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </a>
                                    <div
                                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                                      data-kt-menu="true"
                                    >
                                      <div className="menu-item px-3">
                                        <a
                                          href="../../demo11/dist/apps/user-management/users/view.html"
                                          className="menu-link px-3"
                                        >
                                          Edit
                                        </a>
                                      </div>
                                      <div className="menu-item px-3">
                                        <a
                                          href="#"
                                          className="menu-link px-3"
                                          data-kt-users-table-filter="delete_row"
                                        >
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue={1}
                                      />
                                    </div>
                                  </td>
                                  <td className="d-flex align-items-center">
                                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                      <a href="../../demo11/dist/apps/user-management/users/view.html">
                                        <div className="symbol-label">
                                          <img
                                            src="assets/media/avatars/150-8.jpg"
                                            alt="Francis Mitcham"
                                            className="w-100"
                                          />
                                        </div>
                                      </a>
                                    </div>
                                    <div className="d-flex flex-column">
                                      <a
                                        href="../../demo11/dist/apps/user-management/users/view.html"
                                        className="text-gray-800 text-hover-primary mb-1"
                                      >
                                        Francis Mitcham
                                      </a>
                                      <span>f.mitcham@kpmg.com.au</span>
                                    </div>
                                  </td>
                                  <td>Trial</td>
                                  <td>
                                    <div className="badge badge-light fw-bolder">
                                      3 weeks ago
                                    </div>
                                  </td>
                                  <td />
                                  <td>15 Apr 2021, 6:43 am</td>
                                  <td className="text-end">
                                    <a
                                      href="#"
                                      className="btn btn-light btn-active-light-primary btn-sm"
                                      data-kt-menu-trigger="click"
                                      data-kt-menu-placement="bottom-end"
                                    >
                                      Actions
                                      <span className="svg-icon svg-icon-5 m-0">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </a>
                                    <div
                                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                                      data-kt-menu="true"
                                    >
                                      <div className="menu-item px-3">
                                        <a
                                          href="../../demo11/dist/apps/user-management/users/view.html"
                                          className="menu-link px-3"
                                        >
                                          Edit
                                        </a>
                                      </div>
                                      <div className="menu-item px-3">
                                        <a
                                          href="#"
                                          className="menu-link px-3"
                                          data-kt-users-table-filter="delete_row"
                                        >
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue={1}
                                      />
                                    </div>
                                  </td>
                                  <td className="d-flex align-items-center">
                                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                      <a href="../../demo11/dist/apps/user-management/users/view.html">
                                        <div className="symbol-label fs-3 bg-light-danger text-danger">
                                          O
                                        </div>
                                      </a>
                                    </div>
                                    <div className="d-flex flex-column">
                                      <a
                                        href="../../demo11/dist/apps/user-management/users/view.html"
                                        className="text-gray-800 text-hover-primary mb-1"
                                      >
                                        Olivia Wild
                                      </a>
                                      <span>olivia@corpmail.com</span>
                                    </div>
                                  </td>
                                  <td>Administrator</td>
                                  <td>
                                    <div className="badge badge-light fw-bolder">
                                      Yesterday
                                    </div>
                                  </td>
                                  <td />
                                  <td>10 Mar 2021, 11:30 am</td>
                                  <td className="text-end">
                                    <a
                                      href="#"
                                      className="btn btn-light btn-active-light-primary btn-sm"
                                      data-kt-menu-trigger="click"
                                      data-kt-menu-placement="bottom-end"
                                    >
                                      Actions
                                      <span className="svg-icon svg-icon-5 m-0">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </a>
                                    <div
                                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                                      data-kt-menu="true"
                                    >
                                      <div className="menu-item px-3">
                                        <a
                                          href="../../demo11/dist/apps/user-management/users/view.html"
                                          className="menu-link px-3"
                                        >
                                          Edit
                                        </a>
                                      </div>
                                      <div className="menu-item px-3">
                                        <a
                                          href="#"
                                          className="menu-link px-3"
                                          data-kt-users-table-filter="delete_row"
                                        >
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue={1}
                                      />
                                    </div>
                                  </td>
                                  <td className="d-flex align-items-center">
                                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                      <a href="../../demo11/dist/apps/user-management/users/view.html">
                                        <div className="symbol-label fs-3 bg-light-primary text-primary">
                                          N
                                        </div>
                                      </a>
                                    </div>
                                    <div className="d-flex flex-column">
                                      <a
                                        href="../../demo11/dist/apps/user-management/users/view.html"
                                        className="text-gray-800 text-hover-primary mb-1"
                                      >
                                        Neil Owen
                                      </a>
                                      <span>owen.neil@gmail.com</span>
                                    </div>
                                  </td>
                                  <td>Analyst</td>
                                  <td>
                                    <div className="badge badge-light fw-bolder">
                                      20 mins ago
                                    </div>
                                  </td>
                                  <td>
                                    <div className="badge badge-light-success fw-bolder">
                                      Enabled
                                    </div>
                                  </td>
                                  <td>15 Apr 2021, 5:20 pm</td>
                                  <td className="text-end">
                                    <a
                                      href="#"
                                      className="btn btn-light btn-active-light-primary btn-sm"
                                      data-kt-menu-trigger="click"
                                      data-kt-menu-placement="bottom-end"
                                    >
                                      Actions
                                      <span className="svg-icon svg-icon-5 m-0">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </a>
                                    <div
                                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                                      data-kt-menu="true"
                                    >
                                      <div className="menu-item px-3">
                                        <a
                                          href="../../demo11/dist/apps/user-management/users/view.html"
                                          className="menu-link px-3"
                                        >
                                          Edit
                                        </a>
                                      </div>
                                      <div className="menu-item px-3">
                                        <a
                                          href="#"
                                          className="menu-link px-3"
                                          data-kt-users-table-filter="delete_row"
                                        >
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue={1}
                                      />
                                    </div>
                                  </td>
                                  <td className="d-flex align-items-center">
                                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                      <a href="../../demo11/dist/apps/user-management/users/view.html">
                                        <div className="symbol-label">
                                          <img
                                            src="assets/media/avatars/150-6.jpg"
                                            alt="Dan Wilson"
                                            className="w-100"
                                          />
                                        </div>
                                      </a>
                                    </div>
                                    <div className="d-flex flex-column">
                                      <a
                                        href="../../demo11/dist/apps/user-management/users/view.html"
                                        className="text-gray-800 text-hover-primary mb-1"
                                      >
                                        Dan Wilson
                                      </a>
                                      <span>dam@consilting.com</span>
                                    </div>
                                  </td>
                                  <td>Developer</td>
                                  <td>
                                    <div className="badge badge-light fw-bolder">
                                      3 days ago
                                    </div>
                                  </td>
                                  <td />
                                  <td>22 Sep 2021, 2:40 pm</td>
                                  <td className="text-end">
                                    <a
                                      href="#"
                                      className="btn btn-light btn-active-light-primary btn-sm"
                                      data-kt-menu-trigger="click"
                                      data-kt-menu-placement="bottom-end"
                                    >
                                      Actions
                                      <span className="svg-icon svg-icon-5 m-0">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </a>
                                    <div
                                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                                      data-kt-menu="true"
                                    >
                                      <div className="menu-item px-3">
                                        <a
                                          href="../../demo11/dist/apps/user-management/users/view.html"
                                          className="menu-link px-3"
                                        >
                                          Edit
                                        </a>
                                      </div>
                                      <div className="menu-item px-3">
                                        <a
                                          href="#"
                                          className="menu-link px-3"
                                          data-kt-users-table-filter="delete_row"
                                        >
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue={1}
                                      />
                                    </div>
                                  </td>
                                  <td className="d-flex align-items-center">
                                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                      <a href="../../demo11/dist/apps/user-management/users/view.html">
                                        <div className="symbol-label fs-3 bg-light-danger text-danger">
                                          E
                                        </div>
                                      </a>
                                    </div>
                                    <div className="d-flex flex-column">
                                      <a
                                        href="../../demo11/dist/apps/user-management/users/view.html"
                                        className="text-gray-800 text-hover-primary mb-1"
                                      >
                                        Emma Bold
                                      </a>
                                      <span>emma@intenso.com</span>
                                    </div>
                                  </td>
                                  <td>Support</td>
                                  <td>
                                    <div className="badge badge-light fw-bolder">
                                      5 hours ago
                                    </div>
                                  </td>
                                  <td>
                                    <div className="badge badge-light-success fw-bolder">
                                      Enabled
                                    </div>
                                  </td>
                                  <td>24 Jun 2021, 6:43 am</td>
                                  <td className="text-end">
                                    <a
                                      href="#"
                                      className="btn btn-light btn-active-light-primary btn-sm"
                                      data-kt-menu-trigger="click"
                                      data-kt-menu-placement="bottom-end"
                                    >
                                      Actions
                                      <span className="svg-icon svg-icon-5 m-0">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </a>
                                    <div
                                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                                      data-kt-menu="true"
                                    >
                                      <div className="menu-item px-3">
                                        <a
                                          href="../../demo11/dist/apps/user-management/users/view.html"
                                          className="menu-link px-3"
                                        >
                                          Edit
                                        </a>
                                      </div>
                                      <div className="menu-item px-3">
                                        <a
                                          href="#"
                                          className="menu-link px-3"
                                          data-kt-users-table-filter="delete_row"
                                        >
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue={1}
                                      />
                                    </div>
                                  </td>
                                  <td className="d-flex align-items-center">
                                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                      <a href="../../demo11/dist/apps/user-management/users/view.html">
                                        <div className="symbol-label">
                                          <img
                                            src="assets/media/avatars/150-7.jpg"
                                            alt="Ana Crown"
                                            className="w-100"
                                          />
                                        </div>
                                      </a>
                                    </div>
                                    <div className="d-flex flex-column">
                                      <a
                                        href="../../demo11/dist/apps/user-management/users/view.html"
                                        className="text-gray-800 text-hover-primary mb-1"
                                      >
                                        Ana Crown
                                      </a>
                                      <span>ana.cf@limtel.com</span>
                                    </div>
                                  </td>
                                  <td>Developer</td>
                                  <td>
                                    <div className="badge badge-light fw-bolder">
                                      2 days ago
                                    </div>
                                  </td>
                                  <td>
                                    <div className="badge badge-light-success fw-bolder">
                                      Enabled
                                    </div>
                                  </td>
                                  <td>10 Mar 2021, 11:05 am</td>
                                  <td className="text-end">
                                    <a
                                      href="#"
                                      className="btn btn-light btn-active-light-primary btn-sm"
                                      data-kt-menu-trigger="click"
                                      data-kt-menu-placement="bottom-end"
                                    >
                                      Actions
                                      <span className="svg-icon svg-icon-5 m-0">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </a>
                                    <div
                                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                                      data-kt-menu="true"
                                    >
                                      <div className="menu-item px-3">
                                        <a
                                          href="../../demo11/dist/apps/user-management/users/view.html"
                                          className="menu-link px-3"
                                        >
                                          Edit
                                        </a>
                                      </div>
                                      <div className="menu-item px-3">
                                        <a
                                          href="#"
                                          className="menu-link px-3"
                                          data-kt-users-table-filter="delete_row"
                                        >
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue={1}
                                      />
                                    </div>
                                  </td>
                                  <td className="d-flex align-items-center">
                                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                      <a href="../../demo11/dist/apps/user-management/users/view.html">
                                        <div className="symbol-label fs-3 bg-light-info text-info">
                                          A
                                        </div>
                                      </a>
                                    </div>
                                    <div className="d-flex flex-column">
                                      <a
                                        href="../../demo11/dist/apps/user-management/users/view.html"
                                        className="text-gray-800 text-hover-primary mb-1"
                                      >
                                        Robert Doe
                                      </a>
                                      <span>robert@benko.com</span>
                                    </div>
                                  </td>
                                  <td>Administrator</td>
                                  <td>
                                    <div className="badge badge-light fw-bolder">
                                      5 days ago
                                    </div>
                                  </td>
                                  <td />
                                  <td>05 May 2021, 6:43 am</td>
                                  <td className="text-end">
                                    <a
                                      href="#"
                                      className="btn btn-light btn-active-light-primary btn-sm"
                                      data-kt-menu-trigger="click"
                                      data-kt-menu-placement="bottom-end"
                                    >
                                      Actions
                                      <span className="svg-icon svg-icon-5 m-0">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </a>
                                    <div
                                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                                      data-kt-menu="true"
                                    >
                                      <div className="menu-item px-3">
                                        <a
                                          href="../../demo11/dist/apps/user-management/users/view.html"
                                          className="menu-link px-3"
                                        >
                                          Edit
                                        </a>
                                      </div>
                                      <div className="menu-item px-3">
                                        <a
                                          href="#"
                                          className="menu-link px-3"
                                          data-kt-users-table-filter="delete_row"
                                        >
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue={1}
                                      />
                                    </div>
                                  </td>
                                  <td className="d-flex align-items-center">
                                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                      <a href="../../demo11/dist/apps/user-management/users/view.html">
                                        <div className="symbol-label">
                                          <img
                                            src="assets/media/avatars/150-17.jpg"
                                            alt="John Miller"
                                            className="w-100"
                                          />
                                        </div>
                                      </a>
                                    </div>
                                    <div className="d-flex flex-column">
                                      <a
                                        href="../../demo11/dist/apps/user-management/users/view.html"
                                        className="text-gray-800 text-hover-primary mb-1"
                                      >
                                        John Miller
                                      </a>
                                      <span>miller@mapple.com</span>
                                    </div>
                                  </td>
                                  <td>Trial</td>
                                  <td>
                                    <div className="badge badge-light fw-bolder">
                                      3 weeks ago
                                    </div>
                                  </td>
                                  <td />
                                  <td>05 May 2021, 10:30 am</td>
                                  <td className="text-end">
                                    <a
                                      href="#"
                                      className="btn btn-light btn-active-light-primary btn-sm"
                                      data-kt-menu-trigger="click"
                                      data-kt-menu-placement="bottom-end"
                                    >
                                      Actions
                                      <span className="svg-icon svg-icon-5 m-0">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </a>
                                    <div
                                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                                      data-kt-menu="true"
                                    >
                                      <div className="menu-item px-3">
                                        <a
                                          href="../../demo11/dist/apps/user-management/users/view.html"
                                          className="menu-link px-3"
                                        >
                                          Edit
                                        </a>
                                      </div>
                                      <div className="menu-item px-3">
                                        <a
                                          href="#"
                                          className="menu-link px-3"
                                          data-kt-users-table-filter="delete_row"
                                        >
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue={1}
                                      />
                                    </div>
                                  </td>
                                  <td className="d-flex align-items-center">
                                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                      <a href="../../demo11/dist/apps/user-management/users/view.html">
                                        <div className="symbol-label fs-3 bg-light-success text-success">
                                          L
                                        </div>
                                      </a>
                                    </div>
                                    <div className="d-flex flex-column">
                                      <a
                                        href="../../demo11/dist/apps/user-management/users/view.html"
                                        className="text-gray-800 text-hover-primary mb-1"
                                      >
                                        Lucy Kunic
                                      </a>
                                      <span>lucy.m@fentech.com</span>
                                    </div>
                                  </td>
                                  <td>Administrator</td>
                                  <td>
                                    <div className="badge badge-light fw-bolder">
                                      Yesterday
                                    </div>
                                  </td>
                                  <td />
                                  <td>15 Apr 2021, 5:30 pm</td>
                                  <td className="text-end">
                                    <a
                                      href="#"
                                      className="btn btn-light btn-active-light-primary btn-sm"
                                      data-kt-menu-trigger="click"
                                      data-kt-menu-placement="bottom-end"
                                    >
                                      Actions
                                      <span className="svg-icon svg-icon-5 m-0">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </a>
                                    <div
                                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                                      data-kt-menu="true"
                                    >
                                      <div className="menu-item px-3">
                                        <a
                                          href="../../demo11/dist/apps/user-management/users/view.html"
                                          className="menu-link px-3"
                                        >
                                          Edit
                                        </a>
                                      </div>
                                      <div className="menu-item px-3">
                                        <a
                                          href="#"
                                          className="menu-link px-3"
                                          data-kt-users-table-filter="delete_row"
                                        >
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue={1}
                                      />
                                    </div>
                                  </td>
                                  <td className="d-flex align-items-center">
                                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                      <a href="../../demo11/dist/apps/user-management/users/view.html">
                                        <div className="symbol-label fs-3 bg-light-danger text-danger">
                                          M
                                        </div>
                                      </a>
                                    </div>
                                    <div className="d-flex flex-column">
                                      <a
                                        href="../../demo11/dist/apps/user-management/users/view.html"
                                        className="text-gray-800 text-hover-primary mb-1"
                                      >
                                        Melody Macy
                                      </a>
                                      <span>melody@altbox.com</span>
                                    </div>
                                  </td>
                                  <td>Analyst</td>
                                  <td>
                                    <div className="badge badge-light fw-bolder">
                                      20 mins ago
                                    </div>
                                  </td>
                                  <td>
                                    <div className="badge badge-light-success fw-bolder">
                                      Enabled
                                    </div>
                                  </td>
                                  <td>20 Dec 2021, 5:20 pm</td>
                                  <td className="text-end">
                                    <a
                                      href="#"
                                      className="btn btn-light btn-active-light-primary btn-sm"
                                      data-kt-menu-trigger="click"
                                      data-kt-menu-placement="bottom-end"
                                    >
                                      Actions
                                      <span className="svg-icon svg-icon-5 m-0">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </a>
                                    <div
                                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                                      data-kt-menu="true"
                                    >
                                      <div className="menu-item px-3">
                                        <a
                                          href="../../demo11/dist/apps/user-management/users/view.html"
                                          className="menu-link px-3"
                                        >
                                          Edit
                                        </a>
                                      </div>
                                      <div className="menu-item px-3">
                                        <a
                                          href="#"
                                          className="menu-link px-3"
                                          data-kt-users-table-filter="delete_row"
                                        >
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue={1}
                                      />
                                    </div>
                                  </td>
                                  <td className="d-flex align-items-center">
                                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                      <a href="../../demo11/dist/apps/user-management/users/view.html">
                                        <div className="symbol-label">
                                          <img
                                            src="assets/media/avatars/150-26.jpg"
                                            alt="Max Smith"
                                            className="w-100"
                                          />
                                        </div>
                                      </a>
                                    </div>
                                    <div className="d-flex flex-column">
                                      <a
                                        href="../../demo11/dist/apps/user-management/users/view.html"
                                        className="text-gray-800 text-hover-primary mb-1"
                                      >
                                        Max Smith
                                      </a>
                                      <span>max@kt.com</span>
                                    </div>
                                  </td>
                                  <td>Developer</td>
                                  <td>
                                    <div className="badge badge-light fw-bolder">
                                      3 days ago
                                    </div>
                                  </td>
                                  <td />
                                  <td>25 Oct 2021, 10:30 am</td>
                                  <td className="text-end">
                                    <a
                                      href="#"
                                      className="btn btn-light btn-active-light-primary btn-sm"
                                      data-kt-menu-trigger="click"
                                      data-kt-menu-placement="bottom-end"
                                    >
                                      Actions
                                      <span className="svg-icon svg-icon-5 m-0">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </a>
                                    <div
                                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                                      data-kt-menu="true"
                                    >
                                      <div className="menu-item px-3">
                                        <a
                                          href="../../demo11/dist/apps/user-management/users/view.html"
                                          className="menu-link px-3"
                                        >
                                          Edit
                                        </a>
                                      </div>
                                      <div className="menu-item px-3">
                                        <a
                                          href="#"
                                          className="menu-link px-3"
                                          data-kt-users-table-filter="delete_row"
                                        >
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue={1}
                                      />
                                    </div>
                                  </td>
                                  <td className="d-flex align-items-center">
                                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                      <a href="../../demo11/dist/apps/user-management/users/view.html">
                                        <div className="symbol-label">
                                          <img
                                            src="assets/media/avatars/150-4.jpg"
                                            alt="Sean Bean"
                                            className="w-100"
                                          />
                                        </div>
                                      </a>
                                    </div>
                                    <div className="d-flex flex-column">
                                      <a
                                        href="../../demo11/dist/apps/user-management/users/view.html"
                                        className="text-gray-800 text-hover-primary mb-1"
                                      >
                                        Sean Bean
                                      </a>
                                      <span>sean@dellito.com</span>
                                    </div>
                                  </td>
                                  <td>Support</td>
                                  <td>
                                    <div className="badge badge-light fw-bolder">
                                      5 hours ago
                                    </div>
                                  </td>
                                  <td>
                                    <div className="badge badge-light-success fw-bolder">
                                      Enabled
                                    </div>
                                  </td>
                                  <td>22 Sep 2021, 5:20 pm</td>
                                  <td className="text-end">
                                    <a
                                      href="#"
                                      className="btn btn-light btn-active-light-primary btn-sm"
                                      data-kt-menu-trigger="click"
                                      data-kt-menu-placement="bottom-end"
                                    >
                                      Actions
                                      <span className="svg-icon svg-icon-5 m-0">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </a>
                                    <div
                                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                                      data-kt-menu="true"
                                    >
                                      <div className="menu-item px-3">
                                        <a
                                          href="../../demo11/dist/apps/user-management/users/view.html"
                                          className="menu-link px-3"
                                        >
                                          Edit
                                        </a>
                                      </div>
                                      <div className="menu-item px-3">
                                        <a
                                          href="#"
                                          className="menu-link px-3"
                                          data-kt-users-table-filter="delete_row"
                                        >
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue={1}
                                      />
                                    </div>
                                  </td>
                                  <td className="d-flex align-items-center">
                                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                      <a href="../../demo11/dist/apps/user-management/users/view.html">
                                        <div className="symbol-label">
                                          <img
                                            src="assets/media/avatars/150-15.jpg"
                                            alt="Brian Cox"
                                            className="w-100"
                                          />
                                        </div>
                                      </a>
                                    </div>
                                    <div className="d-flex flex-column">
                                      <a
                                        href="../../demo11/dist/apps/user-management/users/view.html"
                                        className="text-gray-800 text-hover-primary mb-1"
                                      >
                                        Brian Cox
                                      </a>
                                      <span>brian@exchange.com</span>
                                    </div>
                                  </td>
                                  <td>Developer</td>
                                  <td>
                                    <div className="badge badge-light fw-bolder">
                                      2 days ago
                                    </div>
                                  </td>
                                  <td>
                                    <div className="badge badge-light-success fw-bolder">
                                      Enabled
                                    </div>
                                  </td>
                                  <td>10 Mar 2021, 8:43 pm</td>
                                  <td className="text-end">
                                    <a
                                      href="#"
                                      className="btn btn-light btn-active-light-primary btn-sm"
                                      data-kt-menu-trigger="click"
                                      data-kt-menu-placement="bottom-end"
                                    >
                                      Actions
                                      <span className="svg-icon svg-icon-5 m-0">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </a>
                                    <div
                                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                                      data-kt-menu="true"
                                    >
                                      <div className="menu-item px-3">
                                        <a
                                          href="../../demo11/dist/apps/user-management/users/view.html"
                                          className="menu-link px-3"
                                        >
                                          Edit
                                        </a>
                                      </div>
                                      <div className="menu-item px-3">
                                        <a
                                          href="#"
                                          className="menu-link px-3"
                                          data-kt-users-table-filter="delete_row"
                                        >
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue={1}
                                      />
                                    </div>
                                  </td>
                                  <td className="d-flex align-items-center">
                                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                      <a href="../../demo11/dist/apps/user-management/users/view.html">
                                        <div className="symbol-label fs-3 bg-light-warning text-warning">
                                          M
                                        </div>
                                      </a>
                                    </div>
                                    <div className="d-flex flex-column">
                                      <a
                                        href="../../demo11/dist/apps/user-management/users/view.html"
                                        className="text-gray-800 text-hover-primary mb-1"
                                      >
                                        Mikaela Collins
                                      </a>
                                      <span>mikaela@pexcom.com</span>
                                    </div>
                                  </td>
                                  <td>Administrator</td>
                                  <td>
                                    <div className="badge badge-light fw-bolder">
                                      5 days ago
                                    </div>
                                  </td>
                                  <td />
                                  <td>19 Aug 2021, 5:20 pm</td>
                                  <td className="text-end">
                                    <a
                                      href="#"
                                      className="btn btn-light btn-active-light-primary btn-sm"
                                      data-kt-menu-trigger="click"
                                      data-kt-menu-placement="bottom-end"
                                    >
                                      Actions
                                      <span className="svg-icon svg-icon-5 m-0">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </a>
                                    <div
                                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                                      data-kt-menu="true"
                                    >
                                      <div className="menu-item px-3">
                                        <a
                                          href="../../demo11/dist/apps/user-management/users/view.html"
                                          className="menu-link px-3"
                                        >
                                          Edit
                                        </a>
                                      </div>
                                      <div className="menu-item px-3">
                                        <a
                                          href="#"
                                          className="menu-link px-3"
                                          data-kt-users-table-filter="delete_row"
                                        >
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                    <div className="form-check form-check-sm form-check-custom form-check-solid">
                                      <input
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue={1}
                                      />
                                    </div>
                                  </td>
                                  <td className="d-flex align-items-center">
                                    <div className="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                      <a href="../../demo11/dist/apps/user-management/users/view.html">
                                        <div className="symbol-label">
                                          <img
                                            src="assets/media/avatars/150-8.jpg"
                                            alt="Francis Mitcham"
                                            className="w-100"
                                          />
                                        </div>
                                      </a>
                                    </div>
                                    <div className="d-flex flex-column">
                                      <a
                                        href="../../demo11/dist/apps/user-management/users/view.html"
                                        className="text-gray-800 text-hover-primary mb-1"
                                      >
                                        Francis Mitcham
                                      </a>
                                      <span>f.mitcham@kpmg.com.au</span>
                                    </div>
                                  </td>
                                  <td>Trial</td>
                                  <td>
                                    <div className="badge badge-light fw-bolder">
                                      3 weeks ago
                                    </div>
                                  </td>
                                  <td />
                                  <td>19 Aug 2021, 2:40 pm</td>
                                  <td className="text-end">
                                    <a
                                      href="#"
                                      className="btn btn-light btn-active-light-primary btn-sm"
                                      data-kt-menu-trigger="click"
                                      data-kt-menu-placement="bottom-end"
                                    >
                                      Actions
                                      <span className="svg-icon svg-icon-5 m-0">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width={24}
                                          height={24}
                                          viewBox="0 0 24 24"
                                          fill="none"
                                        >
                                          <path
                                            d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
                                            fill="black"
                                          />
                                        </svg>
                                      </span>
                                    </a>
                                    <div
                                      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
                                      data-kt-menu="true"
                                    >
                                      <div className="menu-item px-3">
                                        <a
                                          href="../../demo11/dist/apps/user-management/users/view.html"
                                          className="menu-link px-3"
                                        >
                                          Edit
                                        </a>
                                      </div>
                                      <div className="menu-item px-3">
                                        <a
                                          href="#"
                                          className="menu-link px-3"
                                          data-kt-users-table-filter="delete_row"
                                        >
                                          Delete
                                        </a>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer py-4 d-flex flex-lg-column" id="kt_footer">
              <div className="container-xxl d-flex flex-column flex-md-row align-items-center justify-content-between">
                <div className="text-dark order-2 order-md-1">
                  <span className="text-muted fw-bold me-1">2021©</span>
                  <a
                    href="https://keenthemes.com"
                    target="_blank"
                    className="text-gray-800 text-hover-primary"
                  >
                    Keenthemes
                  </a>
                </div>
                <ul className="menu menu-gray-600 menu-hover-primary fw-bold order-1">
                  <li className="menu-item">
                    <a
                      href="https://keenthemes.com"
                      target="_blank"
                      className="menu-link px-2"
                    >
                      About
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="https://keenthemes.com/support"
                      target="_blank"
                      className="menu-link px-2"
                    >
                      Support
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="https://1.envato.market/EA4JP"
                      target="_blank"
                      className="menu-link px-2"
                    >
                      Purchase
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="kt_drawer_chat"
        className="bg-body"
        data-kt-drawer="true"
        data-kt-drawer-name="chat"
        data-kt-drawer-activate="true"
        data-kt-drawer-overlay="true"
        data-kt-drawer-width="{default:'300px', 'md': '500px'}"
        data-kt-drawer-direction="end"
        data-kt-drawer-toggle="#kt_drawer_chat_toggle"
        data-kt-drawer-close="#kt_drawer_chat_close"
      >
        <div className="card w-100 rounded-0" id="kt_drawer_chat_messenger">
          <div
            className="card-header pe-5"
            id="kt_drawer_chat_messenger_header"
          >
            <div className="card-toolbar">
              <div className="me-2">
                <button
                  className="btn btn-sm btn-icon btn-active-light-primary"
                  data-kt-menu-trigger="click"
                  data-kt-menu-placement="bottom-end"
                >
                  <i className="bi bi-three-dots fs-3" />
                </button>
                <div
                  className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3"
                  data-kt-menu="true"
                >
                  <div className="menu-item px-3">
                    <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">
                      Contacts
                    </div>
                  </div>
                  <div className="menu-item px-3">
                    <a
                      href="#"
                      className="menu-link px-3"
                      data-bs-toggle="modal"
                      data-bs-target="#kt_modal_users_search"
                    >
                      Add Contact
                    </a>
                  </div>
                  <div className="menu-item px-3">
                    <a
                      href="#"
                      className="menu-link flex-stack px-3"
                      data-bs-toggle="modal"
                      data-bs-target="#kt_modal_invite_friends"
                    >
                      Invite Contacts
                      <i
                        className="fas fa-exclamation-circle ms-2 fs-7"
                        data-bs-toggle="tooltip"
                        title="Specify a contact email to send an invitation"
                      />
                    </a>
                  </div>
                  <div
                    className="menu-item px-3"
                    data-kt-menu-trigger="hover"
                    data-kt-menu-placement="right-start"
                  >
                    <a href="#" className="menu-link px-3">
                      <span className="menu-title">Groups</span>
                      <span className="menu-arrow" />
                    </a>
                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                      <div className="menu-item px-3">
                        <a
                          href="#"
                          className="menu-link px-3"
                          data-bs-toggle="tooltip"
                          title="Coming soon"
                        >
                          Create Group
                        </a>
                      </div>
                      <div className="menu-item px-3">
                        <a
                          href="#"
                          className="menu-link px-3"
                          data-bs-toggle="tooltip"
                          title="Coming soon"
                        >
                          Invite Members
                        </a>
                      </div>
                      <div className="menu-item px-3">
                        <a
                          href="#"
                          className="menu-link px-3"
                          data-bs-toggle="tooltip"
                          title="Coming soon"
                        >
                          Settings
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="menu-item px-3 my-1">
                    <a
                      href="#"
                      className="menu-link px-3"
                      data-bs-toggle="tooltip"
                      title="Coming soon"
                    >
                      Settings
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="btn btn-sm btn-icon btn-active-light-primary"
                id="kt_drawer_chat_close"
              >
                <span className="svg-icon svg-icon-2">
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="kt_modal_invite_friends"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog mw-650px">
          <div className="modal-content">
            <div className="modal-header pb-0 border-0 justify-content-end">
              <div
                className="btn btn-sm btn-icon btn-active-color-primary"
                data-bs-dismiss="modal"
              >
                <span className="svg-icon svg-icon-1">
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
              </div>
            </div>
            <div className="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
              <div className="text-center mb-13">
                <h1 className="mb-3">Invite a Friend</h1>
                <div className="text-muted fw-bold fs-5">
                  If you need more info, please check out
                  <a href="#" className="link-primary fw-bolder">
                    FAQ Page
                  </a>
                  .
                </div>
              </div>
              <div className="btn btn-light-primary fw-bolder w-100 mb-8">
                <img
                  alt="Logo"
                  src="assets/media/svg/brand-logos/google-icon.svg"
                  className="h-20px me-3"
                />
                Invite Gmail Contacts
              </div>
              <div className="separator d-flex flex-center mb-8">
                <span className="text-uppercase bg-body fs-7 fw-bold text-muted px-3">
                  or
                </span>
              </div>
              <textarea
                className="form-control form-control-solid mb-8"
                rows={3}
                placeholder="Type or paste emails here"
                defaultValue={""}
              />
              <div className="mb-10">
                <div className="fs-6 fw-bold mb-2">Your Invitations</div>
                <div className="mh-300px scroll-y me-n7 pe-7">
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/150-1.png" />
                      </div>
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          Emma Smith
                        </a>
                        <div className="fw-bold text-muted">
                          e.smith@kpmg.com.au
                        </div>
                      </div>
                    </div>
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2} selected="selected">
                          Owner
                        </option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                  </div>
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-danger text-danger fw-bold">
                          M
                        </span>
                      </div>
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          Melody Macy
                        </a>
                        <div className="fw-bold text-muted">
                          melody@altbox.com
                        </div>
                      </div>
                    </div>
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1} selected="selected">
                          Guest
                        </option>
                        <option value={2}>Owner</option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                  </div>
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/150-26.jpg" />
                      </div>
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          Max Smith
                        </a>
                        <div className="fw-bold text-muted">max@kt.com</div>
                      </div>
                    </div>
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2}>Owner</option>
                        <option value={3} selected="selected">
                          Can Edit
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/150-4.jpg" />
                      </div>
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          Sean Bean
                        </a>
                        <div className="fw-bold text-muted">
                          sean@dellito.com
                        </div>
                      </div>
                    </div>
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2} selected="selected">
                          Owner
                        </option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                  </div>
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-danger text-danger fw-bold">
                          O
                        </span>
                      </div>
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          Olivia Wild
                        </a>
                        <div className="fw-bold text-muted">
                          olivia@corpmail.com
                        </div>
                      </div>
                    </div>
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2} selected="selected">
                          Owner
                        </option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                  </div>
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-primary text-primary fw-bold">
                          N
                        </span>
                      </div>
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          Neil Owen
                        </a>
                        <div className="fw-bold text-muted">
                          owen.neil@gmail.com
                        </div>
                      </div>
                    </div>
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1} selected="selected">
                          Guest
                        </option>
                        <option value={2}>Owner</option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                  </div>
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/150-6.jpg" />
                      </div>
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          Dan Wilson
                        </a>
                        <div className="fw-bold text-muted">
                          dam@consilting.com
                        </div>
                      </div>
                    </div>
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2}>Owner</option>
                        <option value={3} selected="selected">
                          Can Edit
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-danger text-danger fw-bold">
                          E
                        </span>
                      </div>
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          Emma Bold
                        </a>
                        <div className="fw-bold text-muted">
                          emma@intenso.com
                        </div>
                      </div>
                    </div>
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2} selected="selected">
                          Owner
                        </option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                  </div>
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/150-7.jpg" />
                      </div>
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          Ana Crown
                        </a>
                        <div className="fw-bold text-muted">
                          ana.cf@limtel.com
                        </div>
                      </div>
                    </div>
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1} selected="selected">
                          Guest
                        </option>
                        <option value={2}>Owner</option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                  </div>
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-info text-info fw-bold">
                          A
                        </span>
                      </div>
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          Robert Doe
                        </a>
                        <div className="fw-bold text-muted">
                          robert@benko.com
                        </div>
                      </div>
                    </div>
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2}>Owner</option>
                        <option value={3} selected="selected">
                          Can Edit
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/150-17.jpg" />
                      </div>
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          John Miller
                        </a>
                        <div className="fw-bold text-muted">
                          miller@mapple.com
                        </div>
                      </div>
                    </div>
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2}>Owner</option>
                        <option value={3} selected="selected">
                          Can Edit
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-success text-success fw-bold">
                          L
                        </span>
                      </div>
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          Lucy Kunic
                        </a>
                        <div className="fw-bold text-muted">
                          lucy.m@fentech.com
                        </div>
                      </div>
                    </div>
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2} selected="selected">
                          Owner
                        </option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                  </div>
                  <div className="d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-35px symbol-circle">
                        <img alt="Pic" src="assets/media/avatars/150-10.jpg" />
                      </div>
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          Ethan Wilder
                        </a>
                        <div className="fw-bold text-muted">
                          ethan@loop.com.au
                        </div>
                      </div>
                    </div>
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1} selected="selected">
                          Guest
                        </option>
                        <option value={2}>Owner</option>
                        <option value={3}>Can Edit</option>
                      </select>
                    </div>
                  </div>
                  <div className="d-flex flex-stack py-4">
                    <div className="d-flex align-items-center">
                      <div className="symbol symbol-35px symbol-circle">
                        <span className="symbol-label bg-light-info text-info fw-bold">
                          A
                        </span>
                      </div>
                      <div className="ms-5">
                        <a
                          href="#"
                          className="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2"
                        >
                          Robert Doe
                        </a>
                        <div className="fw-bold text-muted">
                          robert@benko.com
                        </div>
                      </div>
                    </div>
                    <div className="ms-2 w-100px">
                      <select
                        className="form-select form-select-solid form-select-sm"
                        data-control="select2"
                        data-hide-search="true"
                      >
                        <option value={1}>Guest</option>
                        <option value={2}>Owner</option>
                        <option value={3} selected="selected">
                          Can Edit
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-stack">
                <div className="me-5 fw-bold">
                  <label className="fs-6">Adding Users by Team Members</label>
                  <div className="fs-7 text-muted">
                    If you need more info, please check budget planning
                  </div>
                </div>
                <label className="form-check form-switch form-check-custom form-check-solid">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue={1}
                    defaultChecked="checked"
                  />
                  <span className="form-check-label fw-bold text-muted">
                    Allowed
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="kt_modal_create_app"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered mw-900px">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="georgian">ობიექტის დამატება</h2>
              <div
                className="btn btn-sm btn-icon btn-active-color-primary"
                data-bs-dismiss="modal"
              >
                <span className="svg-icon svg-icon-1">
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
              </div>
            </div>
            <div className="modal-body py-lg-10 px-lg-10">
              <div
                className="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid"
                id="kt_modal_create_app_stepper"
              >
                <div className="d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px">
                  <div className="stepper-nav ps-lg-10">
                    <div
                      className="stepper-item current"
                      data-kt-stepper-element="nav"
                    >
                      <div className="stepper-line w-40px" />
                      <div className="stepper-icon w-40px h-40px">
                        <i className="stepper-check fas fa-check" />
                        <span className="stepper-number">1</span>
                      </div>
                      <div className="stepper-label">
                        <h3 className="stepper-title georgian">კატეგორია</h3>
                        <div className="stepper-desc georgian">
                          ობიექტის აღწერა
                        </div>
                      </div>
                    </div>
                    <div className="stepper-item" data-kt-stepper-element="nav">
                      <div className="stepper-line w-40px" />
                      <div className="stepper-icon w-40px h-40px">
                        <i className="stepper-check fas fa-check" />
                        <span className="stepper-number">2</span>
                      </div>
                      <div className="stepper-label">
                        <h3 className="stepper-title georgian">მდგომარეობა</h3>
                        <div className="stepper-desc georgian">
                          სამუშაოს განსაზღვრება
                        </div>
                      </div>
                    </div>
                    <div className="stepper-item" data-kt-stepper-element="nav">
                      <div className="stepper-line w-40px" />
                      <div className="stepper-icon w-40px h-40px">
                        <i className="stepper-check fas fa-check" />
                        <span className="stepper-number">3</span>
                      </div>
                      <div className="stepper-label">
                        <h3 className="stepper-title georgian">სამუშაოები</h3>
                        <div className="stepper-desc georgian">
                          შესასრულებელი სამუშაო
                        </div>
                      </div>
                    </div>
                    <div className="stepper-item" data-kt-stepper-element="nav">
                      <div className="stepper-line w-40px" />
                      <div className="stepper-icon w-40px h-40px">
                        <i className="stepper-check fas fa-check" />
                        <span className="stepper-number">4</span>
                      </div>
                      <div className="stepper-label">
                        <h3 className="stepper-title">Billing</h3>
                        <div className="stepper-desc">
                          Provide payment details
                        </div>
                      </div>
                    </div>
                    <div className="stepper-item" data-kt-stepper-element="nav">
                      <div className="stepper-line w-40px" />
                      <div className="stepper-icon w-40px h-40px">
                        <i className="stepper-check fas fa-check" />
                        <span className="stepper-number">5</span>
                      </div>
                      <div className="stepper-label">
                        <h3 className="stepper-title">Completed</h3>
                        <div className="stepper-desc">Review and Submit</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-row-fluid py-lg-5 px-lg-15">
                  <form className="form" noValidate="novalidate" id="">
                    <div className="current" data-kt-stepper-element="content">
                      <div className="w-100">
                        <div className="fv-row mb-10">
                          <label className="d-flex align-items-center fs-5 fw-bold mb-2">
                            <span className="required georgian">
                              ქონების ტიპი
                            </span>
                            <i
                              className="fas fa-exclamation-circle ms-2 fs-7"
                              data-bs-toggle="tooltip"
                              title="მიუთითეთ სამუშაო ობიექტის ტიპი"
                            />
                          </label>
                          <select
                            className="form-select form-select-solid georgian"
                            aria-label="Select example"
                          >
                            <option value={1}>ბინა</option>
                            <option value={2}>სახლი-აგარაკი</option>
                            <option value={3}>კომერციული ფართი</option>
                            <option value={4}>სასტუმრო</option>
                          </select>
                        </div>
                        <div className="row mb-10">
                          <div className="col-md-12 fv-row">
                            <label className="required fs-6 fw-bold form-label georgian mb-2">
                              მდებარეობა / რაიონი
                            </label>
                            <div className="row fv-row">
                              <div className="col-6">
                                <select
                                  name="locale"
                                  className="form-select form-select-solid georgian"
                                  data-placeholder="მდებარეობა"
                                >
                                  <option value={1}>თბილისი</option>
                                  <option value={2}>რუსთავი</option>
                                  <option value={3}>ქუთაისი</option>
                                  <option value={4}>ბათუმი</option>
                                  <option value={5}>აბასთუმანი</option>
                                  <option value={6}>აბაშა</option>
                                  <option value={7}>ჩხალთა</option>
                                </select>
                              </div>
                              <div className="col-6">
                                <select
                                  name="locale"
                                  className="form-select form-select-solid georgian"
                                  data-placeholder="მდებარეობა"
                                >
                                  <option value={1}>გლდანის რაიონი</option>
                                  <option value={2}>დიდუბის რაიონი</option>
                                  <option value={3}>ვაკის რაიონი</option>
                                  <option value={4}>საურთალოს რაიონი</option>
                                  <option value={5}>მთაწმინდის რაიონი</option>
                                  <option value={6}>ჩუღურეთის რაიონი</option>
                                  <option value={7}>თბილისის შემოგარენი</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mb-10">
                          <div className="col-md-12 fv-row">
                            <label className="required fs-6 fw-bold form-label georgian mb-2">
                              მისამართი / ტელეფონი
                            </label>
                            <div className="row fv-row">
                              <div className="col-6">
                                <input
                                  type="text"
                                  className="form-control georgian form-control-solid"
                                  placeholder="ზუსტი მისამართი"
                                />
                              </div>
                              <div className="col-6">
                                <input
                                  type="text"
                                  className="form-control georgian form-control-solid"
                                  placeholder="ტელეფონი"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-kt-stepper-element="content">
                      <div className="w-100">
                        <div className="fv-row">
                          <label className="d-flex align-items-center fs-5 fw-bold mb-4">
                            <span className="required georgian">
                              მდგომარეობა
                            </span>
                            <i
                              className="fas fa-exclamation-circle ms-2 fs-7"
                              data-bs-toggle="tooltip"
                              title="მიუთითეთ ობიექტის მდგომარეობა"
                            />
                          </label>
                          <div className="fv-row">
                            <label className="d-flex flex-stack mb-5 cursor-pointer">
                              <span className="d-flex align-items-center me-2">
                                <span className="symbol symbol-50px me-6">
                                  <span className="symbol-label bg-light-primary">
                                    <span className="svg-icon svg-icon-1 svg-icon-primary">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                      >
                                        <path
                                          opacity="0.3"
                                          d="M18.4 5.59998C21.9 9.09998 21.9 14.8 18.4 18.3C14.9 21.8 9.2 21.8 5.7 18.3L18.4 5.59998Z"
                                          fill="black"
                                        />
                                        <path
                                          d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM19.9 11H13V8.8999C14.9 8.6999 16.7 8.00005 18.1 6.80005C19.1 8.00005 19.7 9.4 19.9 11ZM11 19.8999C9.7 19.6999 8.39999 19.2 7.39999 18.5C8.49999 17.7 9.7 17.2001 11 17.1001V19.8999ZM5.89999 6.90002C7.39999 8.10002 9.2 8.8 11 9V11.1001H4.10001C4.30001 9.4001 4.89999 8.00002 5.89999 6.90002ZM7.39999 5.5C8.49999 4.7 9.7 4.19998 11 4.09998V7C9.7 6.8 8.39999 6.3 7.39999 5.5ZM13 17.1001C14.3 17.3001 15.6 17.8 16.6 18.5C15.5 19.3 14.3 19.7999 13 19.8999V17.1001ZM13 4.09998C14.3 4.29998 15.6 4.8 16.6 5.5C15.5 6.3 14.3 6.80002 13 6.90002V4.09998ZM4.10001 13H11V15.1001C9.1 15.3001 7.29999 16 5.89999 17.2C4.89999 16 4.30001 14.6 4.10001 13ZM18.1 17.1001C16.6 15.9001 14.8 15.2 13 15V12.8999H19.9C19.7 14.5999 19.1 16.0001 18.1 17.1001Z"
                                          fill="black"
                                        />
                                      </svg>
                                    </span>
                                  </span>
                                </span>
                                <span className="d-flex flex-column">
                                  <span className="fw-bolder georgian fs-6">
                                    ახალი აშენებული
                                  </span>
                                  <span className="fs-7 text-muted">
                                    Creating a clear text structure is just one
                                    SEO
                                  </span>
                                </span>
                              </span>
                              <span className="form-check form-check-custom form-check-solid">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="category"
                                  defaultValue={1}
                                />
                              </span>
                            </label>
                            <label className="d-flex flex-stack mb-5 cursor-pointer">
                              <span className="d-flex align-items-center me-2">
                                <span className="symbol symbol-50px me-6">
                                  <span className="symbol-label bg-light-danger">
                                    <span className="svg-icon svg-icon-1 svg-icon-danger">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24px"
                                        height="24px"
                                        viewBox="0 0 24 24"
                                      >
                                        <g
                                          stroke="none"
                                          strokeWidth={1}
                                          fill="none"
                                          fillRule="evenodd"
                                        >
                                          <rect
                                            x={5}
                                            y={5}
                                            width={5}
                                            height={5}
                                            rx={1}
                                            fill="#000000"
                                          />
                                          <rect
                                            x={14}
                                            y={5}
                                            width={5}
                                            height={5}
                                            rx={1}
                                            fill="#000000"
                                            opacity="0.3"
                                          />
                                          <rect
                                            x={5}
                                            y={14}
                                            width={5}
                                            height={5}
                                            rx={1}
                                            fill="#000000"
                                            opacity="0.3"
                                          />
                                          <rect
                                            x={14}
                                            y={14}
                                            width={5}
                                            height={5}
                                            rx={1}
                                            fill="#000000"
                                            opacity="0.3"
                                          />
                                        </g>
                                      </svg>
                                    </span>
                                  </span>
                                </span>
                                <span className="d-flex flex-column">
                                  <span className="fw-bolder georgian fs-6">
                                    ძველი აშენებული
                                  </span>
                                  <span className="fs-7 text-muted">
                                    Creating a clear text structure is just one
                                    aspect
                                  </span>
                                </span>
                              </span>
                              <span className="form-check form-check-custom form-check-solid">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="category"
                                  defaultValue={2}
                                />
                              </span>
                            </label>
                          </div>
                        </div>
                        <div className="fv-row">
                          <label className="d-flex align-items-center fs-5 fw-bold mb-4">
                            <span className="required georgian">
                              არსებული მდგომარეობა
                            </span>
                            <i
                              className="fas fa-exclamation-circle ms-2 fs-7"
                              data-bs-toggle="tooltip"
                              title="ობიექტის არსებული მდგომარეობა"
                            />
                          </label>
                          <label className="d-flex flex-stack cursor-pointer mb-5">
                            <span className="d-flex align-items-center me-2">
                              <span className="symbol symbol-50px me-6">
                                <span className="symbol-label bg-light-warning">
                                  <i className="fab fa-html5 text-warning fs-2x" />
                                </span>
                              </span>
                              <span className="d-flex flex-column">
                                <span className="fw-bolder georgian fs-6">
                                  შავი კარკასი
                                </span>
                                <span className="fs-7 georgian text-muted">
                                  სამუშაოები სრულ რემონტამდე.
                                </span>
                              </span>
                            </span>
                            <span className="form-check form-check-custom form-check-solid">
                              <input
                                className="form-check-input"
                                type="radio"
                                defaultChecked="checked"
                                name="framework"
                                defaultValue={1}
                              />
                            </span>
                          </label>
                          <label className="d-flex flex-stack cursor-pointer mb-5">
                            <span className="d-flex align-items-center me-2">
                              <span className="symbol symbol-50px me-6">
                                <span className="symbol-label bg-light-success">
                                  <i className="fab fa-react text-success fs-2x" />
                                </span>
                              </span>
                              <span className="d-flex flex-column">
                                <span className="fw-bolder georgian fs-6">
                                  თეთრი კარკასი
                                </span>
                                <span className="fs-7 georgian text-muted">
                                  სამუშაოები სრულ რემონტამდე.
                                </span>
                              </span>
                            </span>
                            <span className="form-check form-check-custom form-check-solid">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="framework"
                                defaultValue={2}
                              />
                            </span>
                          </label>
                          <label className="d-flex flex-stack cursor-pointer mb-5">
                            <span className="d-flex align-items-center me-2">
                              <span className="symbol symbol-50px me-6">
                                <span className="symbol-label bg-light-danger">
                                  <i className="fab fa-angular text-danger fs-2x" />
                                </span>
                              </span>
                              <span className="d-flex flex-column">
                                <span className="fw-bolder georgian fs-6">
                                  მწვანე კარკასი
                                </span>
                                <span className="fs-7 georgian text-muted">
                                  სამუშაოები სრულ რემონტამდე.
                                </span>
                              </span>
                            </span>
                            <span className="form-check form-check-custom form-check-solid">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="framework"
                                defaultValue={3}
                              />
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div data-kt-stepper-element="content">
                      <div className="w-100">
                        <div className="fv-row mb-10">
                          <label className="required fs-5 georgian fw-bold mb-2">
                            ობიექტის დასახელება
                          </label>
                          <input
                            type="text"
                            className="form-control georgian form-control-lg form-control-solid"
                            name="dbname"
                            placeholder=""
                            defaultValue="ობიექტის დასახელება"
                          />
                        </div>
                        <div className="row mb-10">
                          <div className="col-md-12 fv-row">
                            <label className="required fs-6 fw-bold form-label georgian mb-2">
                              შესასრულებელი სამუშაოები
                            </label>
                            <div className="row fv-row">
                              <div className="col-6">
                                <div className="d-flex flex-column">
                                  <div className="form-check form-check-custom form-check-solid mb-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      defaultValue=""
                                      id="closeButton"
                                    />
                                    <label
                                      className="form-check-label georgian"
                                      htmlFor="closeButton"
                                    >
                                      დემონტაჟი
                                    </label>
                                  </div>
                                  <div className="form-check form-check-custom form-check-solid mb-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      defaultValue=""
                                      id="addBehaviorOnToastClick"
                                    />
                                    <label
                                      className="form-check-label georgian"
                                      htmlFor="closeButton"
                                    >
                                      ტიხრები
                                    </label>
                                  </div>
                                  <div className="form-check form-check-custom form-check-solid mb-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      defaultValue=""
                                      id="preventDuplicates"
                                    />
                                    <label
                                      className="form-check-label georgian"
                                      htmlFor="closeButton"
                                    >
                                      ჭერი
                                    </label>
                                  </div>
                                  <div className="form-check form-check-custom form-check-solid mb-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      defaultValue=""
                                      id="preventDuplicates"
                                    />
                                    <label
                                      className="form-check-label georgian"
                                      htmlFor="closeButton"
                                    >
                                      ლესვა
                                    </label>
                                  </div>
                                  <div className="form-check form-check-custom form-check-solid mb-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      defaultValue=""
                                      id="debugInfo"
                                    />
                                    <label
                                      className="form-check-label georgian"
                                      htmlFor="closeButton"
                                    >
                                      იატაკის მოხვეწა
                                    </label>
                                  </div>
                                  <div className="form-check form-check-custom form-check-solid mb-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      defaultValue=""
                                      id="preventDuplicates"
                                    />
                                    <label
                                      className="form-check-label georgian"
                                      htmlFor="closeButton"
                                    >
                                      სანტექნიკა
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="col-6">
                                <div className="d-flex flex-column">
                                  <div className="form-check form-check-custom form-check-solid mb-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      defaultValue=""
                                      id="preventDuplicates"
                                    />
                                    <label
                                      className="form-check-label georgian"
                                      htmlFor="closeButton"
                                    >
                                      გათბობა, გაგრილება
                                    </label>
                                  </div>
                                  <div className="form-check form-check-custom form-check-solid mb-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      defaultValue=""
                                      id="preventDuplicates"
                                    />
                                    <label
                                      className="form-check-label georgian"
                                      htmlFor="closeButton"
                                    >
                                      ელექტროობა
                                    </label>
                                  </div>
                                  <div className="form-check form-check-custom form-check-solid mb-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      defaultValue=""
                                      id="preventDuplicates"
                                    />
                                    <label
                                      className="form-check-label georgian"
                                      htmlFor="closeButton"
                                    >
                                      ფილის დაგება/გაკვრა
                                    </label>
                                  </div>
                                  <div className="form-check form-check-custom form-check-solid mb-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      defaultValue=""
                                      id="preventDuplicates"
                                    />
                                    <label
                                      className="form-check-label georgian"
                                      htmlFor="closeButton"
                                    >
                                      სამღებრო სამუშაოები
                                    </label>
                                  </div>
                                  <div className="form-check form-check-custom form-check-solid mb-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      defaultValue=""
                                      id="preventDuplicates"
                                    />
                                    <label
                                      className="form-check-label georgian"
                                      htmlFor="closeButton"
                                    >
                                      იატაკის საფარი
                                    </label>
                                  </div>
                                  <div className="form-check form-check-custom form-check-solid mb-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      defaultValue=""
                                      id="preventDuplicates"
                                    />
                                    <label
                                      className="form-check-label georgian"
                                      htmlFor="closeButton"
                                    >
                                      კარ-ფანჯარა
                                    </label>
                                  </div>
                                  <div className="form-check form-check-custom form-check-solid mb-2">
                                    <input
                                      className="form-check-input"
                                      type="checkbox"
                                      defaultValue=""
                                      id="preventDuplicates"
                                    />
                                    <label
                                      className="form-check-label georgian"
                                      htmlFor="closeButton"
                                    >
                                      დალაგება
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div data-kt-stepper-element="content">
                      <div className="w-100">
                        <div className="d-flex flex-column mb-7 fv-row">
                          <label className="d-flex align-items-center fs-6 fw-bold form-label mb-2">
                            <span className="required">Name On Card</span>
                            <i
                              className="fas fa-exclamation-circle ms-2 fs-7"
                              data-bs-toggle="tooltip"
                              title="Specify a card holder's name"
                            />
                          </label>
                          <input
                            type="text"
                            className="form-control form-control-solid"
                            placeholder=""
                            name="card_name"
                            defaultValue="Max Doe"
                          />
                        </div>
                        <div className="d-flex flex-column mb-7 fv-row">
                          <label className="required fs-6 fw-bold form-label mb-2">
                            Card Number
                          </label>
                          <div className="position-relative">
                            <input
                              type="text"
                              className="form-control form-control-solid"
                              placeholder="Enter card number"
                              name="card_number"
                              defaultValue="4111 1111 1111 1111"
                            />
                            <div className="position-absolute translate-middle-y top-50 end-0 me-5">
                              <img
                                src="assets/media/svg/card-logos/visa.svg"
                                alt=""
                                className="h-25px"
                              />
                              <img
                                src="assets/media/svg/card-logos/mastercard.svg"
                                alt=""
                                className="h-25px"
                              />
                              <img
                                src="assets/media/svg/card-logos/american-express.svg"
                                alt=""
                                className="h-25px"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row mb-10">
                          <div className="col-md-8 fv-row">
                            <label className="required fs-6 fw-bold form-label mb-2">
                              Expiration Date
                            </label>
                            <div className="row fv-row">
                              <div className="col-6">
                                <select
                                  name="card_expiry_month"
                                  className="form-select form-select-solid"
                                  data-control="select2"
                                  data-hide-search="true"
                                  data-placeholder="Month"
                                >
                                  <option />
                                  <option value={1}>1</option>
                                  <option value={2}>2</option>
                                  <option value={3}>3</option>
                                  <option value={4}>4</option>
                                  <option value={5}>5</option>
                                  <option value={6}>6</option>
                                  <option value={7}>7</option>
                                  <option value={8}>8</option>
                                  <option value={9}>9</option>
                                  <option value={10}>10</option>
                                  <option value={11}>11</option>
                                  <option value={12}>12</option>
                                </select>
                              </div>
                              <div className="col-6">
                                <select
                                  name="card_expiry_year"
                                  className="form-select form-select-solid"
                                  data-control="select2"
                                  data-hide-search="true"
                                  data-placeholder="Year"
                                >
                                  <option />
                                  <option value={2021}>2021</option>
                                  <option value={2022}>2022</option>
                                  <option value={2023}>2023</option>
                                  <option value={2024}>2024</option>
                                  <option value={2025}>2025</option>
                                  <option value={2026}>2026</option>
                                  <option value={2027}>2027</option>
                                  <option value={2028}>2028</option>
                                  <option value={2029}>2029</option>
                                  <option value={2030}>2030</option>
                                  <option value={2031}>2031</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 fv-row">
                            <label className="d-flex align-items-center fs-6 fw-bold form-label mb-2">
                              <span className="required">CVV</span>
                              <i
                                className="fas fa-exclamation-circle ms-2 fs-7"
                                data-bs-toggle="tooltip"
                                title="Enter a card CVV code"
                              />
                            </label>
                            <div className="position-relative">
                              <input
                                type="text"
                                className="form-control form-control-solid"
                                minLength={3}
                                maxLength={4}
                                placeholder="CVV"
                                name="card_cvv"
                              />
                              <div className="position-absolute translate-middle-y top-50 end-0 me-3">
                                <span className="svg-icon svg-icon-2hx">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <path d="M22 7H2V11H22V7Z" fill="black" />
                                    <path
                                      opacity="0.3"
                                      d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19ZM14 14C14 13.4 13.6 13 13 13H5C4.4 13 4 13.4 4 14C4 14.6 4.4 15 5 15H13C13.6 15 14 14.6 14 14ZM16 15.5C16 16.3 16.7 17 17.5 17H18.5C19.3 17 20 16.3 20 15.5C20 14.7 19.3 14 18.5 14H17.5C16.7 14 16 14.7 16 15.5Z"
                                      fill="black"
                                    />
                                  </svg>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex flex-stack">
                          <div className="me-5">
                            <label className="fs-6 fw-bold form-label">
                              Save Card for further billing?
                            </label>
                            <div className="fs-7 fw-bold text-muted">
                              If you need more info, please check budget
                              planning
                            </div>
                          </div>
                          <label className="form-check form-switch form-check-custom form-check-solid">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              defaultValue={1}
                              defaultChecked="checked"
                            />
                            <span className="form-check-label fw-bold text-muted">
                              Save Card
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div data-kt-stepper-element="content">
                      <div className="w-100 text-center">
                        <h1 className="fw-bolder text-dark mb-3">Release!</h1>
                        <div className="text-muted fw-bold fs-3">
                          Submit your app to kickstart your project.
                        </div>
                        <div className="text-center px-4 py-15">
                          <img
                            src="assets/media/illustrations/sketchy-1/9.png"
                            alt=""
                            className="w-100 mh-300px"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="d-flex flex-stack pt-10">
                      <div className="me-2">
                        <button
                          type="button"
                          className="btn georgian btn-lg btn-light-primary me-3"
                          data-kt-stepper-action="previous"
                        >
                          <span className="svg-icon svg-icon-3 me-1">
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
                                y={11}
                                width={13}
                                height={2}
                                rx={1}
                                fill="black"
                              />
                              <path
                                d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="btn btn-lg btn-primary"
                          data-kt-stepper-action="submit"
                        >
                          <span className="indicator-label georgian">
                            გაგზავნა
                            <span className="svg-icon svg-icon-3 ms-2 me-0">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.5"
                                  x={18}
                                  y={13}
                                  width={13}
                                  height={2}
                                  rx={1}
                                  transform="rotate(-180 18 13)"
                                  fill="black"
                                />
                                <path
                                  d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </span>
                          <span className="indicator-progress georgian">
                            გთხოვთ დაიცადოთ...
                            <span className="spinner-border spinner-border-sm align-middle ms-2" />
                          </span>
                        </button>
                        <button
                          type="button"
                          className="btn btn-lg georgian btn-primary"
                          data-kt-stepper-action="next"
                        >
                          გაგრძელება
                          <span className="svg-icon svg-icon-3 ms-1 me-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <rect
                                opacity="0.5"
                                x={18}
                                y={13}
                                width={13}
                                height={2}
                                rx={1}
                                transform="rotate(-180 18 13)"
                                fill="black"
                              />
                              <path
                                d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z"
                                fill="black"
                              />
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="kt_modal_upgrade_plan"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl">
          <div className="modal-content rounded">
            <div className="modal-header justify-content-end border-0 pb-0">
              <div
                className="btn btn-sm btn-icon btn-active-color-primary"
                data-bs-dismiss="modal"
              >
                <span className="svg-icon svg-icon-1">
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
              </div>
            </div>
            <div className="modal-body pt-0 pb-15 px-5 px-xl-20">
              <div className="mb-13 text-center">
                <h1 className="mb-3">Upgrade a Plan</h1>
                <div className="text-muted fw-bold fs-5">
                  If you need more info, please check
                  <a href="#" className="link-primary fw-bolder">
                    Pricing Guidelines
                  </a>
                  .
                </div>
              </div>
              <div className="d-flex flex-column">
                <div
                  className="nav-group nav-group-outline mx-auto"
                  data-kt-buttons="true"
                >
                  <a
                    href="#"
                    className="btn btn-color-gray-400 btn-active btn-active-secondary px-6 py-3 me-2 active"
                    data-kt-plan="month"
                  >
                    Monthly
                  </a>
                  <a
                    href="#"
                    className="btn btn-color-gray-400 btn-active btn-active-secondary px-6 py-3"
                    data-kt-plan="annual"
                  >
                    Annual
                  </a>
                </div>
                <div className="row mt-10">
                  <div className="col-lg-6 mb-10 mb-lg-0">
                    <div className="nav flex-column">
                      <div
                        className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 active mb-6"
                        data-bs-toggle="tab"
                        data-bs-target="#kt_upgrade_plan_startup"
                      >
                        <div className="d-flex align-items-center me-2">
                          <div className="form-check form-check-custom form-check-solid form-check-success me-6">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="plan"
                              defaultChecked="checked"
                              defaultValue="startup"
                            />
                          </div>
                          <div className="flex-grow-1">
                            <h2 className="d-flex align-items-center fs-2 fw-bolder flex-wrap">
                              Startup
                            </h2>
                            <div className="fw-bold opacity-50">
                              Best for startups
                            </div>
                          </div>
                        </div>
                        <div className="ms-5">
                          <span className="mb-2">$</span>
                          <span
                            className="fs-3x fw-bolder"
                            data-kt-plan-price-month={39}
                            data-kt-plan-price-annual={399}
                          >
                            39
                          </span>
                          <span className="fs-7 opacity-50">
                            /<span data-kt-element="period">Mon</span>
                          </span>
                        </div>
                      </div>
                      <div
                        className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 mb-6"
                        data-bs-toggle="tab"
                        data-bs-target="#kt_upgrade_plan_advanced"
                      >
                        <div className="d-flex align-items-center me-2">
                          <div className="form-check form-check-custom form-check-solid form-check-success me-6">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="plan"
                              defaultValue="advanced"
                            />
                          </div>
                          <div className="flex-grow-1">
                            <h2 className="d-flex align-items-center fs-2 fw-bolder flex-wrap">
                              Advanced
                            </h2>
                            <div className="fw-bold opacity-50">
                              Best for 100+ team size
                            </div>
                          </div>
                        </div>
                        <div className="ms-5">
                          <span className="mb-2">$</span>
                          <span
                            className="fs-3x fw-bolder"
                            data-kt-plan-price-month={339}
                            data-kt-plan-price-annual={3399}
                          >
                            339
                          </span>
                          <span className="fs-7 opacity-50">
                            /<span data-kt-element="period">Mon</span>
                          </span>
                        </div>
                      </div>
                      <div
                        className="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active btn-active-primary d-flex flex-stack text-start p-6 mb-6"
                        data-bs-toggle="tab"
                        data-bs-target="#kt_upgrade_plan_enterprise"
                      >
                        <div className="d-flex align-items-center me-2">
                          <div className="form-check form-check-custom form-check-solid form-check-success me-6">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="plan"
                              defaultValue="enterprise"
                            />
                          </div>
                          <div className="flex-grow-1">
                            <h2 className="d-flex align-items-center fs-2 fw-bolder flex-wrap">
                              Enterprise
                              <span className="badge badge-light-success ms-2 fs-7">
                                Most popular
                              </span>
                            </h2>
                            <div className="fw-bold opacity-50">
                              Best value for 1000+ team
                            </div>
                          </div>
                        </div>
                        <div className="ms-5">
                          <span className="mb-2">$</span>
                          <span
                            className="fs-3x fw-bolder"
                            data-kt-plan-price-month={999}
                            data-kt-plan-price-annual={9999}
                          >
                            999
                          </span>
                          <span className="fs-7 opacity-50">
                            /<span data-kt-element="period">Mon</span>
                          </span>
                        </div>
                      </div>
                      <div className="nav-link btn btn-outline btn-outline-dashed btn-color-dark d-flex flex-stack text-start p-6">
                        <div className="d-flex align-items-center me-2">
                          <div className="form-check form-check-custom form-check-solid form-check-success me-6">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="plan"
                              defaultValue="custom"
                            />
                          </div>
                          <div className="flex-grow-1">
                            <h2 className="d-flex align-items-center fs-2 fw-bolder flex-wrap">
                              Custom
                            </h2>
                            <div className="fw-bold opacity-50">
                              Requet a custom license
                            </div>
                          </div>
                        </div>
                        <div className="ms-5">
                          <a href="#" className="btn btn-sm btn-primary">
                            Contact Us
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="tab-content rounded h-100 bg-light p-10">
                      <div
                        className="tab-pane fade show active"
                        id="kt_upgrade_plan_startup"
                      >
                        <div className="pb-5">
                          <h2 className="fw-bolder text-dark">
                            What’s in Startup Plan?
                          </h2>
                          <div className="text-muted fw-bold">
                            Optimal for 10+ team size and new startup
                          </div>
                        </div>
                        <div className="pt-1">
                          <div className="d-flex align-items-center mb-7">
                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                              Up to 10 Active Users
                            </span>
                            <span className="svg-icon svg-icon-1 svg-icon-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.3"
                                  x={2}
                                  y={2}
                                  width={20}
                                  height={20}
                                  rx={10}
                                  fill="black"
                                />
                                <path
                                  d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="d-flex align-items-center mb-7">
                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                              Up to 30 Project Integrations
                            </span>
                            <span className="svg-icon svg-icon-1 svg-icon-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.3"
                                  x={2}
                                  y={2}
                                  width={20}
                                  height={20}
                                  rx={10}
                                  fill="black"
                                />
                                <path
                                  d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="d-flex align-items-center mb-7">
                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                              Analytics Module
                            </span>
                            <span className="svg-icon svg-icon-1 svg-icon-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.3"
                                  x={2}
                                  y={2}
                                  width={20}
                                  height={20}
                                  rx={10}
                                  fill="black"
                                />
                                <path
                                  d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="d-flex align-items-center mb-7">
                            <span className="fw-bold fs-5 text-muted flex-grow-1">
                              Finance Module
                            </span>
                            <span className="svg-icon svg-icon-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.3"
                                  x={2}
                                  y={2}
                                  width={20}
                                  height={20}
                                  rx={10}
                                  fill="black"
                                />
                                <rect
                                  x={7}
                                  y="15.3137"
                                  width={12}
                                  height={2}
                                  rx={1}
                                  transform="rotate(-45 7 15.3137)"
                                  fill="black"
                                />
                                <rect
                                  x="8.41422"
                                  y={7}
                                  width={12}
                                  height={2}
                                  rx={1}
                                  transform="rotate(45 8.41422 7)"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="d-flex align-items-center mb-7">
                            <span className="fw-bold fs-5 text-muted flex-grow-1">
                              Accounting Module
                            </span>
                            <span className="svg-icon svg-icon-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.3"
                                  x={2}
                                  y={2}
                                  width={20}
                                  height={20}
                                  rx={10}
                                  fill="black"
                                />
                                <rect
                                  x={7}
                                  y="15.3137"
                                  width={12}
                                  height={2}
                                  rx={1}
                                  transform="rotate(-45 7 15.3137)"
                                  fill="black"
                                />
                                <rect
                                  x="8.41422"
                                  y={7}
                                  width={12}
                                  height={2}
                                  rx={1}
                                  transform="rotate(45 8.41422 7)"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="d-flex align-items-center mb-7">
                            <span className="fw-bold fs-5 text-muted flex-grow-1">
                              Network Platform
                            </span>
                            <span className="svg-icon svg-icon-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.3"
                                  x={2}
                                  y={2}
                                  width={20}
                                  height={20}
                                  rx={10}
                                  fill="black"
                                />
                                <rect
                                  x={7}
                                  y="15.3137"
                                  width={12}
                                  height={2}
                                  rx={1}
                                  transform="rotate(-45 7 15.3137)"
                                  fill="black"
                                />
                                <rect
                                  x="8.41422"
                                  y={7}
                                  width={12}
                                  height={2}
                                  rx={1}
                                  transform="rotate(45 8.41422 7)"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="d-flex align-items-center">
                            <span className="fw-bold fs-5 text-muted flex-grow-1">
                              Unlimited Cloud Space
                            </span>
                            <span className="svg-icon svg-icon-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.3"
                                  x={2}
                                  y={2}
                                  width={20}
                                  height={20}
                                  rx={10}
                                  fill="black"
                                />
                                <rect
                                  x={7}
                                  y="15.3137"
                                  width={12}
                                  height={2}
                                  rx={1}
                                  transform="rotate(-45 7 15.3137)"
                                  fill="black"
                                />
                                <rect
                                  x="8.41422"
                                  y={7}
                                  width={12}
                                  height={2}
                                  rx={1}
                                  transform="rotate(45 8.41422 7)"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="kt_upgrade_plan_advanced"
                      >
                        <div className="pb-5">
                          <h2 className="fw-bolder text-dark">
                            What’s in Startup Plan?
                          </h2>
                          <div className="text-muted fw-bold">
                            Optimal for 100+ team size and grown company
                          </div>
                        </div>
                        <div className="pt-1">
                          <div className="d-flex align-items-center mb-7">
                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                              Up to 10 Active Users
                            </span>
                            <span className="svg-icon svg-icon-1 svg-icon-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.3"
                                  x={2}
                                  y={2}
                                  width={20}
                                  height={20}
                                  rx={10}
                                  fill="black"
                                />
                                <path
                                  d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="d-flex align-items-center mb-7">
                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                              Up to 30 Project Integrations
                            </span>
                            <span className="svg-icon svg-icon-1 svg-icon-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.3"
                                  x={2}
                                  y={2}
                                  width={20}
                                  height={20}
                                  rx={10}
                                  fill="black"
                                />
                                <path
                                  d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="d-flex align-items-center mb-7">
                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                              Analytics Module
                            </span>
                            <span className="svg-icon svg-icon-1 svg-icon-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.3"
                                  x={2}
                                  y={2}
                                  width={20}
                                  height={20}
                                  rx={10}
                                  fill="black"
                                />
                                <path
                                  d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="d-flex align-items-center mb-7">
                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                              Finance Module
                            </span>
                            <span className="svg-icon svg-icon-1 svg-icon-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.3"
                                  x={2}
                                  y={2}
                                  width={20}
                                  height={20}
                                  rx={10}
                                  fill="black"
                                />
                                <path
                                  d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="d-flex align-items-center mb-7">
                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                              Accounting Module
                            </span>
                            <span className="svg-icon svg-icon-1 svg-icon-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.3"
                                  x={2}
                                  y={2}
                                  width={20}
                                  height={20}
                                  rx={10}
                                  fill="black"
                                />
                                <path
                                  d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="d-flex align-items-center mb-7">
                            <span className="fw-bold fs-5 text-muted flex-grow-1">
                              Network Platform
                            </span>
                            <span className="svg-icon svg-icon-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.3"
                                  x={2}
                                  y={2}
                                  width={20}
                                  height={20}
                                  rx={10}
                                  fill="black"
                                />
                                <rect
                                  x={7}
                                  y="15.3137"
                                  width={12}
                                  height={2}
                                  rx={1}
                                  transform="rotate(-45 7 15.3137)"
                                  fill="black"
                                />
                                <rect
                                  x="8.41422"
                                  y={7}
                                  width={12}
                                  height={2}
                                  rx={1}
                                  transform="rotate(45 8.41422 7)"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="d-flex align-items-center">
                            <span className="fw-bold fs-5 text-muted flex-grow-1">
                              Unlimited Cloud Space
                            </span>
                            <span className="svg-icon svg-icon-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.3"
                                  x={2}
                                  y={2}
                                  width={20}
                                  height={20}
                                  rx={10}
                                  fill="black"
                                />
                                <rect
                                  x={7}
                                  y="15.3137"
                                  width={12}
                                  height={2}
                                  rx={1}
                                  transform="rotate(-45 7 15.3137)"
                                  fill="black"
                                />
                                <rect
                                  x="8.41422"
                                  y={7}
                                  width={12}
                                  height={2}
                                  rx={1}
                                  transform="rotate(45 8.41422 7)"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="kt_upgrade_plan_enterprise"
                      >
                        <div className="pb-5">
                          <h2 className="fw-bolder text-dark">
                            What’s in Startup Plan?
                          </h2>
                          <div className="text-muted fw-bold">
                            Optimal for 1000+ team and enterpise
                          </div>
                        </div>
                        <div className="pt-1">
                          <div className="d-flex align-items-center mb-7">
                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                              Up to 10 Active Users
                            </span>
                            <span className="svg-icon svg-icon-1 svg-icon-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.3"
                                  x={2}
                                  y={2}
                                  width={20}
                                  height={20}
                                  rx={10}
                                  fill="black"
                                />
                                <path
                                  d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="d-flex align-items-center mb-7">
                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                              Up to 30 Project Integrations
                            </span>
                            <span className="svg-icon svg-icon-1 svg-icon-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.3"
                                  x={2}
                                  y={2}
                                  width={20}
                                  height={20}
                                  rx={10}
                                  fill="black"
                                />
                                <path
                                  d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="d-flex align-items-center mb-7">
                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                              Analytics Module
                            </span>
                            <span className="svg-icon svg-icon-1 svg-icon-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.3"
                                  x={2}
                                  y={2}
                                  width={20}
                                  height={20}
                                  rx={10}
                                  fill="black"
                                />
                                <path
                                  d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="d-flex align-items-center mb-7">
                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                              Finance Module
                            </span>
                            <span className="svg-icon svg-icon-1 svg-icon-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.3"
                                  x={2}
                                  y={2}
                                  width={20}
                                  height={20}
                                  rx={10}
                                  fill="black"
                                />
                                <path
                                  d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="d-flex align-items-center mb-7">
                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                              Accounting Module
                            </span>
                            <span className="svg-icon svg-icon-1 svg-icon-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.3"
                                  x={2}
                                  y={2}
                                  width={20}
                                  height={20}
                                  rx={10}
                                  fill="black"
                                />
                                <path
                                  d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="d-flex align-items-center mb-7">
                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                              Network Platform
                            </span>
                            <span className="svg-icon svg-icon-1 svg-icon-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.3"
                                  x={2}
                                  y={2}
                                  width={20}
                                  height={20}
                                  rx={10}
                                  fill="black"
                                />
                                <path
                                  d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </div>
                          <div className="d-flex align-items-center">
                            <span className="fw-bold fs-5 text-gray-700 flex-grow-1">
                              Unlimited Cloud Space
                            </span>
                            <span className="svg-icon svg-icon-1 svg-icon-success">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <rect
                                  opacity="0.3"
                                  x={2}
                                  y={2}
                                  width={20}
                                  height={20}
                                  rx={10}
                                  fill="black"
                                />
                                <path
                                  d="M10.4343 12.4343L8.75 10.75C8.33579 10.3358 7.66421 10.3358 7.25 10.75C6.83579 11.1642 6.83579 11.8358 7.25 12.25L10.2929 15.2929C10.6834 15.6834 11.3166 15.6834 11.7071 15.2929L17.25 9.75C17.6642 9.33579 17.6642 8.66421 17.25 8.25C16.8358 7.83579 16.1642 7.83579 15.75 8.25L11.5657 12.4343C11.2533 12.7467 10.7467 12.7467 10.4343 12.4343Z"
                                  fill="black"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-center flex-row-fluid pt-12">
                <button
                  type="reset"
                  className="btn btn-light me-3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  Upgrade Plan
                </button>
              </div>
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
    </>
  );
};

export default Projects;
