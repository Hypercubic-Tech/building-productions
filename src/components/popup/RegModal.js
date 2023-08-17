import { useState } from "react";
import axios from "axios";

import notify from "../../utils/notify";
import styles from "../popup/RegModal.module.css";

const RegModal = ({ handleRegistration, onClose }) => {
  const [step, setStep] = useState(1);
  const [lossData, setLossData] = useState(false);
  const [paymentPlanState, setPaymentPlanState] = useState(null);
  const [backBtn, setBackBtn] = useState(false);
  const [regData, setRegData] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    userType: "",
    paymentPlan: "",
    paymentMethod: "",
  });

  let errors = {
    stepOne: [],
    stepTwo: [],
    stepThree: [],
  };

  const stepChangeHandler = () => {
    if (step === 1 && errors?.stepOne?.length === 0 && regData?.userType && regData?.username && regData?.email && regData?.phoneNumber && regData?.password) {
      setStep(step + 1);
      setLossData(false);
    } else {
      setLossData(true);
    }
    if (step === 2 && errors?.stepTwo?.length === 0 && regData?.paymentPlan) {
      setStep(step + 1);
      setLossData(false);
    }
    if (step === 3 && errors?.stepThree?.length === 0 && regData?.paymentMethod) {
      setStep(step + 1);
      setLossData(false);
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

    const { username, email, password, phoneNumber, userType, paymentPlan, paymentMethod } = regData;

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/auth/local/register`, {
        username, email, password, phoneNumber, userType, paymentPlan, paymentMethod
      })
        .then(() => {
          notify(false, "თქვენ წარმატებით გაიარეთ რეგისტრაცია");
        });
    } catch (err) {
      notify(true, "რეგისტრაცია უარყოფილია, იმეილი ან სახელი უკვე გამოყენებულია");
      console.log(err);
    }
    handleRegistration(true);
  };

  return (
    <div className={`${styles.container}`} >
      <form onSubmit={handleSubmit}>
        <div className={`${getStatusClass(1)} col`}>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <div className="text-muted">რეგისტრაცია</div>
            <svg
              onClick={onClose}
              className={`${styles.closeBtn}`}
              width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.4 13.3077L9 9.7077L12.6 13.3077L13.3077 12.6L9.7077 9L13.3077 5.4L12.6 4.6923L9 8.2923L5.4 4.6923L4.6923 5.4L8.2923 9L4.6923 12.6L5.4 13.3077ZM9.00335 18C7.7588 18 6.58872 17.7638 5.4931 17.2915C4.39748 16.8192 3.44444 16.1782 2.63397 15.3685C1.82352 14.5588 1.18192 13.6066 0.70915 12.512C0.236383 11.4174 0 10.2479 0 9.00335C0 7.7588 0.236158 6.58872 0.708475 5.4931C1.18081 4.39748 1.82183 3.44444 2.63153 2.63398C3.44123 1.82353 4.39337 1.18192 5.48795 0.709151C6.58255 0.236384 7.75212 0 8.99665 0C10.2412 0 11.4113 0.236158 12.5069 0.708475C13.6025 1.18081 14.5556 1.82182 15.366 2.63152C16.1765 3.44122 16.8181 4.39337 17.2908 5.48795C17.7636 6.58255 18 7.75212 18 8.99665C18 10.2412 17.7638 11.4113 17.2915 12.5069C16.8192 13.6025 16.1782 14.5556 15.3685 15.366C14.5588 16.1765 13.6066 16.8181 12.512 17.2909C11.4174 17.7636 10.2479 18 9.00335 18Z" fill="#1C1B1F"/>
            </svg>
          </div>
          <div className={`${styles.registrationBtn} ${styles.cursorNone} text-muted `}>
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
                style={{ borderColor: lossData && regData.userType.length <= 0 ? "red" : "" }}
                className="form-select form-select-solid georgian"
                defaultValue="აირჩიეთ მომხმარებლის ტიპი"
                onChange={(e) => {
                  setRegData((prevSendData) => ({
                    ...prevSendData,
                    userType: e.target.value
                  }));
                }}
              >
                <option disabled defaultValue="აირჩიეთ მომხმარებლის ტიპი">აირჩიეთ მომხმარებლის ტიპი</option>
                <option id="1" value="personal">პერსონალური</option>
                <option id="2" value="company">კომპანია</option>
              </select>
              {lossData && regData.userType.length <= 0 && <p style={{ color: 'red' }}>გთხოვთ აირჩიოთ მომხმარებლის ტიპი</p>}
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
              style={{ borderColor: lossData && regData.username.length < 3 ? "red" : "" }}
              autoComplete="username"
              required
              id="fullName"
              className="form-control"
              placeholder="სახელი"
              type="text"
              onChange={(e) => {
                setRegData((prevSendData) => ({
                  ...prevSendData,
                  username: e.target.value
                }))
              }}
            />
            {lossData && regData.username.length < 3 && <p style={{ color: 'red' }}>სახელი უნდა შეიცავდეს მინიმუმ 3 სიმბოლოს</p>}
          </div>
          <div className="d-grid gap-2 mt-n1">
            <label className="mt-2">იმეილი</label>
            <input
              style={{ borderColor: lossData && regData.email.length <= 0 ? "red" : "" }}
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
                  email: e.target.value
                }))
              }}
            />
            {lossData && regData.email.length <= 0 && <p style={{ color: 'red' }}>გთხოვთ შეიყვანოთ იმეილი</p>}
          </div>
          <div className="d-grid gap-2 mt-n1">
            <label className="mt-2">ტელეფონის ნომერი</label>
            <input
              style={{ borderColor: lossData && regData.phoneNumber.length !== 9 ? "red" : "" }}
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
                  phoneNumber: e.target.value
                }))
              }}
            />
            {lossData && regData.phoneNumber.length !== 9 && <p style={{ color: 'red' }}>გთხოვთ შეიყვანოთ მობილურის ნომერი</p>}
          </div>
          <div className="d-grid gap-2">
            <label className="mt-2">პაროლი</label>
            <input
              style={{ borderColor: lossData && regData.password.length <= 0 ? "red" : "" }}
              autoComplete="current-password"
              required
              id="password"
              className="form-control"
              placeholder="******"
              type="password"
              onChange={(e) => {
                setRegData((prevSendData) => ({
                  ...prevSendData,
                  password: e.target.value
                }))
              }}
            />
            <span
              style={{
                color: lossData && regData.password.length < 6 ? "red" : (regData.password.length >= 6) ? "green" : ""
              }}
            >
              {lossData && regData.password.length < 6 ? <i className="bi bi-x" /> : (regData.password.length >= 6 ? <i className="bi bi-check2" /> : "")}
              პაროლი უნდა შეიცავდეს მინიმუმ 6 სიმბოლოს
            </span>
            {lossData && regData.password.length < 6 && <p style={{ color: 'red' }}>გთხოვთ შეიყვანოთ პაროლი</p>}
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
                <label className="mt-2">აირჩიეთ გადახდის გეგმა:</label>
                <select
                  required
                  style={{ borderColor: lossData && regData?.paymentPlan?.length === 0 ? "red" : "" }}
                  className="form-select form-select-solid georgian"
                  defaultValue="აირჩიეთ გადახდის გეგმა"
                  onChange={(e) => {
                    setRegData((prevSendData) => ({
                      ...prevSendData,
                      paymentPlan: e.target.value
                    }));
                    setPaymentPlanState(e.target.value)
                  }}
                >
                  <option disabled defaultValue="აირჩიეთ გადახდის გეგმა">აირჩიეთ გადახდის გეგმა</option>
                  <option id="1" value="free">უფასო</option>
                  <option id="2" value="paid">ფასიანი</option>
                </select>
              </div>
              {lossData && regData?.paymentPlan?.length === 0 && <p style={{ color: 'red' }}>გთხოვთ აირჩიოთ გადახდის გეგმა</p>}
              <div className="d-flex justify-content-evenly">
                <button
                  className={` btn btn-success georgian ${styles.btn}`}
                  type="button"
                  onClick={prevStepHandler}
                  style={{
                    display: step === 1 ? "none" : "",
                    width: "43%"
                  }}
                >
                  უკან
                </button>
                <button
                  style={{ width: "43%" }}
                  className={` btn btn-success georgian ${styles.btn}`}
                  type={regData?.paymentPlan === "free" ? 'submit' : 'button'}
                  onClick={() => {
                    if (regData?.paymentPlan === "paid") {
                      stepChangeHandler();
                    } else if (regData?.paymentPlan.length === 0) {
                      stepChangeHandler();
                    }
                  }}
                >
                  {regData?.paymentPlan === "free" ? 'რეგისტრაცია' : 'შემდეგ'}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={getStatusClass(3)}>
          <div className="col">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <div className="text-muted">რეგისტრაცია</div>
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
                <label className="mt-2">აირჩიეთ გადახდის მეთოდი:</label>
                <select
                  required
                  style={{ borderColor: lossData && regData?.paymentMethod?.length === 0 ? "red" : "" }}
                  className="form-select form-select-solid georgian"
                  defaultValue="აირჩიეთ გადახდის მეთოდი"
                  onChange={(e) => {
                    setRegData((prevSendData) => ({
                      ...prevSendData,
                      paymentMethod: e.target.value
                    }));
                  }}
                >
                  <option disabled value="აირჩიეთ გადახდის მეთოდი">აირჩიეთ გადახდის მეთოდი</option>
                  <option id="1" value="tbc">TBC</option>
                </select>
              </div>
              {lossData && regData?.paymentMethod?.length === 0 && <p style={{ color: 'red' }}>გთხოვთ აირჩიოთ გადახდის მეთოდი</p>}
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
                  type={regData?.paymentMethod?.length === 0 ? "button" : "submit"}
                  onClick={() => regData?.paymentMethod?.length === 0 ? stepChangeHandler() : ""}
                >
                  რეგისტრაცია
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegModal;
