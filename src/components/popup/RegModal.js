import styles from "../popup/RegModal.module.css";
import { useState } from "react";
import axios from "../../pages/api/axios";

function RegModal(props) {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    // perform client-side validation before submitting form
    const emailValidationResult = validateEmail(email);
    const passwordValidationResult = validatePassword(password);

    if (!emailValidationResult.isValid) {
      setFormError(emailValidationResult.message);
      return;
    }

    if (!passwordValidationResult.isValid) {
      setFormError(passwordValidationResult.message);
      return;
    }

    // send form data to server for server-side validation
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, confirmPassword }),
    });

    const result = await res.json();

    if (result.success) {
      // handle successful registration
    } else {
      setFormError(result.message);
    }
  };

  const validateEmail = (value) => {
    // validate email format
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(value)) {
      return { isValid: false, message: "Please enter a valid email address" };
    }

    return { isValid: true };
  };

  const validatePassword = (value) => {
    // validate password length
    if (value.length < 6) {
      return {
        isValid: false,
        message: "Password must be at least 6 characters long",
      };
    }

    return { isValid: true };
  };

  //

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  
  return (
    <div className={`${styles.container}`}>
      <form onSubmit={handleSubmit}>
        <div className="col">
          <div className="d-flex justify-content-between align-items-center">
            <div className="text-muted">პროფილის შექმნა</div>
            <svg
              onClick={props.onClose}
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
              id="full-name"
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
              autoComplete="username"
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
}

export default RegModal;
