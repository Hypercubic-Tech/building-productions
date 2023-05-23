import { useState } from "react";
import axios from "axios";

import notify from "../../utils/notify";
import styles from "../popup/RegModal.module.css";

const RegModal = ({ handleRegistration, onClose }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password, fullName } = event.target.elements;
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/auth/local/register`, {
        email: email.value,
        password: password.value,
        username: fullName.value,
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
    <div className={`${styles.container}`}>
      <form onSubmit={handleSubmit}>
        <div className="col">
          <div className="d-flex justify-content-between align-items-center">
            <div className="text-muted">პროფილის შექმნა</div>
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
            <label className="mt-2">Full name</label>
            <input
              autoComplete="username"
              required
              id="fullName"
              className="form-control"
              placeholder="Your name"
              type="text"
              value={fullName}
              onChange={handleNameChange}
            />
          </div>
          <div className="d-grid gap-2 mt-n1">
            <label className="mt-2">Email:</label>
            <input
              autoComplete="email"
              required
              id="email"
              className="form-control"
              placeholder="Email"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="d-grid gap-2">
            <label className="mt-2">Password:</label>
            <input
              autoComplete="current-password"
              required
              id="password"
              className="form-control"
              placeholder="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />

            <button
              className={` btn btn-success georgian ${styles.btn}`}
              type="submit"
            >
              რეგისტრაცია
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegModal;
