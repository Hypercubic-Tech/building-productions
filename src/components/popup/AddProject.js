import { useEffect, useState } from "react";
import axios from "axios";

import styles from "./Modal.module.css";

const AddProject = ({ dismiss }) => {
  const [step, setStep] = useState(1);
  const [close, setClose] = useState(false);
  const [backBtn, setBackBtn] = useState(false);

  const [cities, setCities] = useState(null);
  const [propertyType, setPropertyType] = useState(null);
  const [condition, setCondition] = useState(null);
  const [currentCondition, setCurrentCondition] = useState(null);
  const [categories, setCategories] = useState(null);
  const [sendData, setSendData] = useState({
    title: "",
    address: "",
    phoneNumber: "",
    area: "",
    city: {
      connect: [
        { id: null }
      ]
    },
    property_type: {
      connect: [
        { id: null }
      ]
    },
    categories: {
      connect: []
    },
    current_condition: {
      connect: [
        { id: null }
      ]
    },
    condition: {
      connect: [
        { id: null }
      ]
    },
  });

  useEffect(() => {
    const getPropertyTypesHandler = async () => {
      try {
        const res = await axios.get("http://localhost:1337/api/property-types")
          .then((res) => {
            const data = res.data;
            setPropertyType(data.data)
          })

      } catch (error) {
        console.log(error);
      }
    };
    getPropertyTypesHandler();
  }, []);

  useEffect(() => {
    const getCitiesHandler = async () => {
      try {
        const res = await axios.get("http://localhost:1337/api/cities")
          .then((res) => {
            const data = res.data;
            setCities(data.data)
          })

      } catch (error) {
        console.log(error);
      }
    };
    getCitiesHandler();
  }, []);

  useEffect(() => {
    const getConditionHandler = async () => {
      try {
        const res = await axios.get("http://localhost:1337/api/conditions")
          .then((res) => {
            const data = res.data;
            setCondition(data.data)
          })

      } catch (error) {
        console.log(error);
      }
    };
    getConditionHandler();
  }, []);

  useEffect(() => {
    const getCurrentConditionHandler = async () => {
      try {
        const res = await axios.get("http://localhost:1337/api/current-conditions")
          .then((res) => {
            const data = res.data;
            setCurrentCondition(data.data)
          })

      } catch (error) {
        console.log(error);
      }
    };
    getCurrentConditionHandler();
  }, []);

  useEffect(() => {
    const getCategoriesHandler = async () => {
      try {
        const res = await axios.get("http://localhost:1337/api/categories")
          .then((res) => {
            const data = res.data;
            setCategories(data.data)
          })

      } catch (error) {
        console.log(error);
      }
    };
    getCategoriesHandler();
  }, []);

  let errors = {
    stepOne: [],
    stepTwo: [],
    stepThree: [],
  };

  const getStatusClass = (stepIndex) => {
    if (stepIndex < step) {
      return "completed";
    } else if (stepIndex === step) {
      return "current";
    } else {
      return "pending";
    }
  };

  const stepChangeHandler = () => {
    if (step < 4) {
      if (errors.stepOne.length === 0) {
        setStep(step + 1);
        if (errors.stepTwo.length === 0) {
          setStep(step + 1);
          if (errors.stepThree.length === 0) {
            setStep(step + 1);
          }
        }
      }
    }
  };

  const prevStepHandler = () => {
    if (step > 1) {
      setBackBtn(true);
      setStep(step - 1);
    }
  };

  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;
    if (!sendData.categories.connect.some(cat => cat.id === categoryId)) {
      setSendData(prevState => ({
        ...prevState,
        categories: {
          connect: [...prevState.categories.connect, { id: categoryId }]
        }
      }));
    }
  };

  const saveProjectHandler = async (req, res) => {
    try {
      await axios.post('http://localhost:1337/api/projects', {
        data: sendData
      });
    } catch (error) {
      console.error(error);
    }
  }

  const finishHandler = () => {
    setClose(true);
    saveProjectHandler();
    console.log(sendData)
  };

  return (
    <div
      style={{ display: close ? "none" : "", overflow: "auto" }}
      className={`modal-xxl ${styles.modal}`}
    >
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="georgian">ობიექტის დამატება</h2>

          <div
            className="btn btn-sm btn-icon btn-active-color-primary"
            data-bs-dismiss="modal"
            onClick={dismiss}
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
                  className={`${"stepper-item"} ${getStatusClass(1)}`}
                  data-kt-stepper-element="nav"
                >
                  <div className="stepper-line w-40px" />
                  <div className="stepper-icon w-40px h-40px">
                    <i className="stepper-check fas fa-check" />
                    <span className="stepper-number">1</span>
                  </div>
                  <div className="stepper-label">
                    <h3 className="stepper-title georgian">კატეგორია</h3>
                    <div className="stepper-desc georgian">ობიექტის აღწერა</div>
                  </div>
                </div>

                <div
                  className={`${"stepper-item"} ${getStatusClass(2)}`}
                  data-kt-stepper-element="nav"
                >
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

                <div
                  className={`${"stepper-item"} ${getStatusClass(3)}`}
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
                  className={`${"stepper-item"} ${getStatusClass(4)}`}
                  data-kt-stepper-element="nav"
                >
                  <div className="stepper-line w-40px" />
                  <div className="stepper-icon w-40px h-40px">
                    <i className="stepper-check fas fa-check" />
                    <span className="stepper-number">4</span>
                  </div>
                  <div className="stepper-label">
                    <h3 className="stepper-title">დასრულება</h3>
                    <div className="stepper-desc"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-row-fluid py-lg-5 px-lg-15">
              <form className="form" noValidate="novalidate" id="">
                <div
                  className={getStatusClass(1)}
                  data-kt-stepper-element="content"
                >
                  <div className="w-100">
                    <div className="fv-row mb-10">
                      <label className="d-flex align-items-center fs-5 fw-bold mb-2">
                        <span className="required georgian">ქონების ტიპი</span>
                        <i
                          className="fas fa-exclamation-circle ms-2 fs-7"
                          title="მიუთითეთ სამუშაო ობიექტის ტიპი"
                        />
                      </label>
                      <select
                        id="property"
                        onChange={(event) => {
                          setSendData((prevSendData) => ({
                            ...prevSendData,
                            property_type: {
                              connect: [{ id: event.target.value }],
                            },
                          }));
                        }}
                        className={`${"form-select"} ${"form-select-solid"} ${"georgian"}`}
                      >
                        {propertyType && propertyType.map((item, index) => {
                          <option value="none" selected disabled hidden></option>
                          return (
                            <option key={index} value={item.id}>{item.attributes.Title}</option>
                          )
                        })}
                      </select>
                    </div>

                    <div className="row mb-10">
                      <div className="col-md-12 fv-row">
                        <label className="required fs-6 fw-bold form-label georgian mb-2">
                          მდებარეობა / ფართობი
                        </label>
                        <div className="row fv-row">
                          <div className="col-6">
                            <select
                              id="city"
                              onChange={(event) => {
                                setSendData((prevSendData) => ({
                                  ...prevSendData,
                                  city: {
                                    connect: [{ id: event.target.value }],
                                  },
                                }));
                              }}
                              name="locale"
                              className="form-select form-select-solid georgian"
                              data-placeholder="მდებარეობა"
                            >
                              {cities && cities.map((item, index) => {
                                <option value="none" selected disabled hidden></option>
                                return (
                                  <option key={index} value={item.id}>{item.attributes.city}</option>
                                )
                              })}
                            </select>
                          </div>
                          <div className="col-6">
                            <input
                              id="area"
                              onChange={(event) => {
                                setSendData((prevSendData) => ({
                                  ...prevSendData,
                                  area: event.target.value,
                                }));
                              }}
                              name="area"
                              type="number"
                              className="form-control georgian form-control-solid"
                              placeholder="ობიექტის ფართობი"
                              data-placeholder="area"
                            ></input>
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
                              id="address"
                              onChange={(event) => {
                                setSendData((prevSendData) => ({
                                  ...prevSendData,
                                  address: event.target.value,
                                }));
                              }}
                              type="text"
                              className="form-control georgian form-control-solid"
                              placeholder="ზუსტი მისამართი"
                            />
                          </div>
                          <div className="col-6">
                            <input
                              id="phone"
                              onChange={(event) => {
                                setSendData((prevSendData) => ({
                                  ...prevSendData,
                                  phoneNumber: event.target.value,
                                }));
                              }}
                              type="number"
                              className="form-control georgian form-control-solid"
                              placeholder="ტელეფონი"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* STEP */}

                <div
                  className={getStatusClass(2)}
                  data-kt-stepper-element="content"
                >
                  <div className="w-100">
                    <div className="fv-row">
                      <label className="d-flex align-items-center fs-5 fw-bold mb-4">
                        <span className="required georgian">მდგომარეობა</span>
                      </label>
                      <div className="fv-row">
                        {condition && condition.map((item, index) => {
                          return (
                            <label key={index} className="d-flex flex-stack mb-5 cursor-pointer">
                              <span className="d-flex align-items-center me-2">
                                <span className="d-flex flex-column">
                                  <span className="fw-bolder georgian fs-6">
                                    {item.attributes.title}
                                  </span>
                                </span>
                              </span>
                              <span className="form-check form-check-custom form-check-solid">
                                <input
                                  id="input-validation-building"
                                  onChange={(event) => {
                                    setSendData((prevSendData) => ({
                                      ...prevSendData,
                                      condition: {
                                        connect: [{ id: event.target.value }],
                                      },
                                    }));
                                  }}
                                  className="form-check-input"
                                  type="radio"
                                  name="category"
                                  value={item.id}
                                />
                              </span>
                            </label>
                          )
                        })}
                      </div>
                    </div>
                    <div className="fv-row">
                      <label className="d-flex align-items-center fs-5 fw-bold mb-4">
                        <span className="required georgian">
                          არსებული მდგომარეობა
                        </span>
                      </label>
                      {currentCondition && currentCondition.map((item, index) => {
                        return (
                          <label key={index} className="d-flex flex-stack cursor-pointer mb-5">
                            <span className="d-flex align-items-center me-2">
                              <span className="d-flex flex-column">
                                <span className="fw-bolder georgian fs-6">
                                  {item.attributes.title}
                                </span>
                                <span className="fs-7 georgian text-muted">
                                  სამუშაოები სრულ რემონტამდე.
                                </span>
                              </span>
                            </span>
                            <span className="form-check form-check-custom form-check-solid">
                              <input
                                id="input-validation"
                                onChange={(event) => {
                                  setSendData((prevSendData) => ({
                                    ...prevSendData,
                                    current_condition: {
                                      connect: [{ id: event.target.value }],
                                    },
                                  }));
                                }}
                                className="form-check-input"
                                type="radio"
                                name="framework"
                                value={item.id}
                              />
                            </span>
                          </label>
                        )
                      })}
                    </div>
                  </div>
                </div>
                <div
                  className={getStatusClass(3)}
                  data-kt-stepper-element="content"
                >
                  <div className="w-100">
                    <div className="fv-row mb-10">
                      <label className="required fs-5 georgian fw-bold mb-2">
                        ობიექტის დასახელება
                      </label>
                      <input
                        id="input-validation-object"
                        onChange={(event) => {
                          setSendData((prevSendData) => ({
                            ...prevSendData,
                            title: event.target.value,
                          }));
                        }}
                        type="text"
                        className="form-control georgian form-control-lg form-control-solid"
                        name="dbname"
                        placeholder="ობიექტის დასახელება"
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
                              {categories &&
                                categories.map((item, index) => {
                                  return (
                                    <div
                                      key={index}
                                      className="form-check form-check-custom form-check-solid mb-2"
                                    >
                                      <input
                                        onChange={handleCategoryChange}
                                        className="form-check-input"
                                        type="checkbox"
                                        value={item.id}
                                      />
                                      <label
                                        onClick={(e) => e.preventDefault()}
                                        className="form-check-label georgian"
                                      >
                                        {item.attributes.title}
                                      </label>
                                    </div>
                                  );
                                })}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={getStatusClass(4)}
                  data-kt-stepper-element="content"
                >
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
                      style={{ display: step === 1 ? "none" : "" }}
                      onClick={prevStepHandler}
                      type="button"
                      className="btn georgian btn-lg btn-light-primary me-3"
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
                      onClick={finishHandler}
                      style={{ display: step === 4 ? "" : "none" }}
                      type="button"
                      className="btn btn-lg btn-primary"
                    >
                      <span className="indicator-label georgian">
                        დამატება
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
                    {/* <div>{notificationElement && notificationElement} ჰი</div> */}
                    <button
                      style={{ display: step >= 4 ? "none" : "" }}
                      onClick={stepChangeHandler}
                      type="button"
                      className="btn btn-lg georgian btn-primary"
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
  );
};

export default AddProject;
