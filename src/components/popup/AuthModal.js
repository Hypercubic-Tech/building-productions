import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import {
  setAuthAccessToken,
  setAuthEmail,
  setAuthRole,
  setAuthUserId,
} from "../../store/slices/authSlice";

import notify from "../../utils/notify";
import styles from "../popup/AuthModal.module.css";

const AuthModal = ({ handleAuthorization, onClose }) => {
  const [lossData, setLossData] = useState(false);
  const [authData, setAuthData] = useState({
    identifier: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (authData?.identifier?.length === 0 || authData?.password?.length === 0) {
      return setLossData(true)
    }

    await axios
      .post(`${process.env.NEXT_PUBLIC_BUILDING_URL}/api/auth/local`, {
        identifier: authData?.identifier,
        password: authData?.password,
      })
      .then((res) => {
        let data = res.data;
        localStorage.setItem("access_token", data.jwt);
        localStorage.setItem("email", data.user.email);
        localStorage.setItem("userId", data.user.id);

        dispatch(setAuthAccessToken(data.jwt));
        dispatch(setAuthEmail(data.user.email));
        dispatch(setAuthRole(data.user.role));
        dispatch(setAuthUserId(data.user.id));

        notify(false, "თქვენ გაიარეთ ავტორიზაცია");
      })
      .catch(() => {
        notify(true, "იმეილი ან პაროლი არასწორია, გთხოვთ ცადოთ თავიდან");
      });
  };

  return (
    <div className={`${styles.container}`}>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="d-flex justify-content-between">
            <div>
              <div className="text-muted">არ ხარ დარეგისტრირებული?</div>
              <div
                onClick={() => handleAuthorization(false)}
                className={`${styles.registrationBtn} row `}
              >
                დარეგისტრირდი
              </div>
            </div>
            <svg
              onClick={onClose}
              className={styles.closeBtn}
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
            <label className="mt-2 fx">იმეილი:</label>
            <input
              style={{ borderColor: lossData && authData?.identifier?.length <= 0 ? "red" : "" }}
              autoComplete="username"
              id="identifier"
              className="form-control"
              placeholder="youremail@gmail.com"
              type="email"
              onChange={(e) => {
                setAuthData((prevSendData) => ({
                  ...prevSendData,
                  identifier: e.target.value
                }));
              }}
            />
          </div>
          {lossData && authData?.identifier?.length <= 0 && <p style={{ color: 'red' }}>გთხოვთ შეიყვანოთ იმეილი</p>}
          <div className="d-grid gap-2">
            <label className="mt-2 fx">პაროლი:</label>
            <input
              style={{ borderColor: lossData && authData?.password?.length <= 0 ? "red" : "" }}
              autoComplete="current-password"
              id="password"
              className="form-control"
              placeholder="******"
              type="password"
              onChange={(e) => {
                setAuthData((prevSendData) => ({
                  ...prevSendData,
                  password: e.target.value
                }));
              }}
            />


          </div>
          {lossData && authData?.password?.length <= 0 && <p style={{ color: 'red' }}>გთხოვთ შეიყვანოთ პაროლი</p>}

          <button
            className={` btn btn-success georgian ${styles.btn}`}
            type="submit"
          >
            შესვლა
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthModal;
