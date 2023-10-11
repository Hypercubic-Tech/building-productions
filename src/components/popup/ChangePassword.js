import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAuthAccessToken } from "../../store/slices/authSlice";
import notify from "../../utils/notify";
import axios from "axios";
import CloseBtn2 from "../svg/CloseBtn2";

import styles from "../popup/RegModal.module.css";

const ChangePassword = ({ setOpenPasswordPopup }) => {
  const [changePassword, setChangePassword] = useState({
    currentPassword: "",
    password: "",
    passwordConfirmation: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    currentPassword: "",
    password: "",
    passwordConfirmation: "",
  });

  const dispatch = useDispatch();
  const userJwt = useSelector((state) => state.auth.access_token);

  const validatePassword = (password) => {
    const uppercaseRegex = /[A-Z]/;
    return password.length >= 9 && uppercaseRegex.test(password);
  };

  const changeUserPassword = async () => {
    setValidationErrors({
      currentPassword: "",
      password: "",
      passwordConfirmation: "",
    });

    let hasErrors = false;

    if (!validatePassword(changePassword.currentPassword)) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        currentPassword:
          "პაროლი უნდა შეიცავდეს მინიმუმ 9 სიმბოლოს და ერთ დიდ ასოს",
      }));
      hasErrors = true;
    }

    if (!validatePassword(changePassword.password)) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        password: "პაროლი უნდა შეიცავდეს მინიმუმ 9 სიმბოლოს და ერთ დიდ ასოს",
      }));
      hasErrors = true;
    }

    if (changePassword.password !== changePassword.passwordConfirmation) {
      setValidationErrors((prevErrors) => ({
        ...prevErrors,
        passwordConfirmation: "პაროლები არ ემთხვევა",
      }));
      hasErrors = true;
    }

    if (hasErrors) {
      return;
    }

    try {
      const res = await axios.post(
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
      );

      const data = res.data;
      dispatch(setAuthAccessToken(data?.jwt));
      notify(false, "მომხმარებლის პაროლი განახლებულია");
      setOpenPasswordPopup(false);
    } catch (error) {
      notify(true, "მომხმარებლის პაროლი განახლება უარყოფილია");
      console.log(error);
    }
  };

  return (
    <div className={`${styles.container}`}>
      <CloseBtn2
        className={styles.closeBtn}
        onClick={() => setOpenPasswordPopup(false)}
        style={{ position: "absolute", top: "10px", right: "10px" }}
      />
      <div className="d-grid gap-2">
        <label className="mt-2">აქტიური პაროლი:</label>
        <input
          style={{
            borderColor: validationErrors.currentPassword
              ? "red"
              : validationErrors.currentPassword === false
              ? "green"
              : "",
          }}
          autoComplete="current-password"
          required
          id="password1"
          className="form-control"
          placeholder="******"
          type="password"
          onChange={(e) => {
            setChangePassword((prevSendData) => ({
              ...prevSendData,
              currentPassword: e.target.value,
            }));
            setValidationErrors((prevErrors) => ({
              ...prevErrors,
              currentPassword: "",
            }));
          }}
        />
        {validationErrors.currentPassword && (
          <p style={{ color: "red" }}>{validationErrors.currentPassword}</p>
        )}
      </div>
      <div className="d-grid gap-2">
        <label className="mt-2">ახალი პაროლი:</label>
        <input
          style={{
            borderColor: validationErrors.password
              ? "red"
              : validationErrors.password === false
              ? "green"
              : "",
          }}
          autoComplete="current-password"
          required
          id="password2"
          className="form-control"
          placeholder="******"
          type="password"
          onChange={(e) => {
            setChangePassword((prevSendData) => ({
              ...prevSendData,
              password: e.target.value,
            }));
            setValidationErrors((prevErrors) => ({
              ...prevErrors,
              password: "",
            }));
          }}
        />
        {validationErrors.password && (
          <p style={{ color: "red" }}>{validationErrors.password}</p>
        )}
      </div>
      <div className="d-grid gap-2">
        <label className="mt-2">დაადასტურეთ პაროლი:</label>
        <input
          style={{
            borderColor: validationErrors.passwordConfirmation
              ? "red"
              : validationErrors.passwordConfirmation === false
              ? "green"
              : "",
          }}
          autoComplete="current-password"
          required
          id="password3"
          className="form-control"
          placeholder="******"
          type="password"
          onChange={(e) => {
            setChangePassword((prevSendData) => ({
              ...prevSendData,
              passwordConfirmation: e.target.value,
            }));
            setValidationErrors((prevErrors) => ({
              ...prevErrors,
              passwordConfirmation: "",
            }));
          }}
        />

        {validationErrors.passwordConfirmation && (
          <p style={{ color: "red" }}>
            {validationErrors.passwordConfirmation}
          </p>
        )}
      </div>
      <button
        className={` btn btn-success georgian ${styles.btn}`}
        type="button"
        onClick={changeUserPassword}
      >
        პაროლის შეცვლა
      </button>
    </div>
  );
};

export default ChangePassword;
