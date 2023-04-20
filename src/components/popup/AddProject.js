import { useEffect, useState } from "react";
import axiosInstance from "@/api/axios";
import styles from "./Modal.module.css";

const AddProject = ({ dismiss }) => {
  const [step, setStep] = useState(1);
  const [close, setClose] = useState(false);
  const [backBtn, setBackBtn] = useState(false);
  const [categories, setCategories] = useState(null);

  const [sendData, setSendData] = useState([
    {
      category: {
        propertyType: "",
        city: "",
        district: "",
        address: "",
        phone: "",
      },
      condition: {
        condition: [],
        currentCondition: [],
      },
      works: {
        objectName: "",
        worksToDo: [],
      },
    },
  ]);

  useEffect(() => {
    const getDataHandler = async () => {
      await axiosInstance
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
  }, []);

  let errors = {
    stepOne: [],
    stepTwo: [],
    stepThree: [],
  };

  const validationHandler = () => {
    if (sendData[0].category.propertyType === "") {
      errors.stepOne.push("შეავსეთ ქონების ტიპი");
    }
    if (sendData[0].category.city === "") {
      errors.stepOne.push("მონიშნეთ ქალაქი");
    }
    if (sendData[0].category.district === "") {
      errors.stepOne.push("მონიშნეთ რაიონი");
    }
    if (sendData[0].category.address === "") {
      errors.stepOne.push("შეავსეთ მისამართი");
    }
    if (sendData[0].category.phone === "") {
      errors.stepOne.push("შეავსეთ ტელეფონის ნომერი");
    }
    // // end of step one

    if (sendData[0].condition.currentCondition.length === 0) {
      errors.stepTwo.push("მონიშნეთ არესბული მდგომერეობა");
    }
    if (sendData[0].condition.condition.length === 0) {
      errors.stepTwo.push("მონიშნეთ მდგომეროება");
    }
    // end of step two

    if (sendData[0].works.objectName === "") {
      errors.stepThree.push("შეავსეთ ობიექტის დასახელება");
    }
    if (sendData[0].works.worksToDo.length === 0) {
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
        newData[0].works.worksToDo = [...newData[0].works.worksToDo, value];
      } else {
        newData[0].works.worksToDo = newData[0].works.worksToDo.filter(
          (val) => val !== value
        );
      }
      return newData;
    });
  };

  const finishHandler = () => {
    console.log(sendData);
    setClose(true);
  };

  return (
    <div
      style={{ display: close ? "none" : "", overflow: 'auto'}}
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
                        onChange={(event) => {
                          setSendData((prevSendData) => [
                            {
                              ...prevSendData[0],
                              category: {
                                ...prevSendData[0].category,
                                propertyType: event.target.value,
                              },
                              condition: {
                                ...prevSendData[0].condition,
                              },
                              works: {
                                ...prevSendData[0].works,
                              },
                            },
                          ]);
                          // validationHandler;
                        }}
                        onBlur={validationHandler}
                        className={`${"form-select"} ${"form-select-solid"} ${"georgian"}`}
                      >
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
                          მდებარეობა / რაიონი
                        </label>
                        <div className="row fv-row">
                          <div className="col-6">
                            <select
                              onChange={(event) => {
                                setSendData((prevSendData) => [
                                  {
                                    ...prevSendData[0],
                                    category: {
                                      ...prevSendData[0].category,
                                      city: event.target.value,
                                    },
                                    condition: {
                                      ...prevSendData[0].condition,
                                    },
                                    works: {
                                      ...prevSendData[0].works,
                                    },
                                  },
                                ]);
                                // validationHandler;
                              }}
                              onBlur={validationHandler}
                              name="locale"
                              className="form-select form-select-solid georgian"
                              data-placeholder="მდებარეობა"
                            >
                              <option value={"თბილისი"}>თბილისი</option>
                              <option value={"რუსთავი"}>რუსთავი</option>
                              <option value={"ქუთაისი"}>ქუთაისი</option>
                              <option value={"ბათუმი"}>ბათუმი</option>
                              <option value={"აბასთუმანი"}>აბასთუმანი</option>
                              <option value={"აბაშა"}>აბაშა</option>
                              <option value={"ჩხალა"}>ჩხალთა</option>
                            </select>
                          </div>
                          <div className="col-6">
                            <select
                              onChange={(event) => {
                                setSendData((prevSendData) => [
                                  {
                                    ...prevSendData[0],
                                    category: {
                                      ...prevSendData[0].category,
                                      district: event.target.value,
                                    },
                                    condition: {
                                      ...prevSendData[0].condition,
                                    },
                                    works: {
                                      ...prevSendData[0].works,
                                    },
                                  },
                                ]);
                                // validationHandler;
                              }}
                              onBlur={validationHandler}
                              name="locale"
                              className="form-select form-select-solid georgian"
                              data-placeholder="მდებარეობა"
                            >
                              <option value={"გლდანის რაიონი"}>
                                გლდანის რაიონი
                              </option>
                              <option value={"დიდუბის რაიონი"}>
                                დიდუბის რაიონი
                              </option>
                              <option value={"ვაკის რაიონი"}>
                                ვაკის რაიონი
                              </option>
                              <option value={"საურთალოს რაიონი"}>
                                საურთალოს რაიონი
                              </option>
                              <option value={"მთაწმინდის რაიონი"}>
                                მთაწმინდის რაიონი
                              </option>
                              <option value={"ჩუღურეთის რაიონი"}>
                                ჩუღურეთის რაიონი
                              </option>
                              <option value={"თბილისის შემოგარენი"}>
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
                              id="input-validation-address"
                              onChange={(event) => {
                                setSendData((prevSendData) => [
                                  {
                                    ...prevSendData[0],
                                    category: {
                                      ...prevSendData[0].category,
                                      address: event.target.value,
                                    },
                                    condition: {
                                      ...prevSendData[0].condition,
                                    },
                                    works: {
                                      ...prevSendData[0].works,
                                    },
                                  },
                                ]);
                                // validationHandler;
                              }}
                              onBlur={validationHandler}
                              type="text"
                              className="form-control georgian form-control-solid"
                              placeholder="ზუსტი მისამართი"
                            />
                          </div>
                          <div className="col-6">
                            <input
                              id="input-validation-mobile"
                              onChange={(event) => {
                                setSendData((prevSendData) => [
                                  {
                                    ...prevSendData[0],
                                    category: {
                                      ...prevSendData[0].category,
                                      phone: event.target.value,
                                    },
                                    condition: {
                                      ...prevSendData[0].condition,
                                    },
                                    works: {
                                      ...prevSendData[0].works,
                                    },
                                  },
                                ]);
                                // validationHandler;
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
                                Creating a clear text
                              </span>
                            </span>
                          </span>
                          <span className="form-check form-check-custom form-check-solid">
                            <input
                              id="input-validation-building"
                              onChange={(event) => {
                                setSendData((prevSendData) => [
                                  {
                                    ...prevSendData[0],
                                    category: {
                                      ...prevSendData[0].category,
                                    },
                                    condition: {
                                      ...prevSendData[0].condition,
                                      condition: event.target.value,
                                    },
                                    works: {
                                      ...prevSendData[0].works,
                                    },
                                  },
                                ]);
                                // setValidate((prev) => ({
                                //   ...prev,
                                //   stepTwo: {
                                //     ...prev.stepTwo,
                                //     buildingInput: true,
                                //   },
                                // }));
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
                              id="input-validation-building"
                              onChange={(event) => {
                                setSendData((prevSendData) => [
                                  {
                                    ...prevSendData[0],
                                    category: {
                                      ...prevSendData[0].category,
                                    },
                                    condition: {
                                      ...prevSendData[0].condition,
                                      condition: event.target.value,
                                    },
                                    works: {
                                      ...prevSendData[0].works,
                                    },
                                  },
                                ]);
                                // setValidate((prev) => ({
                                //   ...prev,
                                //   stepTwo: {
                                //     ...prev.stepTwo,
                                //     buildingInput: true,
                                //   },
                                // }));
                              }}
                              onBlur={validationHandler}
                              className="form-check-input"
                              type="radio"
                              name="category"
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
                            id="input-validation"
                            onChange={(event) =>
                              setSendData((prevSendData) => [
                                {
                                  ...prevSendData[0],
                                  category: {
                                    ...prevSendData[0].category,
                                  },
                                  condition: {
                                    ...prevSendData[0].condition,
                                    currentCondition: event.target.value,
                                  },
                                  works: {
                                    ...prevSendData[0].works,
                                  },
                                },
                              ])
                            }
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
                            id="input-validation"
                            onChange={(event) =>
                              setSendData((prevSendData) => [
                                {
                                  ...prevSendData[0],
                                  category: {
                                    ...prevSendData[0].category,
                                  },
                                  condition: {
                                    ...prevSendData[0].condition,
                                    currentCondition: event.target.value,
                                  },
                                  works: {
                                    ...prevSendData[0].works,
                                  },
                                },
                              ])
                            }
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
                            id="input-validation"
                            onChange={(event) =>
                              setSendData((prevSendData) => [
                                {
                                  ...prevSendData[0],
                                  category: {
                                    ...prevSendData[0].category,
                                  },
                                  condition: {
                                    ...prevSendData[0].condition,
                                    currentCondition: event.target.value,
                                  },
                                  works: {
                                    ...prevSendData[0].works,
                                  },
                                },
                              ])
                            }
                            onBlur={validationHandler}
                            className="form-check-input"
                            type="radio"
                            name="framework"
                            defaultValue={"მწვანე კარკასი"}
                          />
                        </span>
                      </label>
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
                          setSendData((prevSendData) => [
                            {
                              ...prevSendData[0],
                              category: {
                                ...prevSendData[0].category,
                              },
                              condition: {
                                ...prevSendData[0].condition,
                              },
                              works: {
                                ...prevSendData[0].works,
                                objectName: event.target.value,
                              },
                            },
                          ]);
                          // validationHandler;
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
                              {categories && categories.map((item, index) => {
                                return (
                                  <div key={index} className="form-check form-check-custom form-check-solid mb-2">
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
                            {/* $#$#$#$#$ */}
                          </div>
                          <div className="col-6">
                            {/* <div className="d-flex flex-column">
                              <div className="form-check form-check-custom form-check-solid mb-2">
                                <input
                                  onBlur={validationHandler}
                                  onChange={handleCheckboxChange}
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue="გათბობა, გაგრილება"
                                />
                                <label
                                  onClick={(e) => e.preventDefault()}
                                  className="form-check-label georgian"
                                >
                                  გათბობა, გაგრილება
                                </label>
                              </div>
                              <div className="form-check form-check-custom form-check-solid mb-2">
                                <input
                                  onBlur={validationHandler}
                                  onChange={handleCheckboxChange}
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue="ელექტროობა"
                                />
                                <label
                                  onClick={(e) => e.preventDefault()}
                                  className="form-check-label georgian"
                                >
                                  ელექტროობა
                                </label>
                              </div>
                              <div className="form-check form-check-custom form-check-solid mb-2">
                                <input
                                  onBlur={validationHandler}
                                  onChange={handleCheckboxChange}
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue="ფილის დაგება/გაკვრა"
                                />
                                <label
                                  onClick={(e) => e.preventDefault()}
                                  className="form-check-label georgian"
                                >
                                  ფილის დაგება/გაკვრა
                                </label>
                              </div>
                              <div className="form-check form-check-custom form-check-solid mb-2">
                                <input
                                  onBlur={validationHandler}
                                  onChange={handleCheckboxChange}
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue="სამღებრო სამუშაოები"
                                />
                                <label
                                  onClick={(e) => e.preventDefault()}
                                  className="form-check-label georgian"
                                >
                                  სამღებრო სამუშაოები
                                </label>
                              </div>
                              <div className="form-check form-check-custom form-check-solid mb-2">
                                <input
                                  onBlur={validationHandler}
                                  onChange={handleCheckboxChange}
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue="იატაკის საფარი"
                                />
                                <label
                                  onClick={(e) => e.preventDefault()}
                                  className="form-check-label georgian"
                                >
                                  იატაკის საფარი
                                </label>
                              </div>
                              <div className="form-check form-check-custom form-check-solid mb-2">
                                <input
                                  onBlur={validationHandler}
                                  onChange={handleCheckboxChange}
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue="კარ-ფანჯარა"
                                />
                                <label
                                  onClick={(e) => e.preventDefault()}
                                  className="form-check-label georgian"
                                >
                                  კარ-ფანჯარა
                                </label>
                              </div>
                              <div className="form-check form-check-custom form-check-solid mb-2">
                                <input
                                  onBlur={validationHandler}
                                  onChange={handleCheckboxChange}
                                  className="form-check-input"
                                  type="checkbox"
                                  defaultValue="დალაგება"
                                />
                                <label
                                  onClick={(e) => e.preventDefault()}
                                  className="form-check-label georgian"
                                >
                                  დალაგება
                                </label>
                              </div>
                            </div> */}
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
