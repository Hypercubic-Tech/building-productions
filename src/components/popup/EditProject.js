import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";


import notify from "../../utils/notify";
import styles from "./Modal.module.css";

const EditProject = ({ dismiss, setShowProject, project }) => {
  const userId = useSelector(state => state.auth.user_id)
  console.log(project)

  const [step, setStep] = useState(1);
  const [loss, setLoss] = useState(false);
  const [close, setClose] = useState(false);
  const [backBtn, setBackBtn] = useState(false);
  const [cities, setCities] = useState(null);
  const [propertyType, setPropertyType] = useState(null);
  const [condition, setCondition] = useState(null);
  const [currentCondition, setCurrentCondition] = useState(null);
  const [categories, setCategories] = useState(null);
  const [hiddenInput, setHiddenInput] = useState(false);

  const [propertyOption, setPropertyOption] = useState(project?.data[0]?.attributes?.property_types?.data[0]?.id);
  const [cityOption, setCityOption] = useState(project.data[0].attributes.city.data.id);
  const [conditionOption, setConditionOption] = useState(project.data[0].attributes.conditions.data[0].id);
  const [currentConditionOption, setCurrentConditionOption] = useState(project.data[0].attributes.current_condition.data.id);
  const [categoriesOption, setCategoriesOption] = useState(project.data[0].attributes.categories.data.map((cat) => ({
    id: cat.id,
  })))
  console.log('opt')
  // const [oldSelecetedCat, setOldSelectedCat] = useState();
  // const [selectedCategories, setSelectedCategories] = useState([]);

  // useEffect(() => {
  //   const oldCats = categories && categories.map((cat) => {
  //     return cat.id
  //   })
  //   setOldSelectedCat(oldCats)

  // }, [categories])

  const [sendData, setSendData] = useState({
    title: project.data[0].attributes.title,
    address: project.data[0].attributes.address,
    phoneNumber: project.data[0].attributes.phoneNumber,
    area: project.data[0].attributes.area,
    vat: project.data[0].attributes.vat,
    vatPercent: project.data[0].attributes.vatPercent,
    unforeseenExpenses: project.data[0].attributes.unforeseenExpenses,
    city: {
      connect: [
        { id: cityOption }
      ]
    },
    property_types: {
      connect: [
        { id: propertyOption }
      ]
    },
    current_condition: {
      connect: [
        { id: currentConditionOption }
      ]
    },
    conditions: {
      connect: [
        { id: conditionOption }
      ]
    },
    categories: {
      connect: categoriesOption,
    },
    
    service_percentage: project?.data[0]?.attributes?.service_percentage,

    users_permissions_user: {
      connect: [
        { id: userId }
      ]
    }
  });

  let errors = {
    stepOne: [],
    stepTwo: [],
    stepThree: [],
  };

  const hiddenInputHandler = () => {
    if (!hiddenInput) {
      setHiddenInput(true)
    } else {
      setHiddenInput(false)
    }
  }

  const getStatusClass = (stepIndex) => {
    if (stepIndex < step) {
      return "completed";
    } else if (stepIndex === step) {
      return "current";
    } else {
      return "pending";
    }
  };
  console.log(sendData)
  Array.prototype.remove = function () {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
      what = a[--L];
      while ((ax = this.indexOf(what)) !== -1) {
        this.splice(ax, 1);
      }
    }
    return this;
  };

  const handleCheckboxChange = (e) => {
    const id = e.target.value;
    const categoryId = +id;
    // console.log(selectedCategories, 'iji')
    // console.log(sendData.categories.connect.remove()
    // categoriesOption.remove(1)
    // console.log(categoriesOption, '12')
    if (e.target.checked) {
      if (!sendData.categories.connect.some((cat) => cat.id === categoryId)) {
        setSendData((prevState) => ({
          ...prevState,
          categories: {
            connect: [...prevState.categories.connect, { id: categoryId }],
          },
        }));
      }
    } else {
      setSendData((prevState) => ({
        ...prevState,
        categories: {
          connect: prevState.categories.connect.filter((cat) => cat.id !== categoryId),
        },
      }));
    }
  };


  const stepChangeHandler = () => {

    if (step === 1 && errors.stepOne.length === 0 && sendData.address && sendData.phoneNumber && sendData.area && sendData.city.connect[0].id && sendData.property_types.connect[0].id) {
      setStep(step + 1);
      setLoss(false);
    } else {
      setLoss(true);
    }
    if (step === 2 && errors.stepTwo.length === 0 && sendData.conditions.connect[0].id && sendData.current_condition.connect[0].id) {
      setStep(step + 1);
      setLoss(false);
    }
    if (step === 3 && errors.stepThree.length === 0 && sendData.title && sendData.categories.connect.length > 0) {
      setStep(step + 1);
      setLoss(false);
    }
  };

  const prevStepHandler = () => {
    if (step > 1) {
      setBackBtn(true);
      setStep(step - 1);
    }
  };

  const createProjectHandler = async () => {
    try {
      let projectId = project.data[0].id

      await axios.put(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/projects/${projectId}`, {
        data: sendData
      })
        .then((res) => {
          const data = res.data;
          setShowProject(true)
          // dispatch(setUpdateProject(data.data))
          notify(false, "პროექტი რედაქტირდა");
        })
    } catch (error) {
      notify(true, "პროექტის რედაქტირდა უარყოფილია");
      console.error(error);
    }
  }

  const finishHandler = () => {
    setClose(true);
    createProjectHandler();
  };

  useEffect(() => {
    const getCategoriesHandler = async () => {
      try {
        await axios.get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/categories`)
          .then((res) => {
            const data = res.data;
            setCategories(data.data)
          })
      } catch (error) {
        console.log(error);
      }
    };

    const getCurrentConditionHandler = async () => {
      try {
        await axios.get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/current-conditions`)
          .then((res) => {
            const data = res.data;
            setCurrentCondition(data.data)
          })
      } catch (error) {
        console.log(error);
      }
    };

    const getConditionHandler = async () => {
      try {
        await axios.get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/conditions`)
          .then((res) => {
            const data = res.data;
            setCondition(data.data)
          })
      } catch (error) {
        console.log(error);
      }
    };

    const getCitiesHandler = async () => {
      try {
        await axios.get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/cities`)
          .then((res) => {
            const data = res.data;
            setCities(data.data)
          })

      } catch (error) {
        console.log(error);
      }
    };

    const getPropertyTypesHandler = async () => {
      try {
        axios.get(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/property-types`)
          .then((res) => {
            const data = res.data;
            setPropertyType(data.data)
          })
      } catch (error) {
        console.log(error);
      }
    };

    getCategoriesHandler();
    getCurrentConditionHandler();
    getConditionHandler();
    getCitiesHandler();
    getPropertyTypesHandler();
  }, []);

  return (
    <div
      style={{ display: close ? "none" : "", "marginTop": "80px" }}
      className={`modal-xxl ${styles.modal}`}
    >
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="georgian">ობიექტის რედაქტირება</h2>
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
        <div className={` modal-body py-lg-10 px-lg-10 ${styles.scroll}`}>
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
              <form className="form needs-validation" noValidate="novalidate">
                <div
                  className={getStatusClass(1)}
                  data-kt-stepper-element="content"
                >
                  <div className="w-100">
                    <div className="fv-row mb-10">
                      <label className="d-flex align-items-center fs-5 fw-bold mb-2 form-label" htmlFor="validationCustom04">
                        <span className="required georgian">ქონების ტიპი</span>
                        <i
                          className="fas fa-exclamation-circle ms-2 fs-7"
                          title="მიუთითეთ სამუშაო ობიექტის ტიპი"
                        />
                      </label>
                      <select
                        required
                        id="property"
                        value={propertyOption}
                        onChange={(event) => {
                          setPropertyOption(event.target.value)
                        }}
                        className={`${"form-select"} ${"form-select-solid"} ${"georgian"}`}
                      >
                        <option value="none" disabled hidden>აირჩიერ ქონების ტიპი</option>
                        {propertyType && propertyType.map((item, index) => {
                          return (
                            <option key={index} value={item.id}>{item.attributes.title}</option> // .titles gamo ar mushaobs sheidlzeba tqventan .Title imushavebs
                          )
                        })}
                      </select>
                    </div>

                    <div className="row mb-10">
                      <div className="col-md-12 fv-row">
                        <div className="row fv-row">
                          <div className="col-6">
                            <label className="required fs-6 fw-bold form-label georgian mb-2">
                              მდებარეობა
                            </label>
                            <select
                              id="city"
                              value={cityOption}
                              onChange={(event) => {
                                setCityOption(event.target.value)
                              }}
                              name="locale"
                              className="form-select form-select-solid georgian"
                              data-placeholder="მდებარეობა"
                            >
                              <option value="none" disabled hidden>აირჩიეთ ქალაქი</option>
                              {cities && cities.map((item, index) => {
                                return (
                                  <option key={index} value={item.id}>{item.attributes.city}</option>
                                )
                              })}
                            </select>
                          </div>
                          <div className="col-6">
                            <label className="required fs-6 fw-bold form-label georgian mb-2">
                              ფართობი
                            </label>
                            <input
                              id="area"
                              defaultValue={sendData.area}
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
                        <div className="row fv-row">
                          <div className="col-6">
                            <label className="required fs-6 fw-bold form-label georgian mb-2">
                              მისამართი
                            </label>
                            <input
                              id="address"
                              defaultValue={sendData.address}
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
                            <label className="required fs-6 fw-bold form-label georgian mb-2">
                              ტელეფონი
                            </label>
                            <input
                              id="phone"
                              defaultValue={sendData.phoneNumber}
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
                    <div className="w-100">
                      <div className="row mb-10">
                        <div className={`${styles.inputWrap} col-4 `}>
                          <label className="d-flex align-items-center fs-5 fw-bold mb-2">
                            <span className={` georgian `}>დღგ-ს გადამხდელი</span>
                          </label>
                          <input
                            className="form-control georgian form-control-solid"
                            placeholder="დღგ-ს გადამხდელი (%)"
                            type="text"
                            defaultValue={sendData.vatPercent}
                            onChange={(e) => {
                              setSendData((prevSendData) => ({
                                ...prevSendData,
                                vatPercent: e.target.value,
                              }));
                            }}
                          />
                        </div>
                        <div className={`${styles.inputWrap} col-4 `}>
                          <label className="d-flex align-items-center fs-5 fw-bold mb-2">
                            <span className={` georgian `}>გაუთვალისწინებელი ხარჯები</span>
                          </label>
                          <input
                            defaultValue={sendData.unforeseenExpenses}
                            onChange={(event) => {
                              setSendData((prevSendData) => ({
                                ...prevSendData,
                                unforeseenExpenses: event.target.value,
                              }));
                            }}
                            type="text"
                            className="form-control georgian form-control-solid"
                            placeholder="გაუთვალისწინებელი ხარჯები (%)"
                          />
                        </div>
                        <div className={`${styles.inputWrap} col-4 `}>
                          <div style={{ flexDirection: "column" }} className="d-flex">
                            <label className="d-flex align-items-center fs-5 fw-bold mb-2">
                              <span className={` georgian `}>მომსახურეობის ხარჯები </span>
                            </label>
                            <input
                              defaultValue={sendData.service_percentage}
                              className="form-control georgian form-control-solid"
                              type="text"
                              id="flexSwitchCheckDefault"
                              placeholder="მომსახურების ხარჯები (%)"
                              onChange={(e) => {
                                setSendData((prevSendData) => ({
                                  ...prevSendData,
                                  service_percentage: e.target.value,
                                }));
                                // hiddenInputHandler();
                              }}
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
                                  defaultChecked={conditionOption === item.id}
                                  onChange={(event) => {
                                    setConditionOption(event.target.value)
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
                                defaultChecked={currentConditionOption === item.id ? 'checked' : ''}
                                onChange={(event) => {
                                  setCurrentConditionOption(event.target.value)
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
                        defaultValue={sendData.title}
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
                                        className="form-check-input"
                                        type="checkbox"
                                        value={item.id}
                                        defaultChecked={categoriesOption.includes(item.id)}
                                        onChange={handleCheckboxChange}
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
                    <h1 className="fw-bolder text-dark mb-3">მონაცემები შეყვანილია!</h1>
                    <div className="text-muted fw-bold fs-3">
                      დამატების ღილაკზე დაჭერით მონაცემები ბაზაში აიტვირთება.
                    </div>
                    <div className="text-center px-4 py-15">
                      <img
                        src="assets/media/illustrations/sketchy-1/9.png"
                        alt=""
                        className="mh-300px"
                      />
                    </div>
                  </div>
                </div>
                {/* {loss && <p style={{color: 'red'}}>რაღაცა აკლია!!!</p>} */}

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
                    {loss && <p style={{ color: 'red' }}>შეავსეთ ყველა (*) ველი</p>}

                    <button
                      onClick={finishHandler}
                      style={{ display: step === 4 ? "" : "none" }}
                      type="button"
                      className="btn btn-lg btn-primary"
                    >
                      <span className="indicator-label georgian">
                        რედაქტირება
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

export default EditProject;
