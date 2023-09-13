import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { setAuthAccessToken, setAuthEmail } from "../../store/slices/authSlice";
import notify from "../../utils/notify";

import styles from "../popup/RegModal.module.css";
import PriceCard from "../ui/PriceCard";

const EditAccount = ({ authUser, onClose, loggedUserInfo, pricesData }) => {
  const [annual, setAnnual] = useState(false);
  const [monthly, setMonthly] = useState(true);

  const [step, setStep] = useState(1);
  const [lossData, setLossData] = useState(false);
  const [backBtn, setBackBtn] = useState(false);
  const [cardNumberValue, setCardNumberValue] = useState("");
  const [monthValue, setMonthValue] = useState("");
  const [yearValue, setYearValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [editUserData, setEditUserData] = useState({
    username: authUser[0]?.username,
    email: authUser[0]?.email,
    phoneNumber: authUser[0]?.phoneNumber,
    paymentPlan: authUser[0]?.paymentPlan,
    paymentMethod: authUser[0]?.paymentMethod,
  });

  console.log(authUser,'user')
  const [changePassword, setChangePassword] = useState({
    currentPassword: "",
    password: "",
    passwordConfirmation: "",
  });
  const authUserId = useSelector((state) => state.auth.user_id);
  const userJwt = useSelector((state) => state.auth.access_token);
  const dispatch = useDispatch();

  let errors = {
    stepOne: [],
    stepTwo: [],
    stepThree: [],
    stepFour: [],
  };

  const stepChangeHandler = () => {
    if (
      step === 1 &&
      errors?.stepOne?.length === 0 &&
      editUserData?.username &&
      editUserData?.email &&
      editUserData?.phoneNumber
    ) {
      setStep(step + 1);
      setLossData(false);
    } else {
      setLossData(true);
    }
    if (
      step === 2 &&
      errors?.stepTwo?.length === 0 &&
      editUserData?.paymentPlan
    ) {
      setStep(step + 1);
      setLossData(false);
    }
    if (
      step === 3 &&
      errors?.stepThree?.length === 0 &&
      editUserData?.paymentMethod
    ) {
      setStep(step + 1);
      setLossData(false);
    }
    if (
      step === 4 &&
      errors?.stepFour?.length === 0 &&
      editUserData?.password
    ) {
      setStep(step + 1);
      setLossData(4);
    }
  };

  const prevStepHandler = () => {
    if (step > 1) {
      setBackBtn(true);
      setStep(step - 1);
    }
  };

  const passwordStepHandler = () => {
    if (step === 1) {
      setBackBtn(true);
      setStep(4);
    }
  };

  const getStatusClass = (stepIndex) => {
    if (stepIndex < step) {
      return "d-none";
    } else if (stepIndex === step) {
      return "d-block";
    } else {
      return "d-none";
    }
  };

  const sendUserUpdatedInfo = async () => {
    await axios
      .put(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/users/${authUserId}`, {
        username: editUserData?.username,
        email: editUserData?.email,
        phoneNumber: editUserData?.phoneNumber,
        paymentPlan: editUserData?.paymentPlan,
        paymentMethod: {
          bank: "TBC",
          cardNumber: editUserData?.cardNumber,
          cvc: editUserData?.cvc,
          expiration: {
            month: editUserData?.month,
            year: editUserData?.year,
          },
        },
      })
      .then((res) => {
        const data = res.data;

        dispatch(setAuthEmail(data?.email));
        loggedUserInfo();
        onClose();

        notify(false, "მომხმარებლის ინფორმაცია დარედაქტირდა");
      })
      .catch(() => {
        notify(true, "მომხმარებლის ინფორმაციის რედაქტირება უარყოფილია");
      });
  };

  const changeUserPassword = async () => {
    await axios
      .post(
        `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/auth/change-password`,
        {
          currentPassword: changePassword?.currentPassword,
          password: changePassword?.password,
          passwordConfirmation: changePassword?.passwordConfirmation,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userJwt}`,
          },
        }
      )
      .then((res) => {
        const data = res.data;
        dispatch(setAuthAccessToken(data?.jwt));
        onClose();
        notify(false, "მომხმარებლის პაროლი განახლებულია");
      })
      .catch(() => {
        notify(true, "მომხმარებლის პაროლი განახლება უარყოფილია");
      });
  };

  const isValidCardNumber = (cardNum) => {
    if (/[^0-9-\s]+/.test(cardNum)) return false;

    let cardNumberWithoutDashes = cardNum.replace(/\D/g, "");

    if (cardNumberWithoutDashes.length !== 16) return false;

    let sum = 0;
    let isEven = false;

    for (let i = cardNumberWithoutDashes.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumberWithoutDashes.charAt(i), 10);

      if (isEven) {
        if ((digit *= 2) > 9) digit -= 9;
      }

      sum += digit;
      isEven = !isEven;
    }

    return sum % 10 === 0;
  };

  function formatCardNumber(cardNumber) {
    const numericValue = cardNumber.replace(/\D/g, "");
    const formattedValue = numericValue.replace(/(\d{4})(?=\d)/g, "$1 ");

    return formattedValue;
  };

  console.log(editUserData, 'data finnal')

  return (
    <div className={`${styles.container}`}>
      <form onSubmit={sendUserUpdatedInfo}>
        <div className={`${getStatusClass(1)} col`}>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <div className="text-muted">რედაქტირება</div>
            <svg
              onClick={onClose}
              className={`${styles.closeBtn}`}
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
          <div className="d-grid gap-2 mt-n1">
            {editUserData && (
              <label className="mt-2">
                {editUserData?.userType === "company"
                  ? "კომპანიის სახელი"
                  : editUserData?.userType === "personal"
                    ? "სრული სახელი"
                    : "სახელი"}
              </label>
            )}
            <input
              style={{
                borderColor:
                  lossData && editUserData?.username?.length <= 0 ? "red" : "",
              }}
              autoComplete="username"
              required
              id="fullName"
              className="form-control"
              placeholder="სახელი"
              type="text"
              defaultValue={editUserData?.username}
              onChange={(e) => {
                setEditUserData((prevSendData) => ({
                  ...prevSendData,
                  username: e.target.value,
                }));
              }}
            />
            {lossData && editUserData?.username?.length <= 0 && (
              <p style={{ color: "red" }}>გთხოვთ შეიყვანოთ სახელი</p>
            )}
          </div>
          <div className="d-grid gap-2 mt-n1">
            <label className="mt-2">იმეილი:</label>
            <input
              style={{
                borderColor:
                  lossData && editUserData?.email?.length <= 0 ? "red" : "",
              }}
              autoComplete="email"
              required
              id="email"
              className="form-control"
              placeholder="youremail@gmail.com"
              name="email"
              type="email"
              defaultValue={editUserData?.email}
              onChange={(e) => {
                setEditUserData((prevSendData) => ({
                  ...prevSendData,
                  email: e.target.value,
                }));
              }}
            />
            {lossData && editUserData?.email?.length <= 0 && (
              <p style={{ color: "red" }}>გთხოვთ შეიყვანოთ იმეილი</p>
            )}
          </div>
          <div className="d-grid gap-2 mt-n1">
            <label className="mt-2">ტელეფონის ნომერი:</label>
            <input
              style={{
                borderColor:
                  lossData && editUserData?.phoneNumber?.length !== 9
                    ? "red"
                    : "",
              }}
              autoComplete="phoneNumber"
              required
              id="phoneNumber"
              className="form-control"
              placeholder="555555555"
              type="tel"
              pattern="[0-9]{9}"
              defaultValue={editUserData?.phoneNumber}
              onChange={(e) => {
                setEditUserData((prevSendData) => ({
                  ...prevSendData,
                  phoneNumber: e.target.value,
                }));
              }}
            />
            {lossData && editUserData?.phoneNumber?.length !== 9 && (
              <p style={{ color: "red" }}>გთხოვთ შეიყვანოთ მობილურის ნომერი</p>
            )}
          </div>
          <div className="d-grid gap-2">
            <button
              className={` btn btn-success georgian ${styles.btn}`}
              type="button"
              onClick={stepChangeHandler}
            >
              შემდეგ
            </button>
          </div>
          {authUserId !== null && (
            <span
              onClick={passwordStepHandler}
              className="d-flex justify-content-center align-items-center py-2"
            >
              მომხმარებლის პაროლის შეცვლა
            </span>
          )}
        </div>

        <div className={getStatusClass(2)}>
          <div className="col">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <div className="text-muted">რედაქტირება</div>
              <svg
                onClick={onClose}
                className={`${styles.closeBtn}`}
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
            <div className="d-grid gap-2 mt-n1">
              {/* payment type */}
              {/* <Price pricesData={pricesData} /> */}
              <div className="d-grid gap-2 mt-n1">
                <label className="mt-2">აირჩიეთ გადახდის გეგმა:</label>
                <div className="w-100 justify-content-start d-flex">
                  <div
                    className="buy-wrap nav-group landing-dark-bg d-inline-flex mb-15"
                    data-kt-buttons="true"
                  >
                    <a
                      onClick={() => {
                        setMonthly(true);
                        setAnnual(false);
                      }}
                      className={`buy-btn custom-padding me-2 btn btn-color-gray-600 btn-active btn-active-success me-2 ${[
                        monthly ? "active" : "",
                      ]} `}
                      data-kt-plan="month"
                    >
                      თვე
                    </a>
                    <a
                      onClick={() => {
                        setMonthly(false);
                        setAnnual(true);
                      }}
                      className={`buy-btn custom-padding btn btn-color-gray-600 btn-active btn-active-success ${[
                        annual ? "active" : "",
                      ]} `}
                      data-kt-plan="annual"
                    >
                      წელი
                    </a>
                  </div>
                </div>
                <select
                  required
                  style={{
                    borderColor:
                      lossData && editUserData?.paymentPlan?.length === 0
                        ? "red"
                        : "",
                  }}
                  className="form-select form-select-solid georgian"
                  value={editUserData?.paymentPlan}
                  onChange={(e) => {
                    setEditUserData((prevSendData) => ({
                      ...prevSendData,
                      paymentPlan: e.target.value,
                    }));
                  }}
                >
                  <option disabled defaultValue="აირჩიეთ გადახდის გეგმა">
                    აირჩიეთ გადახდის გეგმა
                  </option>
                  {pricesData && pricesData.map((item, index) => {
                    return (
                      <option key={index} value={item.id}>
                        {item.attributes.name}
                      </option>
                    )
                  })}


                </select>
              </div>
              {lossData && editUserData?.paymentPlan?.length === 0 && (
                <p style={{ color: "red" }}>გთხოვთ აირჩიოთ გადახდის გეგმა</p>
              )}
              {/* here goes templates */}
              {editUserData.paymentPlan === '1' && (
                <PriceCard monthly={monthly} priceData={pricesData[0]} />
              )}
              {editUserData.paymentPlan === '2' && (
                <PriceCard monthly={monthly} priceData={pricesData[1]} />
              )}
              {editUserData.paymentPlan === '3' && (
                <PriceCard monthly={monthly} priceData={pricesData[2]} />
              )}
              <div className="d-flex justify-content-evenly">
                <button
                  className={` btn btn-success georgian ${styles.btn}`}
                  type="button"
                  onClick={prevStepHandler}
                  style={{
                    display: step === 1 ? "none" : "",
                    width: "43%",
                  }}
                >
                  უკან
                </button>
                <button
                  style={{ width: "43%" }}
                  className={` btn btn-success georgian ${styles.btn}`}
                  type={
                    editUserData?.paymentPlan === "free" ? "button" : "button"
                  }
                  onClick={() => {
                    if (editUserData?.paymentPlan === "paid") {
                      stepChangeHandler();
                    } else {
                      sendUserUpdatedInfo();
                    }
                  }}
                >
                  {editUserData?.paymentPlan === "free"
                    ? "რედაქტირება"
                    : "შემდეგ"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={getStatusClass(3)}>
          <div className="col">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <div className="text-muted">რედაქტირება</div>
              <svg
                onClick={onClose}
                className={`${styles.closeBtn}`}
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

            <div className="d-grid gap-2 mt-n1">
              <div className="d-grid gap-2 mt-n1">
                <h2 className="mt-2">Payment Method:</h2>
                <input
                  style={{
                    borderColor:
                      lossData && !isValidCardNumber(cardNumberValue)
                        ? "red"
                        : "",
                  }}
                  required
                  min="0"
                  className={`form-control ${styles.noArrow} ${styles.cardNumberInput}`}
                  placeholder="Card Number"
                  type="text"
                  value={formatCardNumber(cardNumberValue)}
                  onChange={(e) => {
                    let value = e.target.value;
                    value = value.replace(/\D/g, "");

                    if (value.length <= 16) {
                      setCardNumberValue(value);
                      setEditUserData((prevSendData) => ({
                        ...prevSendData,
                        cardNumber: value,
                      }));
                    }
                  }}
                />
                <div style={{ display: "flex", gap: "10px" }}>
                  <input
                    style={{
                      borderColor:
                        lossData && changePassword?.currentPassword?.length <= 0
                          ? "red"
                          : "",
                      width: "50%",
                      fontSize: "18px",
                    }}
                    required
                    min="0"
                    className={`form-control ${styles.noArrow}`}
                    placeholder="CVC"
                    type="number"
                    value={inputValue}
                    onChange={(e) => {
                      let value = e.target.value;
                      if (/^\d{0,3}$/.test(value)) {
                        setInputValue(value);
                      }
                      setEditUserData((prevSendData) => ({
                        ...prevSendData,
                        cvc: value,
                      }));
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      width: "50%",
                      alignItems: "center",
                    }}
                  >
                    <input
                      style={{
                        borderColor:
                          lossData &&
                            changePassword?.currentPassword?.length <= 0
                            ? "red"
                            : "",
                        fontSize: "18px",
                      }}
                      required
                      min="0"
                      max="12"
                      className={`form-control ${styles.noArrow}`}
                      placeholder="Month"
                      type="number"
                      value={monthValue}
                      onChange={(e) => {
                        let value = e.target.value;
                        if (/^\d{0,2}$/.test(value)) {
                          setMonthValue(value);
                        }
                        setEditUserData((prevSendData) => ({
                          ...prevSendData,
                          month: value,
                        }));
                      }}
                    />
                    <div
                      style={{
                        height: "80%",
                        width: "4px",
                        backgroundColor: "grey",
                        transform: "rotate(18deg)",
                      }}
                    ></div>
                    <input
                      style={{
                        borderColor:
                          lossData &&
                            changePassword?.currentPassword?.length <= 0
                            ? "red"
                            : "",
                        fontSize: "18px",
                      }}
                      required
                      min="5"
                      max="99"
                      className={`form-control ${styles.noArrow}`}
                      placeholder="Year"
                      type="number"
                      value={yearValue}
                      onChange={(e) => {
                        let value = e.target.value;
                        if (/^\d{0,2}$/.test(value)) {
                          setYearValue(value);
                        }
                        setEditUserData((prevSendData) => ({
                          ...prevSendData,
                          year: value,
                        }));
                      }}
                    />
                  </div>
                </div>
              </div>
              {lossData && !editUserData?.paymentMethod && (
                <p style={{ color: "red" }}>გთხოვთ აირჩიოთ გადახდის მეთოდი</p>
              )}
              <div className="d-flex align-items-center justify-content-evenly">
                <button
                  className={` btn btn-success georgian ${styles.btn}`}
                  type="button"
                  onClick={prevStepHandler}
                  style={{ width: "35%" }}
                >
                  უკან
                </button>
                <button
                  className={` btn btn-success georgian ${styles.btn}`}
                  type="button"
                  onClick={() =>
                    !editUserData?.paymentMethod
                      ? stepChangeHandler()
                      : sendUserUpdatedInfo()
                  }
                >
                  რედაქტირება
                </button>
              </div>
            </div>
            {authUserId !== null && (
              <div className={getStatusClass(4)}>
                <div className="col">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className="text-muted">რედაქტირება</div>
                    <svg
                      onClick={onClose}
                      className={`${styles.closeBtn}`}
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
                  <div className="d-grid gap-2">
                    <label className="mt-2">აქტიური პაროლი:</label>
                    <input
                      style={{
                        borderColor:
                          lossData &&
                            changePassword?.currentPassword?.length <= 0
                            ? "red"
                            : "",
                      }}
                      autoComplete="current-password"
                      required
                      min="0"
                      id="password"
                      className="form-control"
                      placeholder="******"
                      type="password"
                      onChange={(e) => {
                        setChangePassword((prevSendData) => ({
                          ...prevSendData,
                          currentPassword: e.target.value,
                        }));
                      }}
                    />
                    {lossData &&
                      changePassword?.currentPassword?.length < 6 && (
                        <p style={{ color: "red" }}>გთხოვთ შეიყვანოთ პაროლი</p>
                      )}
                  </div>
                  <div className="d-grid gap-2">
                    <label className="mt-2">ახალი პაროლი:</label>
                    <input
                      style={{
                        borderColor:
                          lossData && changePassword?.password?.length <= 0
                            ? "red"
                            : "",
                      }}
                      autoComplete="current-password"
                      required
                      id="password"
                      className="form-control"
                      placeholder="******"
                      type="password"
                      onChange={(e) => {
                        setChangePassword((prevSendData) => ({
                          ...prevSendData,
                          password: e.target.value,
                        }));
                      }}
                    />
                    <span
                      style={{
                        color:
                          lossData && changePassword?.password?.length < 6
                            ? "red"
                            : changePassword?.password?.length >= 6
                              ? "green"
                              : "",
                      }}
                    >
                      {lossData && changePassword?.password?.length < 6 ? (
                        <i className="bi bi-x" />
                      ) : changePassword?.password?.length >= 6 ? (
                        <i className="bi bi-check2" />
                      ) : (
                        ""
                      )}
                      პაროლი უნდა შეიცავდეს მინიმუმ 6 სიმბოლოს
                    </span>
                    {lossData && changePassword?.password?.length < 6 && (
                      <p style={{ color: "red" }}>გთხოვთ შეიყვანოთ პაროლი</p>
                    )}
                  </div>
                  <div className="d-grid gap-2">
                    <label className="mt-2">დაადასტურეთ პაროლი:</label>
                    <input
                      style={{
                        borderColor:
                          lossData &&
                            changePassword?.passwordConfirmation?.length <= 0
                            ? "red"
                            : "",
                      }}
                      autoComplete="current-password"
                      required
                      id="password"
                      className="form-control"
                      placeholder="******"
                      type="password"
                      onChange={(e) => {
                        setChangePassword((prevSendData) => ({
                          ...prevSendData,
                          passwordConfirmation: e.target.value,
                        }));
                      }}
                    />

                    {lossData &&
                      changePassword?.passwordConfirmation !==
                      changePassword?.password && (
                        <span
                          style={{
                            color:
                              lossData &&
                                changePassword?.passwordConfirmation !==
                                changePassword?.password
                                ? "red"
                                : lossData &&
                                  changePassword?.passwordConfirmation ===
                                  changePassword?.password
                                  ? "green"
                                  : "",
                          }}
                        >
                          {lossData &&
                            changePassword?.passwordConfirmation !==
                            changePassword?.password ? (
                            <i className="bi bi-x" />
                          ) : (
                            <i className="bi bi-check2" />
                          )}
                          პაროლი ან განმეორებითი პაროლი არასწორია!
                        </span>
                      )}

                    {lossData &&
                      changePassword?.passwordConfirmation?.length < 6 && (
                        <p style={{ color: "red" }}>გთხოვთ შეიყვანოთ პაროლი</p>
                      )}

                    <button
                      className={` btn btn-success georgian ${styles.btn}`}
                      type="button"
                      onClick={changeUserPassword}
                    >
                      პაროლის შეცვლა
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditAccount;
