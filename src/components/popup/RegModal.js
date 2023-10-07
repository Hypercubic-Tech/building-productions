import { useState } from "react";
import axios from "axios";

import PriceCard from "../ui/PriceCard";

import notify from "../../utils/notify";
import styles from "../popup/RegModal.module.css";
import CloseBtn2 from "../svg/CloseBtn2";
import CloseBtnBG from "../svg/CloseBtnBG";

const RegModal = ({ handleRegistration, onClose, pricesData }) => {
  const [annual, setAnnual] = useState(false);
  const [monthly, setMonthly] = useState(true);
  const [passwordValid, setPasswordValid] = useState(false);

  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [lossData, setLossData] = useState(false);
  const [paymentPlanState, setPaymentPlanState] = useState(null);
  const [backBtn, setBackBtn] = useState(false);
  const [regData, setRegData] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    userType: "",
    payment_plan: +pricesData[0].id,
    payment_duration: "month",
    paymentMethod: "",
  });
  let errors = {
    stepOne: [],
    stepTwo: [],
    stepThree: [],
  };

  const stepChangeHandler = () => {
    let isStepValid = false;

    if (step === 1) {
      if (
        errors?.stepOne?.length === 0 &&
        regData?.userType &&
        regData?.username &&
        regData?.email.includes("@") &&
        regData?.phoneNumber.length === 9 &&
        passwordValid
      ) {
        isStepValid = true;
      }
    } else if (step === 2) {
      if (errors?.stepTwo?.length === 0 && regData?.payment_plan) {
        isStepValid = true;
      }
    } else if (step === 3) {
      if (errors?.stepThree?.length === 0 && regData?.paymentMethod) {
        isStepValid = true;
      }
    }

    if (isStepValid) {
      setStep(step + 1);
      setLossData(false);
    } else {
      setLossData(true);
    }
  };

  const prevStepHandler = () => {
    if (step > 1) {
      setBackBtn(true);
      setStep(step - 1);
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const {
      username,
      email,
      password,
      phoneNumber,
      userType,
      payment_plan,
      paymentMethod,
      payment_duration,
    } = regData;

    try {
      await axios
        .post(
          `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/auth/local/register`,
          {
            username,
            email,
            password,
            phoneNumber,
            userType,
            payment_plan,
            paymentMethod,
            payment_duration,
          }
        )
        .then(() => {
          notify(false, "თქვენ წარმატებით გაიარეთ რეგისტრაცია");
        });
    } catch (err) {
      notify(
        true,
        "რეგისტრაცია უარყოფილია, იმეილი ან სახელი უკვე გამოყენებულია"
      );
      console.log(err);
    }
    handleRegistration(true);
  };

  const isPasswordValid = (password) => {
    const isLengthValid = password.length >= 9;
    const containsUppercase = /[A-Z]/.test(password);
    const containsOnlyAllowedSymbols =
      /^[a-zA-Z0-9!@#$%^&*()_+[\]{}|<>?~]+$/.test(password);
    const isValid =
      isLengthValid && containsUppercase && containsOnlyAllowedSymbols;

    setPasswordValid(isValid);
  };

  return (
    <div className={`${styles.container}`}>
      <div className={`${getStatusClass(1)} col`}>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <div className="text-muted">რეგისტრაცია</div>
          <CloseBtnBG onClick={onClose} className={`${styles.closeBtn}`} />
        </div>
        <div
          className={`${styles.registrationBtn} ${styles.cursorNone} text-muted `}
        >
          უკვე დარეგისტრირებული ხარ?
        </div>
        <div
          onClick={() => handleRegistration(false)}
          className={`${styles.registrationBtn} ${styles.borderBottom} `}
        >
          სისტემაში შესვლა
        </div>
        <div className="d-grid gap-2 mt-n1">
          <div className="d-grid gap-2 mt-n1">
            <label className="mt-2">მომხმარებლის ტიპი</label>
            <select
              required
              style={{
                borderColor:
                  lossData && regData.userType.length <= 0 ? "red" : "",
              }}
              className="form-select form-select-solid georgian"
              defaultValue="აირჩიეთ მომხმარებლის ტიპი"
              onChange={(e) => {
                setRegData((prevSendData) => ({
                  ...prevSendData,
                  userType: e.target.value,
                }));
              }}
            >
              <option disabled defaultValue="აირჩიეთ მომხმარებლის ტიპი">
                აირჩიეთ მომხმარებლის ტიპი
              </option>
              <option id="1" value="personal">
                პერსონალური
              </option>
              <option id="2" value="company">
                კომპანია
              </option>
            </select>
            {lossData && regData.userType.length <= 0 && (
              <p style={{ color: "red" }}>გთხოვთ აირჩიოთ მომხმარებლის ტიპი</p>
            )}
          </div>
          {regData && (
            <label className="mt-2">
              {regData?.userType === "company"
                ? "კომპანიის სახელი"
                : regData?.userType === "personal"
                ? "სრული სახელი"
                : "სახელი"}
            </label>
          )}
          <input
            style={{
              borderColor: lossData && regData.username.length < 3 ? "red" : "",
            }}
            autoComplete="username"
            required
            id="fullName"
            className="form-control"
            placeholder="სახელი"
            type="text"
            onChange={(e) => {
              setRegData((prevSendData) => ({
                ...prevSendData,
                username: e.target.value,
              }));
            }}
          />
          {lossData && regData.username.length < 3 && (
            <p style={{ color: "red" }}>
              სახელი უნდა შეიცავდეს მინიმუმ 3 სიმბოლოს
            </p>
          )}
        </div>
        <div className="d-grid gap-2 mt-n1">
          <label className="mt-2">იმეილი</label>
          <input
            style={{
              borderColor:
                (lossData && regData.email.length <= 0) ||
                (lossData && !regData.email.includes("@"))
                  ? "red"
                  : "",
            }}
            autoComplete="email"
            required
            id="email"
            className="form-control"
            placeholder="youremail@gmail.com"
            name="email"
            type="email"
            onChange={(e) => {
              setRegData((prevSendData) => ({
                ...prevSendData,
                email: e.target.value,
              }));
            }}
          />
          {lossData && regData.email.length <= 0 ? (
            <p style={{ color: "red" }}>გთხოვთ შეიყვანოთ იმეილი</p>
          ) : lossData && !regData.email.includes("@") ? (
            <p style={{ color: "red" }}>გთხოვთ შეიყვანოთ სწორი იმეილი</p>
          ) : null}
        </div>
        <div className="d-grid gap-2 mt-n1">
          <label className="mt-2">ტელეფონის ნომერი</label>
          <input
            style={{
              borderColor:
                lossData && regData.phoneNumber.length !== 9 ? "red" : "",
            }}
            autoComplete="phoneNumber"
            required
            id="phoneNumber"
            className="form-control"
            placeholder="555555555"
            type="tel"
            pattern="[0-9]{9}"
            onChange={(e) => {
              setRegData((prevSendData) => ({
                ...prevSendData,
                phoneNumber: e.target.value,
              }));
            }}
          />
          {lossData && regData.phoneNumber.length !== 9 && (
            <p style={{ color: "red" }}>გთხოვთ შეიყვანოთ მობილურის ნომერი</p>
          )}
        </div>
        <div className="d-grid gap-2">
          <div style={{ position: "relative" }}>
            <label className="mt-2">პაროლი</label>
            <input
              style={{
                borderColor:
                  lossData && regData.password.length < 6 ? "red" : "",
              }}
              autoComplete="new-password"
              required
              id="password"
              className="form-control"
              placeholder="********"
              type={!showPassword ? "password" : "text"}
              onChange={(e) => {
                setRegData((prevSendData) => ({
                  ...prevSendData,
                  password: e.target.value,
                }));
                isPasswordValid(e.target.value);
              }}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "20px",
                bottom: "10px",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              {!showPassword ? "show" : "hide"}
            </span>
          </div>
          {lossData && !passwordValid && (
            <div>
              {regData.password.length < 9 && (
                <p style={{ color: "red" }}>
                  პაროლი უნდა შეიცავდეს მინიმუმ 9 სიმბოლოს
                </p>
              )}
              {!/[A-Z]/.test(regData.password) && (
                <p style={{ color: "red" }}>
                  პაროლი უნდა შეიცავდეს მინიმუმ ერთ დიდ ასოს (A-Z)
                </p>
              )}
            </div>
          )}
          <button
            className={`fill-btn btn btn-primary georgian  ${styles.btn}`}
            type="button"
            onClick={stepChangeHandler}
          >
            რეგისტრაცია
          </button>
        </div>
      </div>
      <div className={getStatusClass(2)}>
        <div className="col">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <div className="text-muted">რეგისტრაცია</div>
            <CloseBtn2 onClick={onClose} className={`${styles.closeBtn}`} />
          </div>
          <div className="d-grid gap-2 mt-n1">
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
                      setRegData((prevSendData) => ({
                        ...prevSendData,
                        payment_duration: "month",
                      }));
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
                      setRegData((prevSendData) => ({
                        ...prevSendData,
                        payment_duration: "year",
                      }));
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
                    lossData && regData?.payment_plan?.length === 0
                      ? "red"
                      : "",
                }}
                className="form-select form-select-solid georgian"
                defaultValue="აირჩიეთ გადახდის გეგმა"
                onChange={(e) => {
                  setRegData((prevSendData) => ({
                    ...prevSendData,
                    payment_plan: +e.target.value,
                  }));
                  setPaymentPlanState(e.target.value);
                }}
              >
                {pricesData &&
                  pricesData.map((item, index) => {
                    return (
                      <option key={index} value={item.id}>
                        {item.attributes.name}
                      </option>
                    );
                  })}
              </select>
            </div>
            {lossData && regData?.payment_plan?.length === 0 && (
              <p style={{ color: "red" }}>გთხოვთ აირჩიოთ გადახდის გეგმა</p>
            )}
            {regData.payment_plan === 1 && (
              <PriceCard monthly={monthly} priceData={pricesData[0]} />
            )}
            {regData.payment_plan === 2 && (
              <PriceCard monthly={monthly} priceData={pricesData[1]} />
            )}
            {regData.payment_plan === 3 && (
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
                type={regData?.payment_plan === 1 ? "submit" : "button"}
                onClick={() => {
                  if (
                    regData?.payment_plan === 2 ||
                    regData?.payment_plan === 3
                  ) {
                    stepChangeHandler();
                  }
                }}
              >
                {regData?.payment_plan === 1 ? "რეგისტრაცია" : "შემდეგ"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={getStatusClass(3)}>
        <div className="col">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <div className="text-muted">რეგისტრაცია</div>
            <CloseBtn2 onClick={onClose} className={`${styles.closeBtn}`} />
          </div>
          <div className="d-grid gap-2 mt-n1">
            <div className="d-grid gap-2 mt-n1">
              <label className="mt-2">აირჩიეთ გადახდის მეთოდი:</label>
              <select
                required
                style={{
                  borderColor:
                    lossData && regData?.paymentMethod?.length === 0
                      ? "red"
                      : "",
                }}
                className="form-select form-select-solid georgian"
                defaultValue="აირჩიეთ გადახდის მეთოდი"
                onChange={(e) => {
                  setRegData((prevSendData) => ({
                    ...prevSendData,
                    paymentMethod: e.target.value,
                  }));
                }}
              >
                <option disabled value="აირჩიეთ გადახდის მეთოდი">
                  აირჩიეთ გადახდის მეთოდი
                </option>
                <option id="1" value="tbc">
                  TBC
                </option>
              </select>
            </div>
            {lossData && regData?.paymentMethod?.length === 0 && (
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
                onClick={handleSubmit}
              >
                რეგისტრაცია
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegModal;
