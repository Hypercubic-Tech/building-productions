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
            <div className="d-flex flex-column flex-center w-100 min-h-350px min-h-lg-500px px-9">
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
                    <span id="kt_landing_hero_text">
                      სარემონტო ხარჯთაღრიცხვა!
                    </span>
                  </span>
                </h1>
                <a
                  href="#"
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
                </a>
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
                                  <h3 className="stepper-title georgian">
                                    კატეგორია
                                  </h3>
                                  <div className="stepper-desc georgian">
                                    ობიექტის აღწერა
                                  </div>
                                </div>
                              </div>
                              <div
                                className="stepper-item"
                                data-kt-stepper-element="nav"
                              >
                                <div className="stepper-line w-40px" />
                                <div className="stepper-icon w-40px h-40px">
                                  <i className="stepper-check fas fa-check" />
                                  <span className="stepper-number">2</span>
                                </div>
                                <div className="stepper-label">
                                  <h3 className="stepper-title georgian">
                                    მდგომარეობა
                                  </h3>
                                  <div className="stepper-desc georgian">
                                    სამუშაოს განსაზღვრება
                                  </div>
                                </div>
                              </div>
                              <div
                                className="stepper-item"
                                data-kt-stepper-element="nav"
                              >
                                <div className="stepper-line w-40px" />
                                <div className="stepper-icon w-40px h-40px">
                                  <i className="stepper-check fas fa-check" />
                                  <span className="stepper-number">3</span>
                                </div>
                                <div className="stepper-label">
                                  <h3 className="stepper-title georgian">
                                    სამუშაოები
                                  </h3>
                                  <div className="stepper-desc georgian">
                                    შესასრულებელი სამუშაო
                                  </div>
                                </div>
                              </div>
                              <div
                                className="stepper-item"
                                data-kt-stepper-element="nav"
                              >
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
                              <div
                                className="stepper-item"
                                data-kt-stepper-element="nav"
                              >
                                <div className="stepper-line w-40px" />
                                <div className="stepper-icon w-40px h-40px">
                                  <i className="stepper-check fas fa-check" />
                                  <span className="stepper-number">5</span>
                                </div>
                                <div className="stepper-label">
                                  <h3 className="stepper-title">Completed</h3>
                                  <div className="stepper-desc">
                                    Review and Submit
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-row-fluid py-lg-5 px-lg-15">
                            <form
                              className="form"
                              noValidate="novalidate"
                              id=""
                            >
                              <div
                                className="current"
                                data-kt-stepper-element="content"
                              >
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
                                      <option value={3}>
                                        კომერციული ფართი
                                      </option>
                                      <option value={4}>სასტუმრო</option>
                                    </select>
                                    <div className="col-6">
                                      <select
                                        name="card_expiry_month"
                                        className="form-select form-select-solid select2-hidden-accessible"
                                        data-control="select2"
                                        data-hide-search="true"
                                        data-placeholder="Month"
                                        data-select2-id="select2-data-64-5t42"
                                        tabIndex={-1}
                                        aria-hidden="true"
                                      >
                                        <option data-select2-id="select2-data-66-3x5f" />
                                        <option
                                          value={1}
                                          data-select2-id="select2-data-107-2ghu"
                                        >
                                          1
                                        </option>
                                        <option
                                          value={2}
                                          data-select2-id="select2-data-108-rwew"
                                        >
                                          2
                                        </option>
                                        <option
                                          value={3}
                                          data-select2-id="select2-data-109-i5sv"
                                        >
                                          3
                                        </option>
                                        <option
                                          value={4}
                                          data-select2-id="select2-data-110-jith"
                                        >
                                          4
                                        </option>
                                        <option
                                          value={5}
                                          data-select2-id="select2-data-111-xl2a"
                                        >
                                          5
                                        </option>
                                        <option
                                          value={6}
                                          data-select2-id="select2-data-112-kstu"
                                        >
                                          6
                                        </option>
                                        <option
                                          value={7}
                                          data-select2-id="select2-data-113-s8qs"
                                        >
                                          7
                                        </option>
                                        <option
                                          value={8}
                                          data-select2-id="select2-data-114-hkfn"
                                        >
                                          8
                                        </option>
                                        <option
                                          value={9}
                                          data-select2-id="select2-data-115-ort0"
                                        >
                                          9
                                        </option>
                                        <option
                                          value={10}
                                          data-select2-id="select2-data-116-yumq"
                                        >
                                          10
                                        </option>
                                        <option
                                          value={11}
                                          data-select2-id="select2-data-117-u6n2"
                                        >
                                          11
                                        </option>
                                        <option
                                          value={12}
                                          data-select2-id="select2-data-118-rgru"
                                        >
                                          12
                                        </option>
                                      </select>
                                      <span
                                        className="select2 select2-container select2-container--bootstrap5 select2-container--below"
                                        dir="ltr"
                                        data-select2-id="select2-data-65-9bfq"
                                        style={{ width: "100%" }}
                                      >
                                        <span className="selection">
                                          <span
                                            className="select2-selection select2-selection--single form-select form-select-solid"
                                            role="combobox"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                            tabIndex={0}
                                            aria-disabled="false"
                                            aria-labelledby="select2-card_expiry_month-ri-container"
                                            aria-controls="select2-card_expiry_month-ri-container"
                                          >
                                            <span
                                              className="select2-selection__rendered"
                                              id="select2-card_expiry_month-ri-container"
                                              role="textbox"
                                              aria-readonly="true"
                                              title={1}
                                            >
                                              1
                                            </span>
                                            <span
                                              className="select2-selection__arrow"
                                              role="presentation"
                                            >
                                              <b role="presentation" />
                                            </span>
                                          </span>
                                        </span>
                                        <span
                                          className="dropdown-wrapper"
                                          aria-hidden="true"
                                        />
                                      </span>
                                      <div className="fv-plugins-message-container invalid-feedback" />
                                    </div>
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
                                            <option value={5}>
                                              აბასთუმანი
                                            </option>
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
                                            <option value={1}>
                                              გლდანის რაიონი
                                            </option>
                                            <option value={2}>
                                              დიდუბის რაიონი
                                            </option>
                                            <option value={3}>
                                              ვაკის რაიონი
                                            </option>
                                            <option value={4}>
                                              საურთალოს რაიონი
                                            </option>
                                            <option value={5}>
                                              მთაწმინდის რაიონი
                                            </option>
                                            <option value={6}>
                                              ჩუღურეთის რაიონი
                                            </option>
                                            <option value={7}>
                                              თბილისის შემოგარენი
                                            </option>
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
                                              Creating a clear text structure is
                                              just one SEO
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
                                              Creating a clear text structure is
                                              just one aspect
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
                                      <span className="required">
                                        Name On Card
                                      </span>
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
                                              <path
                                                d="M22 7H2V11H22V7Z"
                                                fill="black"
                                              />
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
                                        If you need more info, please check
                                        budget planning
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
                                  <h1 className="fw-bolder text-dark mb-3">
                                    Release!
                                  </h1>
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
                                    უკან
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
              </div>
              <div className="d-flex flex-center flex-wrap position-relative px-5">
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
              </div>
            </div>
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
        <div className="mb-n10 mb-lg-n20 z-index-2">
          <div className="container">
            <div className="text-center mb-17">
              <h3
                className="fs-2hx text-dark mb-5 georgian"
                id="how-it-works"
                data-kt-scroll-offset="{default: 100, lg: 150}"
              >
                როგორ მუშაობს?
              </h3>
              <div className="fs-5 text-muted fw-bold georgian">
                თუ თქვენ თავად აპირებთ გაუძღვეთ რემონტს
                <br />
                მაშინ ჩვენი პროგრამა თქვენთვის ნამდვილი აღმოჩენაა
              </div>
            </div>
            <div className="row w-100 gy-10 mb-md-20">
              <div className="col-md-4 px-5">
                <div className="text-center mb-10 mb-md-0">
                  <img
                    src="assets/media/illustrations/sketchy-1/2.png"
                    className="mh-125px mb-9"
                    alt=""
                  />
                  <div className="d-flex flex-center mb-5">
                    <span className="badge badge-circle badge-light-success fw-bolder p-5 me-3 fs-3">
                      1
                    </span>
                    <div className="fs-5 fs-lg-3 fw-bolder text-dark georgian">
                      გაიერეთ რეგისტრაცია
                    </div>
                  </div>
                  <div className="fw-bold fs-6 fs-lg-4 text-muted">
                    Save thousands to millions of bucks
                    <br />
                    by using single tool for different
                    <br />
                    amazing and great
                  </div>
                </div>
              </div>
              <div className="col-md-4 px-5">
                <div className="text-center mb-10 mb-md-0">
                  <img
                    src="assets/media/illustrations/sketchy-1/8.png"
                    className="mh-125px mb-9"
                    alt=""
                  />
                  <div className="d-flex flex-center mb-5">
                    <span className="badge badge-circle badge-light-success fw-bolder p-5 me-3 fs-3">
                      2
                    </span>
                    <div className="fs-5 fs-lg-3 fw-bolder text-dark georgian">
                      აირჩიეთ სამუშაოები
                    </div>
                  </div>
                  <div className="fw-bold fs-6 fs-lg-4 text-muted">
                    Save thousands to millions of bucks
                    <br />
                    by using single tool for different
                    <br />
                    amazing and great
                  </div>
                </div>
              </div>
              <div className="col-md-4 px-5">
                <div className="text-center mb-10 mb-md-0">
                  <img
                    src="assets/media/illustrations/sketchy-1/12.png"
                    className="mh-125px mb-9"
                    alt=""
                  />
                  <div className="d-flex flex-center mb-5">
                    <span className="badge badge-circle badge-light-success fw-bolder p-5 me-3 fs-3">
                      3
                    </span>
                    <div className="fs-5 fs-lg-3 fw-bolder text-dark georgian">
                      საიწყე დათვლა
                    </div>
                  </div>
                  <div className="fw-bold fs-6 fs-lg-4 text-muted">
                    Save thousands to millions of bucks
                    <br />
                    by using single tool for different
                    <br />
                    amazing and great
                  </div>
                </div>
              </div>
            </div>
            <div className="tns tns-default">
              <div
                data-tns="true"
                data-tns-loop="true"
                data-tns-swipe-angle="false"
                data-tns-speed={2000}
                data-tns-autoplay="true"
                data-tns-autoplay-timeout={18000}
                data-tns-controls="true"
                data-tns-nav="false"
                data-tns-items={1}
                data-tns-center="false"
                data-tns-dots="false"
                data-tns-prev-button="#kt_team_slider_prev1"
                data-tns-next-button="#kt_team_slider_next1"
              >
                <div className="text-center px-5 pt-5 pt-lg-10 px-lg-10">
                  <img
                    src="assets/media/product-demos/demo1.png"
                    className="card-rounded shadow mw-100"
                    alt=""
                  />
                </div>
                <div className="text-center px-5 pt-5 pt-lg-10 px-lg-10">
                  <img
                    src="assets/media/product-demos/demo2.png"
                    className="card-rounded shadow mw-100"
                    alt=""
                  />
                </div>
                <div className="text-center px-5 pt-5 pt-lg-10 px-lg-10">
                  <img
                    src="assets/media/product-demos/demo4.png"
                    className="card-rounded shadow mw-100"
                    alt=""
                  />
                </div>
                <div className="text-center px-5 pt-5 pt-lg-10 px-lg-10">
                  <img
                    src="assets/media/product-demos/demo5.png"
                    className="card-rounded shadow mw-100"
                    alt=""
                  />
                </div>
              </div>
              <button
                className="btn btn-icon btn-active-color-primary"
                id="kt_team_slider_prev1"
              >
                <span className="svg-icon svg-icon-3x">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11.2657 11.4343L15.45 7.25C15.8642 6.83579 15.8642 6.16421 15.45 5.75C15.0358 5.33579 14.3642 5.33579 13.95 5.75L8.40712 11.2929C8.01659 11.6834 8.01659 12.3166 8.40712 12.7071L13.95 18.25C14.3642 18.6642 15.0358 18.6642 15.45 18.25C15.8642 17.8358 15.8642 17.1642 15.45 16.75L11.2657 12.5657C10.9533 12.2533 10.9533 11.7467 11.2657 11.4343Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </button>
              <button
                className="btn btn-icon btn-active-color-primary"
                id="kt_team_slider_next1"
              >
                <span className="svg-icon svg-icon-3x">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
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
          <div className="pb-15 pt-18 landing-dark-bg">
            <div className="container">
              <div
                className="text-center mt-15 mb-18"
                id="achievements"
                data-kt-scroll-offset="{default: 100, lg: 150}"
              >
                <h3 className="fs-2hx text-white fw-bolder mb-5 georgian">
                  კომპანიის შესახებ
                </h3>
                <div className="fs-5 text-gray-700 fw-bold georgian">
                  კომპანია „ReCounter“ დაარსდა 2022 წელს და პირველად
                  საქართველოში
                  <br />
                  შესაძლებელი გავხადეთ მიიღოთ მაქსიმალურად ზუსტი სარემონტო
                  ხარჯთაღრიცხა <br />
                  ჩვენი პლატფორმის დახმარებით.
                </div>
              </div>
              <div className="d-flex flex-center">
                <div className="d-flex flex-wrap flex-center justify-content-lg-between mb-15 mx-auto w-xl-900px">
                  <div
                    className="d-flex flex-column flex-center h-200px w-200px h-lg-250px w-lg-250px m-3 bgi-no-repeat bgi-position-center bgi-size-contain"
                    style={{
                      backgroundImage:
                        'url("assets/media/svg/misc/octagon.svg")',
                    }}
                  >
                    <span className="svg-icon svg-icon-2tx svg-icon-white mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <rect
                          x={2}
                          y={2}
                          width={9}
                          height={9}
                          rx={2}
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x={13}
                          y={2}
                          width={9}
                          height={9}
                          rx={2}
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x={13}
                          y={13}
                          width={9}
                          height={9}
                          rx={2}
                          fill="black"
                        />
                        <rect
                          opacity="0.3"
                          x={2}
                          y={13}
                          width={9}
                          height={9}
                          rx={2}
                          fill="black"
                        />
                      </svg>
                    </span>
                    <div className="mb-0">
                      <div className="fs-lg-2hx fs-2x fw-bolder text-white d-flex flex-center">
                        <div
                          className="min-w-70px"
                          data-kt-countup="true"
                          data-kt-countup-value={700}
                          data-kt-countup-suffix="+"
                        >
                          0
                        </div>
                      </div>
                      <span className="text-gray-600 fw-bold fs-5 lh-0">
                        Known Companies
                      </span>
                    </div>
                  </div>
                  <div
                    className="d-flex flex-column flex-center h-200px w-200px h-lg-250px w-lg-250px m-3 bgi-no-repeat bgi-position-center bgi-size-contain"
                    style={{
                      backgroundImage:
                        'url("assets/media/svg/misc/octagon.svg")',
                    }}
                  >
                    <span className="svg-icon svg-icon-2tx svg-icon-white mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M13 10.9128V3.01281C13 2.41281 13.5 1.91281 14.1 2.01281C16.1 2.21281 17.9 3.11284 19.3 4.61284C20.7 6.01284 21.6 7.91285 21.9 9.81285C22 10.4129 21.5 10.9128 20.9 10.9128H13Z"
                          fill="black"
                        />
                        <path
                          opacity="0.3"
                          d="M13 12.9128V20.8129C13 21.4129 13.5 21.9129 14.1 21.8129C16.1 21.6129 17.9 20.7128 19.3 19.2128C20.7 17.8128 21.6 15.9128 21.9 14.0128C22 13.4128 21.5 12.9128 20.9 12.9128H13Z"
                          fill="black"
                        />
                        <path
                          opacity="0.3"
                          d="M11 19.8129C11 20.4129 10.5 20.9129 9.89999 20.8129C5.49999 20.2129 2 16.5128 2 11.9128C2 7.31283 5.39999 3.51281 9.89999 3.01281C10.5 2.91281 11 3.41281 11 4.01281V19.8129Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                    <div className="mb-0">
                      <div className="fs-lg-2hx fs-2x fw-bolder text-white d-flex flex-center">
                        <div
                          className="min-w-70px"
                          data-kt-countup="true"
                          data-kt-countup-value={80}
                          data-kt-countup-suffix="K+"
                        >
                          0
                        </div>
                      </div>
                      <span className="text-gray-600 fw-bold fs-5 lh-0">
                        Statistic Reports
                      </span>
                    </div>
                  </div>
                  <div
                    className="d-flex flex-column flex-center h-200px w-200px h-lg-250px w-lg-250px m-3 bgi-no-repeat bgi-position-center bgi-size-contain"
                    style={{
                      backgroundImage:
                        'url("assets/media/svg/misc/octagon.svg")',
                    }}
                  >
                    <span className="svg-icon svg-icon-2tx svg-icon-white mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z"
                          fill="black"
                        />
                        <path
                          opacity="0.3"
                          d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z"
                          fill="black"
                        />
                        <path
                          opacity="0.3"
                          d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                    <div className="mb-0">
                      <div className="fs-lg-2hx fs-2x fw-bolder text-white d-flex flex-center">
                        <div
                          className="min-w-70px"
                          data-kt-countup="true"
                          data-kt-countup-value={35}
                          data-kt-countup-suffix="M+"
                        >
                          0
                        </div>
                      </div>
                      <span className="text-gray-600 fw-bold fs-5 lh-0">
                        Secure Payments
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fs-2 fw-bold text-muted text-center mb-3 georgian">
                <span className="fs-1 lh-1 text-gray-700 ">“</span>ჩვენი
                პლატფორმის გამოყენების შედეგად თქვენ მიიღებთ:
                <br />
                <span className="text-gray-700 me-1 georgian">
                  სწორი რიგითობით გაწერილ, დეტალურად ჩაშლილ,{" "}
                </span>{" "}
                საბაზრო ფასებზე ან/და თქვენივე სურვილისამებრ მითითებული
                ღირებულებაზე დაყრდნობით დათვლილ სარემონტო ხარჯთაღრიცხვას.
              </div>
              <div className="fs-2 fw-bold text-muted text-center">
                <a
                  href="../../demo11/dist/account/security.html"
                  className="link-primary fs-4 fw-bolder"
                >
                  ReCounter.Ge
                </a>
              </div>
            </div>
          </div>
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
        <div className="py-10 py-lg-20">
          <div className="container">
            <div className="text-center mb-12">
              <h3
                className="fs-2hx text-dark mb-5"
                id="team"
                data-kt-scroll-offset="{default: 100, lg: 150}"
              >
                Our Great Team
              </h3>
              <div className="fs-5 text-muted fw-bold">
                It’s no doubt that when a development takes longer to complete,
                additional costs to
                <br />
                integrate and test each extra feature creeps up and haunts most
                of us.
              </div>
            </div>
            <div className="tns tns-default">
              <div
                data-tns="true"
                data-tns-loop="true"
                data-tns-swipe-angle="false"
                data-tns-speed={2000}
                data-tns-autoplay="true"
                data-tns-autoplay-timeout={18000}
                data-tns-controls="true"
                data-tns-nav="false"
                data-tns-items={1}
                data-tns-center="false"
                data-tns-dots="false"
                data-tns-prev-button="#kt_team_slider_prev"
                data-tns-next-button="#kt_team_slider_next"
                data-tns-responsive="{1200: {items: 3}, 992: {items: 2}}"
              >
                <div className="text-center">
                  <div
                    className="octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center"
                    style={{
                      backgroundImage: 'url("assets/media/avatars/150-2.jpg")',
                    }}
                  />
                  <div className="mb-0">
                    <a
                      href="#"
                      className="text-dark fw-bolder text-hover-primary fs-3"
                    >
                      Paul Miles
                    </a>
                    <div className="text-muted fs-6 fw-bold mt-1">
                      Development Lead
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className="octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center"
                    style={{
                      backgroundImage: 'url("assets/media/avatars/150-3.jpg")',
                    }}
                  />
                  <div className="mb-0">
                    <a
                      href="#"
                      className="text-dark fw-bolder text-hover-primary fs-3"
                    >
                      Melisa Marcus
                    </a>
                    <div className="text-muted fs-6 fw-bold mt-1">
                      Creative Director
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className="octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center"
                    style={{
                      backgroundImage: 'url("assets/media/avatars/150-4.jpg")',
                    }}
                  />
                  <div className="mb-0">
                    <a
                      href="#"
                      className="text-dark fw-bolder text-hover-primary fs-3"
                    >
                      David Nilson
                    </a>
                    <div className="text-muted fs-6 fw-bold mt-1">
                      Python Expert
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className="octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center"
                    style={{
                      backgroundImage: 'url("assets/media/avatars/150-5.jpg")',
                    }}
                  />
                  <div className="mb-0">
                    <a
                      href="#"
                      className="text-dark fw-bolder text-hover-primary fs-3"
                    >
                      Anne Clarc
                    </a>
                    <div className="text-muted fs-6 fw-bold mt-1">
                      Project Manager
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className="octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center"
                    style={{
                      backgroundImage: 'url("assets/media/avatars/150-6.jpg")',
                    }}
                  />
                  <div className="mb-0">
                    <a
                      href="#"
                      className="text-dark fw-bolder text-hover-primary fs-3"
                    >
                      Ricky Hunt
                    </a>
                    <div className="text-muted fs-6 fw-bold mt-1">
                      Art Director
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className="octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center"
                    style={{
                      backgroundImage: 'url("assets/media/avatars/150-7.jpg")',
                    }}
                  />
                  <div className="mb-0">
                    <a
                      href="#"
                      className="text-dark fw-bolder text-hover-primary fs-3"
                    >
                      Alice Wayde
                    </a>
                    <div className="text-muted fs-6 fw-bold mt-1">
                      Marketing Manager
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className="octagon mx-auto mb-5 d-flex w-200px h-200px bgi-no-repeat bgi-size-contain bgi-position-center"
                    style={{
                      backgroundImage: 'url("assets/media/avatars/150-8.jpg")',
                    }}
                  />
                  <div className="mb-0">
                    <a
                      href="#"
                      className="text-dark fw-bolder text-hover-primary fs-3"
                    >
                      Carles Puyol
                    </a>
                    <div className="text-muted fs-6 fw-bold mt-1">
                      QA Managers
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="btn btn-icon btn-active-color-primary"
                id="kt_team_slider_prev"
              >
                <span className="svg-icon svg-icon-3x">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M11.2657 11.4343L15.45 7.25C15.8642 6.83579 15.8642 6.16421 15.45 5.75C15.0358 5.33579 14.3642 5.33579 13.95 5.75L8.40712 11.2929C8.01659 11.6834 8.01659 12.3166 8.40712 12.7071L13.95 18.25C14.3642 18.6642 15.0358 18.6642 15.45 18.25C15.8642 17.8358 15.8642 17.1642 15.45 16.75L11.2657 12.5657C10.9533 12.2533 10.9533 11.7467 11.2657 11.4343Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </button>
              <button
                className="btn btn-icon btn-active-color-primary"
                id="kt_team_slider_next"
              >
                <span className="svg-icon svg-icon-3x">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z"
                      fill="black"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="mb-lg-n15 position-relative z-index-2">
          <div className="container">
            <div
              className="card"
              style={{
                filter: "drop-shadow(0px 0px 40px rgba(68, 81, 96, 0.08))",
              }}
            >
              <div className="card-body p-lg-20">
                <div className="text-center mb-5 mb-lg-10">
                  <h3
                    className="fs-2hx text-dark mb-5"
                    id="portfolio"
                    data-kt-scroll-offset="{default: 100, lg: 150}"
                  >
                    Our Projects
                  </h3>
                </div>
                <div className="d-flex flex-center mb-5 mb-lg-15">
                  <ul className="nav border-transparent flex-center fs-5 fw-bold">
                    <li className="nav-item">
                      <a
                        className="nav-link text-gray-500 text-active-primary px-3 px-lg-6 active"
                        href="#"
                        data-bs-toggle="tab"
                        data-bs-target="#kt_landing_projects_latest"
                      >
                        Latest
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link text-gray-500 text-active-primary px-3 px-lg-6"
                        href="#"
                        data-bs-toggle="tab"
                        data-bs-target="#kt_landing_projects_web_design"
                      >
                        Web Design
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link text-gray-500 text-active-primary px-3 px-lg-6"
                        href="#"
                        data-bs-toggle="tab"
                        data-bs-target="#kt_landing_projects_mobile_apps"
                      >
                        Mobile Apps
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link text-gray-500 text-active-primary px-3 px-lg-6"
                        href="#"
                        data-bs-toggle="tab"
                        data-bs-target="#kt_landing_projects_development"
                      >
                        Development
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="tab-content">
                  <div
                    className="tab-pane fade show active"
                    id="kt_landing_projects_latest"
                  >
                    <div className="row g-10">
                      <div className="col-lg-6">
                        <a
                          className="d-block card-rounded overlay h-lg-100"
                          data-fslightbox="lightbox-projects"
                          href="assets/media/stock/600x600/img-23.jpg"
                        >
                          <div
                            className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px"
                            style={{
                              backgroundImage:
                                'url("assets/media/stock/600x600/img-23.jpg")',
                            }}
                          />
                          <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                            <i className="bi bi-eye-fill fs-3x text-white" />
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-6">
                        <div className="row g-10 mb-10">
                          <div className="col-lg-6">
                            <a
                              className="d-block card-rounded overlay"
                              data-fslightbox="lightbox-projects"
                              href="assets/media/stock/600x600/img-22.jpg"
                            >
                              <div
                                className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                                style={{
                                  backgroundImage:
                                    'url("assets/media/stock/600x600/img-22.jpg")',
                                }}
                              />
                              <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                                <i className="bi bi-eye-fill fs-3x text-white" />
                              </div>
                            </a>
                          </div>
                          <div className="col-lg-6">
                            <a
                              className="d-block card-rounded overlay"
                              data-fslightbox="lightbox-projects"
                              href="assets/media/stock/600x600/img-21.jpg"
                            >
                              <div
                                className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                                style={{
                                  backgroundImage:
                                    'url("assets/media/stock/600x600/img-21.jpg")',
                                }}
                              />
                              <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                                <i className="bi bi-eye-fill fs-3x text-white" />
                              </div>
                            </a>
                          </div>
                        </div>
                        <a
                          className="d-block card-rounded overlay"
                          data-fslightbox="lightbox-projects"
                          href="assets/media/stock/600x400/img-20.jpg"
                        >
                          <div
                            className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                            style={{
                              backgroundImage:
                                'url("assets/media/stock/600x600/img-20.jpg")',
                            }}
                          />
                          <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                            <i className="bi bi-eye-fill fs-3x text-white" />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="kt_landing_projects_web_design"
                  >
                    <div className="row g-10">
                      <div className="col-lg-6">
                        <a
                          className="d-block card-rounded overlay h-lg-100"
                          data-fslightbox="lightbox-projects"
                          href="assets/media/stock/600x600/img-11.jpg"
                        >
                          <div
                            className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px"
                            style={{
                              backgroundImage:
                                'url("assets/media/stock/600x600/img-11.jpg")',
                            }}
                          />
                          <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                            <i className="bi bi-eye-fill fs-3x text-white" />
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-6">
                        <div className="row g-10 mb-10">
                          <div className="col-lg-6">
                            <a
                              className="d-block card-rounded overlay"
                              data-fslightbox="lightbox-projects"
                              href="assets/media/stock/600x600/img-12.jpg"
                            >
                              <div
                                className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                                style={{
                                  backgroundImage:
                                    'url("assets/media/stock/600x600/img-12.jpg")',
                                }}
                              />
                              <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                                <i className="bi bi-eye-fill fs-3x text-white" />
                              </div>
                            </a>
                          </div>
                          <div className="col-lg-6">
                            <a
                              className="d-block card-rounded overlay"
                              data-fslightbox="lightbox-projects"
                              href="assets/media/stock/600x600/img-21.jpg"
                            >
                              <div
                                className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                                style={{
                                  backgroundImage:
                                    'url("assets/media/stock/600x600/img-21.jpg")',
                                }}
                              />
                              <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                                <i className="bi bi-eye-fill fs-3x text-white" />
                              </div>
                            </a>
                          </div>
                        </div>
                        <a
                          className="d-block card-rounded overlay"
                          data-fslightbox="lightbox-projects"
                          href="assets/media/stock/600x400/img-20.jpg"
                        >
                          <div
                            className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                            style={{
                              backgroundImage:
                                'url("assets/media/stock/600x600/img-20.jpg")',
                            }}
                          />
                          <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                            <i className="bi bi-eye-fill fs-3x text-white" />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="kt_landing_projects_mobile_apps"
                  >
                    <div className="row g-10">
                      <div className="col-lg-6">
                        <div className="row g-10 mb-10">
                          <div className="col-lg-6">
                            <a
                              className="d-block card-rounded overlay"
                              data-fslightbox="lightbox-projects"
                              href="assets/media/stock/600x600/img-16.jpg"
                            >
                              <div
                                className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                                style={{
                                  backgroundImage:
                                    'url("assets/media/stock/600x600/img-16.jpg")',
                                }}
                              />
                              <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                                <i className="bi bi-eye-fill fs-3x text-white" />
                              </div>
                            </a>
                          </div>
                          <div className="col-lg-6">
                            <a
                              className="d-block card-rounded overlay"
                              data-fslightbox="lightbox-projects"
                              href="assets/media/stock/600x600/img-12.jpg"
                            >
                              <div
                                className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                                style={{
                                  backgroundImage:
                                    'url("assets/media/stock/600x600/img-12.jpg")',
                                }}
                              />
                              <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                                <i className="bi bi-eye-fill fs-3x text-white" />
                              </div>
                            </a>
                          </div>
                        </div>
                        <a
                          className="d-block card-rounded overlay"
                          data-fslightbox="lightbox-projects"
                          href="assets/media/stock/600x400/img-15.jpg"
                        >
                          <div
                            className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                            style={{
                              backgroundImage:
                                'url("assets/media/stock/600x600/img-15.jpg")',
                            }}
                          />
                          <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                            <i className="bi bi-eye-fill fs-3x text-white" />
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-6">
                        <a
                          className="d-block card-rounded overlay h-lg-100"
                          data-fslightbox="lightbox-projects"
                          href="assets/media/stock/600x600/img-23.jpg"
                        >
                          <div
                            className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px"
                            style={{
                              backgroundImage:
                                'url("assets/media/stock/600x600/img-23.jpg")',
                            }}
                          />
                          <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                            <i className="bi bi-eye-fill fs-3x text-white" />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="kt_landing_projects_development"
                  >
                    <div className="row g-10">
                      <div className="col-lg-6">
                        <a
                          className="d-block card-rounded overlay h-lg-100"
                          data-fslightbox="lightbox-projects"
                          href="assets/media/stock/600x600/img-15.jpg"
                        >
                          <div
                            className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-lg-100 min-h-250px"
                            style={{
                              backgroundImage:
                                'url("assets/media/stock/600x600/img-15.jpg")',
                            }}
                          />
                          <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                            <i className="bi bi-eye-fill fs-3x text-white" />
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-6">
                        <div className="row g-10 mb-10">
                          <div className="col-lg-6">
                            <a
                              className="d-block card-rounded overlay"
                              data-fslightbox="lightbox-projects"
                              href="assets/media/stock/600x600/img-22.jpg"
                            >
                              <div
                                className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                                style={{
                                  backgroundImage:
                                    'url("assets/media/stock/600x600/img-22.jpg")',
                                }}
                              />
                              <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                                <i className="bi bi-eye-fill fs-3x text-white" />
                              </div>
                            </a>
                          </div>
                          <div className="col-lg-6">
                            <a
                              className="d-block card-rounded overlay"
                              data-fslightbox="lightbox-projects"
                              href="assets/media/stock/600x600/img-21.jpg"
                            >
                              <div
                                className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                                style={{
                                  backgroundImage:
                                    'url("assets/media/stock/600x600/img-21.jpg")',
                                }}
                              />
                              <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                                <i className="bi bi-eye-fill fs-3x text-white" />
                              </div>
                            </a>
                          </div>
                        </div>
                        <a
                          className="d-block card-rounded overlay"
                          data-fslightbox="lightbox-projects"
                          href="assets/media/stock/600x400/img-14.jpg"
                        >
                          <div
                            className="overlay-wrapper bgi-no-repeat bgi-position-center bgi-size-cover card-rounded h-250px"
                            style={{
                              backgroundImage:
                                'url("assets/media/stock/600x600/img-14.jpg")',
                            }}
                          />
                          <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                            <i className="bi bi-eye-fill fs-3x text-white" />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-sm-n20">
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
          <div className="py-20 landing-dark-bg">
            <div className="container">
              <div className="d-flex flex-column container pt-lg-20">
                <div className="mb-13 text-center">
                  <h1
                    className="fs-2hx fw-bolder text-white mb-5"
                    id="pricing"
                    data-kt-scroll-offset="{default: 100, lg: 150}"
                  >
                    Clear Pricing Makes it Easy
                  </h1>
                  <div className="text-gray-600 fw-bold fs-5">
                    Save thousands to millions of bucks by using single tool for
                    different
                    <br />
                    amazing and outstanding cool and great useful admin
                  </div>
                </div>
                <div className="text-center" id="kt_pricing">
                  <div
                    className="nav-group landing-dark-bg d-inline-flex mb-15"
                    data-kt-buttons="true"
                    style={{ border: "1px dashed #2B4666" }}
                  >
                    <a
                      href="#"
                      className="btn btn-color-gray-600 btn-active btn-active-success px-6 py-3 me-2 active"
                      data-kt-plan="month"
                    >
                      Monthly
                    </a>
                    <a
                      href="#"
                      className="btn btn-color-gray-600 btn-active btn-active-success px-6 py-3"
                      data-kt-plan="annual"
                    >
                      Annual
                    </a>
                  </div>
                  <div className="row g-10">
                    <div className="col-xl-4">
                      <div className="d-flex h-100 align-items-center">
                        <div className="w-100 d-flex flex-column flex-center rounded-3 bg-body py-15 px-10">
                          <div className="mb-7 text-center">
                            <h1 className="text-dark mb-5 fw-boldest">
                              Startup
                            </h1>
                            <div className="text-gray-400 fw-bold mb-5">
                              Best Settings for Startups
                            </div>
                            <div className="text-center">
                              <span className="mb-2 text-primary">$</span>
                              <span
                                className="fs-3x fw-bolder text-primary"
                                data-kt-plan-price-month={99}
                                data-kt-plan-price-annual={999}
                              >
                                99
                              </span>
                              <span
                                className="fs-7 fw-bold opacity-50"
                                data-kt-plan-price-month="Mon"
                                data-kt-plan-price-annual="Ann"
                              >
                                / Mon
                              </span>
                            </div>
                          </div>
                          <div className="w-100 mb-10">
                            <div className="d-flex flex-stack mb-5">
                              <span className="fw-bold fs-6 text-gray-800 text-start pe-3">
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
                            <div className="d-flex flex-stack mb-5">
                              <span className="fw-bold fs-6 text-gray-800 text-start pe-3">
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
                            <div className="d-flex flex-stack mb-5">
                              <span className="fw-bold fs-6 text-gray-800">
                                Keen Analytics Platform
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
                            <div className="d-flex flex-stack mb-5">
                              <span className="fw-bold fs-6 text-gray-800">
                                Targets Timelines &amp; Files
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
                            <div className="d-flex flex-stack">
                              <span className="fw-bold fs-6 text-gray-800">
                                Unlimited Projects
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
                          <a href="#" className="btn btn-primary">
                            Select
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <div className="d-flex h-100 align-items-center">
                        <div className="w-100 d-flex flex-column flex-center rounded-3 bg-primary py-20 px-10">
                          <div className="mb-7 text-center">
                            <h1 className="text-white mb-5 fw-boldest">
                              Business
                            </h1>
                            <div className="text-white opacity-75 fw-bold mb-5">
                              Best Settings for Business
                            </div>
                            <div className="text-center">
                              <span className="mb-2 text-white">$</span>
                              <span
                                className="fs-3x fw-bolder text-white"
                                data-kt-plan-price-month={199}
                                data-kt-plan-price-annual={1999}
                              >
                                199
                              </span>
                              <span
                                className="fs-7 fw-bold text-white opacity-75"
                                data-kt-plan-price-month="Mon"
                                data-kt-plan-price-annual="Ann"
                              >
                                / Mon
                              </span>
                            </div>
                          </div>
                          <div className="w-100 mb-10">
                            <div className="d-flex flex-stack mb-5">
                              <span className="fw-bold fs-6 text-white opacity-75 text-start pe-3">
                                Up to 10 Active Users
                              </span>
                              <span className="svg-icon svg-icon-1 svg-icon-white">
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
                            <div className="d-flex flex-stack mb-5">
                              <span className="fw-bold fs-6 text-white opacity-75 text-start pe-3">
                                Up to 30 Project Integrations
                              </span>
                              <span className="svg-icon svg-icon-1 svg-icon-white">
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
                            <div className="d-flex flex-stack mb-5">
                              <span className="fw-bold fs-6 text-white opacity-75 text-start pe-3">
                                Keen Analytics Platform
                              </span>
                              <span className="svg-icon svg-icon-1 svg-icon-white">
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
                            <div className="d-flex flex-stack mb-5">
                              <span className="fw-bold fs-6 text-white opacity-75 text-start pe-3">
                                Targets Timelines &amp; Files
                              </span>
                              <span className="svg-icon svg-icon-1 svg-icon-white">
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
                            <div className="d-flex flex-stack">
                              <span className="fw-bold fs-6 text-white opacity-75">
                                Unlimited Projects
                              </span>
                              <span className="svg-icon svg-icon-1 svg-icon-white">
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
                          <a
                            href="#"
                            className="btn btn-color-primary btn-active-light-primary btn-light"
                          >
                            Select
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4">
                      <div className="d-flex h-100 align-items-center">
                        <div className="w-100 d-flex flex-column flex-center rounded-3 bg-body py-15 px-10">
                          <div className="mb-7 text-center">
                            <h1 className="text-dark mb-5 fw-boldest">
                              Enterprise
                            </h1>
                            <div className="text-gray-400 fw-bold mb-5">
                              Best Settings for Enterprise
                            </div>
                            <div className="text-center">
                              <span className="mb-2 text-primary">$</span>
                              <span
                                className="fs-3x fw-bolder text-primary"
                                data-kt-plan-price-month={999}
                                data-kt-plan-price-annual={9999}
                              >
                                999
                              </span>
                              <span
                                className="fs-7 fw-bold opacity-50"
                                data-kt-plan-price-month="Mon"
                                data-kt-plan-price-annual="Ann"
                              >
                                / Mon
                              </span>
                            </div>
                          </div>
                          <div className="w-100 mb-10">
                            <div className="d-flex flex-stack mb-5">
                              <span className="fw-bold fs-6 text-gray-800 text-start pe-3">
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
                            <div className="d-flex flex-stack mb-5">
                              <span className="fw-bold fs-6 text-gray-800 text-start pe-3">
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
                            <div className="d-flex flex-stack mb-5">
                              <span className="fw-bold fs-6 text-gray-800 text-start pe-3">
                                Keen Analytics Platform
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
                            <div className="d-flex flex-stack mb-5">
                              <span className="fw-bold fs-6 text-gray-800 text-start pe-3">
                                Targets Timelines &amp; Files
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
                            <div className="d-flex flex-stack">
                              <span className="fw-bold fs-6 text-gray-800 text-start pe-3">
                                Unlimited Projects
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
                          <a href="#" className="btn btn-primary">
                            Select
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
        <div className="mt-20 mb-n20 position-relative z-index-2">
          <div className="container">
            <div className="text-center mb-17">
              <h3
                className="fs-2hx text-dark mb-5"
                id="clients"
                data-kt-scroll-offset="{default: 125, lg: 150}"
              >
                What Our Clients Say
              </h3>
              <div className="fs-5 text-muted fw-bold">
                Save thousands to millions of bucks by using single tool
                <br />
                for different amazing and great useful admin
              </div>
            </div>
            <div className="row g-lg-10 mb-10 mb-lg-20">
              <div className="col-lg-4">
                <div className="d-flex flex-column justify-content-between h-lg-100 px-10 px-lg-0 pe-lg-10 mb-15 mb-lg-0">
                  <div className="mb-7">
                    <div className="rating mb-6">
                      <div className="rating-label me-2 checked">
                        <i className="bi bi-star-fill fs-5" />
                      </div>
                      <div className="rating-label me-2 checked">
                        <i className="bi bi-star-fill fs-5" />
                      </div>
                      <div className="rating-label me-2 checked">
                        <i className="bi bi-star-fill fs-5" />
                      </div>
                      <div className="rating-label me-2 checked">
                        <i className="bi bi-star-fill fs-5" />
                      </div>
                      <div className="rating-label me-2 checked">
                        <i className="bi bi-star-fill fs-5" />
                      </div>
                    </div>
                    <div className="fs-2 fw-bolder text-dark mb-3">
                      This is by far the cleanest template
                      <br />
                      and the most well structured
                    </div>
                    <div className="text-gray-500 fw-bold fs-4">
                      The most well thought out design theme I have ever used.
                      The codes are up to tandard. The css styles are very
                      clean. In fact the cleanest and the most up to standard I
                      have ever seen.
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px me-5">
                      <img
                        src="assets/media/avatars/150-2.jpg"
                        className=""
                        alt=""
                      />
                    </div>
                    <div className="flex-grow-1">
                      <a
                        href="#"
                        className="text-dark fw-bolder text-hover-primary fs-6"
                      >
                        Paul Miles
                      </a>
                      <span className="text-muted d-block fw-bold">
                        Development Lead
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex flex-column justify-content-between h-lg-100 px-10 px-lg-0 pe-lg-10 mb-15 mb-lg-0">
                  <div className="mb-7">
                    <div className="rating mb-6">
                      <div className="rating-label me-2 checked">
                        <i className="bi bi-star-fill fs-5" />
                      </div>
                      <div className="rating-label me-2 checked">
                        <i className="bi bi-star-fill fs-5" />
                      </div>
                      <div className="rating-label me-2 checked">
                        <i className="bi bi-star-fill fs-5" />
                      </div>
                      <div className="rating-label me-2 checked">
                        <i className="bi bi-star-fill fs-5" />
                      </div>
                      <div className="rating-label me-2 checked">
                        <i className="bi bi-star-fill fs-5" />
                      </div>
                    </div>
                    <div className="fs-2 fw-bolder text-dark mb-3">
                      This is by far the cleanest template
                      <br />
                      and the most well structured
                    </div>
                    <div className="text-gray-500 fw-bold fs-4">
                      The most well thought out design theme I have ever used.
                      The codes are up to tandard. The css styles are very
                      clean. In fact the cleanest and the most up to standard I
                      have ever seen.
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px me-5">
                      <img
                        src="assets/media/avatars/150-3.jpg"
                        className=""
                        alt=""
                      />
                    </div>
                    <div className="flex-grow-1">
                      <a
                        href="#"
                        className="text-dark fw-bolder text-hover-primary fs-6"
                      >
                        Janya Clebert
                      </a>
                      <span className="text-muted d-block fw-bold">
                        Development Lead
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="d-flex flex-column justify-content-between h-lg-100 px-10 px-lg-0 pe-lg-10 mb-15 mb-lg-0">
                  <div className="mb-7">
                    <div className="rating mb-6">
                      <div className="rating-label me-2 checked">
                        <i className="bi bi-star-fill fs-5" />
                      </div>
                      <div className="rating-label me-2 checked">
                        <i className="bi bi-star-fill fs-5" />
                      </div>
                      <div className="rating-label me-2 checked">
                        <i className="bi bi-star-fill fs-5" />
                      </div>
                      <div className="rating-label me-2 checked">
                        <i className="bi bi-star-fill fs-5" />
                      </div>
                      <div className="rating-label me-2 checked">
                        <i className="bi bi-star-fill fs-5" />
                      </div>
                    </div>
                    <div className="fs-2 fw-bolder text-dark mb-3">
                      This is by far the cleanest template
                      <br />
                      and the most well structured
                    </div>
                    <div className="text-gray-500 fw-bold fs-4">
                      The most well thought out design theme I have ever used.
                      The codes are up to tandard. The css styles are very
                      clean. In fact the cleanest and the most up to standard I
                      have ever seen.
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="symbol symbol-circle symbol-50px me-5">
                      <img
                        src="assets/media/avatars/150-18.jpg"
                        className=""
                        alt=""
                      />
                    </div>
                    <div className="flex-grow-1">
                      <a
                        href="#"
                        className="text-dark fw-bolder text-hover-primary fs-6"
                      >
                        Steave Brown
                      </a>
                      <span className="text-muted d-block fw-bold">
                        Development Lead
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="d-flex flex-stack flex-wrap flex-md-nowrap card-rounded shadow p-8 p-lg-12 mb-n5 mb-lg-n13"
              style={{
                background: "linear-gradient(90deg, #20AA3E 0%, #03A588 100%)",
              }}
            >
              <div className="my-2 me-5">
                <div className="fs-1 fs-lg-2qx fw-bolder text-white mb-2">
                  Start With Metronic Today,
                  <span className="fw-normal">Speed Up Development!</span>
                </div>
                <div className="fs-6 fs-lg-5 text-white fw-bold opacity-75">
                  Join over 100,000 Professionals Community to Stay Ahead
                </div>
              </div>
              <a
                href="https://1.envato.market/EA4JP"
                className="btn btn-lg btn-outline border-2 btn-outline-white flex-shrink-0 my-2"
              >
                Purchase on Themeforest
              </a>
            </div>
          </div>
        </div>
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
