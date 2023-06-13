import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const { id_token } = router.query;
  console.log(id_token)

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

  const authenticateWithGoogle = async () => {
    router.push('http://localhost:1377/api/connect/google')
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
          <div className="d-grid gap-2">
            <button
              className={` btn btn-success georgian ${styles.btn}`}
              type="submit"
            >
              შესვლა
            </button>

            <button
              className={`m-0 btn btn-danger ${styles.btn}`}
              type="button"
              onClick={authenticateWithGoogle}
              style={{ background: '#ff6363' }}
            >
              <svg style={{ width: '20px', height: '20px', marginRight: '5px' }} xmlns="http://www.w3.org/2000/svg" width="2443" height="2500" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg>
              შესვლა
            </button>
          </div>

        </div>
      </form>
    </div>
  );
};

export default AuthModal;
