import { useState } from "react";
import axios from "axios";

import notify from "../../utils/notify";
import styles from "../popup/RegModal.module.css";

const RegModal = ({ handleRegistration, onClose }) => {
  const [step, setStep] = useState(1);
  const [lossData, setLossData] = useState(false);
  const [showSecondTab, setShowSecondTab] = useState(false);
  const [showThirdTab, setShowThirdTab] = useState(false);
  const [paymentPlan, setPaymentPlan] = useState(null);
  const [regData, setRegData] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    userType: "",
    paymentMethod: "",
  });

  const stepChangeHandler = () => {
    if (
      regData.userType.length > 0 &&
      regData.username.length > 0 &&
      regData.email.length > 0 &&
      regData.phoneNumber.length > 0 &&
      regData.password.length > 0
    ) {
      setShowSecondTab(true);
      setLossData(false);
    } else {
      setLossData(true);
    }
  };

  const stepChangeHandler2 = () => {
    if (paymentPlan === "paid") {
      setShowThirdTab(true);
      console.log(showThirdTab, 'showThirdTab')
    }
  };

  const getStatusClass = (step) => {
    return `tab-content ${step === 3 ? 'show active' : ''}`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { username, email, password, phoneNumber, userType, paymentMethod } = regData;

    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/auth/local/register`, {
        username, email, password, phoneNumber, userType, paymentMethod
      })
        .then(() => {
          notify(false, "თქვენ წარმატებით გაიარეთ რეგისტრაცია");
        });
    } catch (err) {
      notify(true, "რეგისტრაცია უარყოფილია, გთხოვთ შეავსოთ ყველა ველი");
      console.log(err);
    }
    handleRegistration(true);
  };

  return (
    <div className={`${getStatusClass(showSecondTab ? 1 : 2)} ${styles.container}`} >
      <form onSubmit={handleSubmit}>
        {showSecondTab ? (
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
                    className="form-select form-select-solid georgian"
                    defaultValue="აირჩიეთ გადახდის გეგმა"
                    onChange={(e) => {
                      console.log(e.target.value)
                      setRegData((prevSendData) => ({
                        ...prevSendData,
                        paymentMethod: e.target.value
                      }));
                      setPaymentPlan(e.target.value)
                    }}
                  >
                    <option disabled value="აირჩიეთ გადახდის მეთოდი">აირჩიეთ გადახდის გეგმა</option>
                    <option id="1" value="free">უფასო</option>
                    <option id="2" value="paid">ფასიანი</option>
                  </select>
                </div>
                <button
                  className={` btn btn-success georgian ${styles.btn}`}
                  type={regData.paymentMethod === "free" ? 'submit' : 'button'}
                  onClick={stepChangeHandler2}

                >
                  {regData.paymentMethod === "free" ? 'რეგისტრაცია' : 'შემდეგ'}
                </button>
              </div>
            </div>
          </div>
        ) : showThirdTab ? (
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
                    className="form-select form-select-solid georgian"
                    defaultValue="აირჩიეთ გადახდის გეგმა"
                    onChange={(e) => {
                      setRegData((prevSendData) => ({
                        ...prevSendData,
                        paymentMethod: e.target.value
                      }));
                    }}
                  >
                    <option disabled value="აირჩიეთ გადახდის მეთოდი">აირჩიეთ გადახდის მეთოდი</option>
                    <option id="1" value="tbc">TBC</option>
                    <option id="2" value="bog">BOG</option>
                  </select>
                </div>
                <button
                  className={` btn btn-success georgian ${styles.btn}`}
                  type="button"
                  onClick={stepChangeHandler2}
                >
                  შემდეგ
                </button>
              </div>
            </div>
          </div>
        ) : (
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
                <label className="mt-2">მომხმარებლის ტიპი:</label>
                <select
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
                  <option disabled defaultValue="აირჩიეთ პაკეტი">აირჩიეთ მომხმარებლის ტიპი</option>
                  <option id="1" value="personal">პერსონალური</option>
                  <option id="2" value="company">კომპანია</option>
                </select>
                {lossData && regData.userType.length <= 0 && <p style={{ color: 'red' }}>გთხოვთ აირჩიოთ მომხმარებლის ტიპი</p>}
              </div>
              {regData && (
                <label className="mt-2">
                  {regData.userType === "კომპანია"
                    ? "კომპანიის სახელი"
                    : regData.userType === "პერსონალური"
                      ? "სრული სახელი"
                      : "სახელი"}
                </label>
              )}
              <input
                style={{ borderColor: lossData && regData.username.length <= 0 ? "red" : "" }}
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
              {lossData && regData.username.length <= 0 && <p style={{ color: 'red' }}>გთხოვთ შეიყვანოთ სახელი</p>}
            </div>
            <div className="d-grid gap-2 mt-n1">
              <label className="mt-2">იმეილი:</label>
              <input
                style={{ borderColor: lossData && regData.email.length <= 0 ? "red" : "" }}
                autoComplete="email"
                required
                id="email"
                className="form-control"
                placeholder="იმეილი"
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
              <label className="mt-2">ტელეფონის ნომერი:</label>
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
              <label className="mt-2">პაროლი:</label>
              <input
                style={{ borderColor: lossData && regData.password.length <= 0 ? "red" : "" }}
                autoComplete="current-password"
                required
                id="password"
                className="form-control"
                placeholder="პაროლი"
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
                  color:
                    (lossData && regData.password.length >= 6) ? "green" :
                      (lossData && regData.password.length < 6 && regData.password.length === 0) ? "red" :
                        ""
                }}
              >
                {lossData && regData.password.length >= 6 ? <i className="bi bi-check2" /> :
                  lossData && regData.password.length <= 6 && regData.password.length === 0 ? <i className="bi bi-x" /> :
                    ""}
                პაროლი უნდა შეიცავდეს მინიმუმ 6 სიმბოლოს
              </span>

              {lossData && regData.password.length < 6 && <p style={{ color: 'red' }}>გთხოვთ შეიყვანოთ პაროლი</p>}
              <button
                className={` btn btn-success georgian ${styles.btn}`}
                type="button"
                onClick={stepChangeHandler}
              >
                შემდეგ
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default RegModal;
