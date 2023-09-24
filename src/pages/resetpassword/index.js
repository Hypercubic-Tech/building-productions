import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import notify from "../../utils/notify";
import CloseBtn2 from "../../components/svg/CloseBtn2";

import styles from "../../components/popup/AuthModal.module.css";

const RessetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleResetPassword = async (event) => {
    event.preventDefault();
    function getQueryParam(url, param) {
      const queryParams = new URLSearchParams(new URL(url).search);
      return queryParams.get(param);
    }

    const privateCode = getQueryParam(window.location.href, "code");
    console.log(privateCode);

    if (privateCode) {
      axios
        .post(
          `${process.env.NEXT_PUBLIC_BUILDING_URL}/api/auth/reset-password`,
          {
            code: privateCode,
            password: newPassword,
            passwordConfirmation: confirmPassword,
          }
        )
        .then((response) => {
          console.log("Your user's password has been reset.");
          notify(false, "თქვენი პაროლი შეიცვალა");
        })
        .then(() => {
          notify(false, "თქვენი პაროლი შეიცვალა");
          window.location.replace("/");
        })
        .catch((error) => {
          console.log("An error occurred:", error.response);
          notify(true, "პაროლი არ შეიცვალა");
        });
    } else {
      console.log("Private code not found in the URL.");
    }
  };

  return (
    <div className={`${styles.container}`}>
      <Link href="/">
        <CloseBtn2
          style={{ top: "20px", right: "20px", position: "absolute" }}
          className={styles.closeBtn}
        />
      </Link>
      <div className="row">
        <div className="d-grid gap-2">
          <label className="blue mt-2 fx">შეიყვანეთ ახალი პაროლი</label>
          <input
            autoComplete="current-password"
            id="newPassword"
            className="form-control"
            placeholder="******"
            type="password"
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
          />
          <label className="blue mt-2 fx">დაადასტურეთ ახალი პაროლი</label>
          <input
            autoComplete="current-password"
            id="confirmPassword"
            className="form-control"
            placeholder="******"
            type="password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="row">
        <div className="d-grid gap-2 mt-2">
          <button
            className={` btn btn-success georgian ${styles.btn}`}
            type="button"
            onClick={handleResetPassword}
          >
            გაგზავნა
          </button>
        </div>
      </div>
    </div>
  );
};

export default RessetPassword;
