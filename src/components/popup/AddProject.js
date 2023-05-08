import { useEffect, useState } from "react";
import cities from "@/api/cities.json";
import axiosPrivate from "@/api/axiosPrivate";
import styles from "./Modal.module.css";

const AddProject = ({ dismiss }) => {
  const [step, setStep] = useState(1);
  const [close, setClose] = useState(false);
  const [backBtn, setBackBtn] = useState(false);
  const [categories, setCategories] = useState(null);
  // const axiosPrivate = useAxiosPrivate();

  const [sendData, setSendData] = useState({
    title: "titi",
    address: "pata",
    phoneNumber: "595",
    area: 52,


  })
  const [ cityes, setCityes ] = useState({
    city: {
      title: 'fuchu'
    }
  })

  useEffect(() => {
    const postDataHandler = async () => {
      try {
        const res = await fetch("http://localhost:1337/api/projects?populate[0]=city", {
          method: "POST",
          headers: {
            "Authorization": "Bearer 24c1088f9413f6a7cece60b30e81888c264553e9acb33c385f59443fe022fa27071df28eb721ea9abdf62cd42ec95dfdbc026ff582539cf3914c9ef3a8013211841e9469edb744c0df03e18ad7603a5b53b737a91efbfc8f5f527d963ecca1ab37a0b7c6e7c537abb8511f0d012076340d89ee0bcbee7f6ca595c3416f8fa1fb",
            "Content-type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify({
            data: {...cityes, ...sendData}
          }),
        });
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    postDataHandler();
  }, []);

  useEffect(() => {
    const getDataHandler = async () => {
      await axiosPrivate
        .get("/api/admin/content/get_categories", {})
        .then((res) => {
          let data = res.data;
          setCategories(data);
        })
        .catch((e) => {
          console.log(e, "error");
        });
    };
    getDataHandler();

    setSendData({ ...sendData, userId: localStorage.getItem("userId") });
  }, []);

  const sendFormDataHandler = async () => {
    let formData = new FormData();
    formData.append("propertyType", sendData.propertyType);
    formData.append("city", sendData.city);
    formData.append("area", sendData.area);
    formData.append("address", sendData.address);
    formData.append("phone", sendData.phone);
    formData.append("condition", sendData.condition);
    formData.append("currentCondition", sendData.currentCondition);
    formData.append("objectName", sendData.objectName);
    formData.append("worksToDo", sendData.worksToDo);
    formData.append("userId", sendData.userId);
    formData.append("images", sendData.images);

    await axiosPrivate
    .post("/api/admin/projects/add_project", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  let errors = {
    stepOne: [],
    stepTwo: [],
    stepThree: [],
  };

  const validationHandler = () => {
    let propertyInput = document.getElementById("property");
    let cityInput = document.getElementById("city");
    let areaInput = document.getElementById("area");
    let addressInput = document.getElementById("address");
    let phoneInput = document.getElementById("phone");

    if (sendData.propertyType === "") {
      errors.stepOne.push("შეავსეთ ქონების ტიპი");
      propertyInput.classList.add(styles.error);
    } else {
      propertyInput.classList.remove(styles.error);
    }
    if (sendData.city === "") {
      errors.stepOne.push("მონიშნეთ ქალაქი");
      cityInput.classList.add(styles.error);
    } else {
      cityInput.classList.remove(styles.error);
    }
    if (sendData.district === "") {
      errors.stepOne.push("შეავსეთ ფართობი");
      areaInput.classList.add(styles.error);
    } else {
      areaInput.classList.remove(styles.error);
    }
    if (sendData.address === "") {
      errors.stepOne.push("შეავსეთ მისამართი");
      addressInput.classList.add(styles.error);
    } else {
      addressInput.classList.remove(styles.error);
    }
    if (sendData.phone === "") {
      errors.stepOne.push("შეავსეთ ტელეფონის ნომერი");
      phoneInput.classList.add(styles.error);
    } else {
      phoneInput.classList.remove(styles.error);
    }
    // // end of step one
    if (sendData.currentCondition.length === 0) {
      errors.stepTwo.push("მონიშნეთ არესბული მდგომერეობა");
    }
    if (sendData.condition.length === 0) {
      errors.stepTwo.push("მონიშნეთ მდგომეროება");
    }
    // end of step two

    if (sendData.objectName === "") {
      errors.stepThree.push("შეავსეთ ობიექტის დასახელება");
    }
    if (sendData.worksToDo.length === 0) {
      errors.stepThree.push("მონიშნეთ შესასრულებელი სამუშაოები");
    }
    // end of step three

    console.log(errors);
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

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    setSendData((prevState) => {
      const newData = JSON.parse(JSON.stringify(prevState));
      if (checked) {
        newData.worksToDo = [...newData.worksToDo, value];
      } else {
        newData.worksToDo = newData.worksToDo.filter((val) => val !== value);
      }
      return newData;
    });
  };

  const finishHandler = () => {
    setClose(true);
    sendFormDataHandler();
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
                            propertyType: event.target.value,
                          }));
                        }}
                        onBlur={validationHandler}
                        className={`${"form-select"} ${"form-select-solid"} ${"georgian"}`}
                      >
                        <option value={"default"}>აირჩიეთ ტიპი</option>
                        <option value={"ბინა"}>ბინა</option>
                        <option value={"სახლი-აგარაკი"}>სახლი-აგარაკი</option>
                        <option value={"კომერციული ფართი"}>
                          კომერციული ფართი
                        </option>
                        <option value={"სასტუმრო"}>სასტუმრო</option>
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
                                  city: event.target.value,
                                }));
                              }}
                              onBlur={validationHandler}
                              name="locale"
                              className="form-select form-select-solid georgian"
                              data-placeholder="მდებარეობა"
                            >
                              {cities.map((sity, i) => {
                                return <option key={i} value={sity}>{sity}</option>
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
                              onBlur={validationHandler}
                              name="area"
                              type="number"
                              className="form-control georgian form-control-solid"
                              placeholder="ობიექტის ფართობი"
                              data-placeholder="area"
                            >
                            </input>
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
                              onBlur={validationHandler}
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
                                  phone: event.target.value,
                                }));
                              }}
                              onBlur={validationHandler}
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
                        <label className="d-flex flex-stack mb-5 cursor-pointer">
                          <span className="d-flex align-items-center me-2">
                            <span className="d-flex flex-column">
                              <span className="fw-bolder georgian fs-6">
                                ახალი აშენებული
                              </span>
                              <span className="fs-7 text-muted">
                                აშენებული 2005 წლის შემდეგ
                              </span>
                            </span>
                          </span>
                          <span className="form-check form-check-custom form-check-solid">
                            <input
                              id="input-validation-building"
                              onChange={(event) => {
                                setSendData((prevSendData) => ({
                                  ...prevSendData,
                                  condition: event.target.value,
                                }));
                              }}
                              onBlur={validationHandler}
                              className="form-check-input"
                              type="radio"
                              name="category"
                              defaultValue={"ახალი აშენებული"}
                            />
                          </span>
                        </label>
                        <label className="d-flex flex-stack mb-5 cursor-pointer">
                          <span className="d-flex align-items-center me-2">
                            <span className="d-flex flex-column">
                              <span className="fw-bolder georgian fs-6">
                                ძველი აშენებული
                              </span>
                              <span className="fs-7 text-muted">
                                აშენებული 2005 წლამდე
                              </span>
                            </span>
                          </span>
                          <span className="form-check form-check-custom form-check-solid">
                            <input
                              id="input-validation-building"
                              onChange={(event) => {
                                setSendData((prevSendData) => ({
                                  ...prevSendData,
                                  condition: event.target.value,
                                }));
                              }}
                              onBlur={validationHandler}
                              className="form-check-input"
                              type="radio"
                              name="category"
                              defaultChecked="checked"
                              defaultValue={"ძველი აშენებული"}
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
                      </label>
                      <label className="d-flex flex-stack cursor-pointer mb-5">
                        <span className="d-flex align-items-center me-2">
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
                            id="input-validation"
                            onChange={(event) => {
                              setSendData((prevSendData) => ({
                                ...prevSendData,
                                currentCondition: event.target.value,
                              }));
                            }}
                            onBlur={validationHandler}
                            className="form-check-input"
                            type="radio"
                            defaultChecked="checked"
                            name="framework"
                            defaultValue={"შავი კარკასი"}
                          />
                        </span>
                      </label>
                      <label className="d-flex flex-stack cursor-pointer mb-5">
                        <span className="d-flex align-items-center me-2">
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
                            id="input-validation"
                            onChange={(event) => {
                              setSendData((prevSendData) => ({
                                ...prevSendData,
                                currentCondition: event.target.value,
                              }));
                            }}
                            onBlur={validationHandler}
                            className="form-check-input"
                            type="radio"
                            name="framework"
                            defaultValue={"თეთრი კარკასი"}
                          />
                        </span>
                      </label>
                      <label className="d-flex flex-stack cursor-pointer mb-5">
                        <span className="d-flex align-items-center me-2">
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
                            id="input-validation"
                            onChange={(event) => {
                              setSendData((prevSendData) => ({
                                ...prevSendData,
                                currentCondition: event.target.value,
                              }));
                            }}
                            onBlur={validationHandler}
                            className="form-check-input"
                            type="radio"
                            name="framework"
                            defaultValue={"მწვანე კარკასი"}
                          />
                        </span>
                      </label>
                      <label className="d-flex flex-stack cursor-pointer mb-5">
                        <span className="d-flex align-items-center me-2">
                          <span className="d-flex flex-column">
                            <span className="fw-bolder georgian fs-6">
                              პროექტის სურათები
                            </span>
                          </span>
                        </span>
                        <span className="form-check form-check-custom form-check-solid">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              let blob = e.target.files[0].slice(0, e.target.files[0].size, e.target.files[0].type);
                              const ext = e.target.files[0].type.slice(6);

                              const newFile = new File([blob], `${sendData.address}.${ext}`, { type: e.target.files[0].type });

                              setSendData((prevCraftData) => ({
                                ...prevCraftData,
                                images: newFile,
                              }));
                            }}
                          />
                        </span>
                      </label>
                      {/* <label className="d-flex flex-stack cursor-pointer mb-5">
                        <span className="d-flex align-items-center me-2">
                          <span className="d-flex flex-column">
                            <span className="fw-bolder georgian fs-6">
                              პროექტის ნახაზები
                            </span>
                          </span>
                        </span>
                        <span className="form-check form-check-custom form-check-solid">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                              setSendData((prevCraftData) => ({
                                ...prevCraftData,
                                drawings: e.target.files[0],
                              }));
                            }}
                          />
                        </span>
                      </label> */}
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
                            objectName: event.target.value,
                          }));
                        }}
                        onBlur={validationHandler}
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
                                        onBlur={validationHandler}
                                        onChange={handleCheckboxChange}
                                        className="form-check-input"
                                        type="checkbox"
                                        defaultValue={item.category}
                                      />
                                      <label
                                        onClick={(e) => e.preventDefault()}
                                        className="form-check-label georgian"
                                      >
                                        {item.category}
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
