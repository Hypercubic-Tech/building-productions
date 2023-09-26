import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import notify from "../../utils/notify";
import axios from "axios";
import CloseBtn2 from "../svg/CloseBtn2";
import { setAuthAccessToken } from "../../store/slices/authSlice";

import styles from "../popup/RegModal.module.css";

const ChangePassword = ({ setOpenPasswordPopup }) => {
  const [changePassword, setChangePassword] = useState({
    currentPassword: "",
    password: "",
    passwordConfirmation: "",
  });

  const dispatch = useDispatch();
  const userJwt = useSelector((state) => state.auth.access_token);

  const changeUserPassword = async () => {
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
            borderColor:
              changePassword?.currentPassword?.length <= 0 ? "red" : "",
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
          }}
        />
        {changePassword?.currentPassword?.length < 6 && (
          <p style={{ color: "red" }}>გთხოვთ შეიყვანოთ პაროლი</p>
        )}
      </div>
      <div className="d-grid gap-2">
        <label className="mt-2">ახალი პაროლი:</label>
        <input
          style={{
            borderColor: changePassword?.password?.length <= 0 ? "red" : "",
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
          }}
        />
        {changePassword?.password?.length < 6 && (
          <p style={{ color: "red" }}>გთხოვთ შეიყვანოთ პაროლი</p>
        )}
      </div>
      <div className="d-grid gap-2">
        <label className="mt-2">დაადასტურეთ პაროლი:</label>
        <input
          style={{
            borderColor:
              changePassword?.passwordConfirmation?.length <= 0 ? "red" : "",
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
          }}
        />

        {changePassword?.passwordConfirmation !== changePassword?.password && (
          <span
            style={{
              color:
                changePassword?.passwordConfirmation !==
                changePassword?.password
                  ? "red"
                  : changePassword?.passwordConfirmation ===
                    changePassword?.password
                  ? "green"
                  : "",
            }}
          >
            {changePassword?.passwordConfirmation !==
            changePassword?.password ? (
              <i className="bi bi-x" />
            ) : (
              <i className="bi bi-check2" />
            )}
            პაროლი ან განმეორებითი პაროლი არასწორია!
          </span>
        )}

        {changePassword?.passwordConfirmation?.length < 6 && (
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
  );
};

export default ChangePassword;
