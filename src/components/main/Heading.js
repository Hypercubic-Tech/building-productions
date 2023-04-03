const Heading = () => {
  return (
    <div className="d-flex flex-column flex-center w-100 min-h-350px min-h-lg-500px px-9">
      <div className="text-center mb-5 mb-lg-10 py-10 py-lg-20">
        <h1 className="text-white lh-base fw-bolder fs-2x fs-lg-3x mb-15 georgian">
          გამოთვალე მარტივად
          <br />
          <span
            style={{
              background: "linear-gradient(to right, #12CE5D 0%, #FFD80C 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <span id="kt_landing_hero_text">სარემონტო ხარჯთაღრიცხვა!</span>
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
                          <h3 className="stepper-title georgian">კატეგორია</h3>
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
                          <h3 className="stepper-title georgian">სამუშაოები</h3>
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
                          <div className="stepper-desc">Review and Submit</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-row-fluid py-lg-5 px-lg-15">
                    <form className="form" noValidate="novalidate" id="">
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
                              <option value={3}>კომერციული ფართი</option>
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
                                      Creating a clear text structure is just
                                      one SEO
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
                                      Creating a clear text structure is just
                                      one aspect
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
  );
};

export default Heading;
