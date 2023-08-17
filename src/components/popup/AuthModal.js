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
  const [isForgot, setIsForgot] = useState(false);
  const [forgotData, setForgotData] = useState({
    email: ""
  });
  const [authData, setAuthData] = useState({
    identifier: "",
    password: "",
  });
  const dispatch = useDispatch();
  const router = useRouter();

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

  const forgotPassword = async (event) => {
    setIsForgot(true);
    event.preventDefault();
  };

  const forgotPasswordHandler = async (event) => {
    if (forgotData?.email?.length === 0) {
      return setLossData(true);
    }

    await axios.post('https://calcheloba.onrender.com/api/auth/forgot-password', {
      email: forgotData?.email,
      url: 'https://calcheloba.onrender.com/api/auth/reset-password'
    })
      .then((res) => {
        const data = res.data;
        console.log(data)
      })
      .catch((error) => {
        console.log(error);
      })
  };

  const authenticateWithGoogle = () => {
    router.push('https://calcheloba.onrender.com/api/connect/google')
  };

  const authenticateWithFacebook = () => {
    router.push('https://calcheloba.onrender.com/api/connect/facebook')
  };

  return (
    <div className={`${styles.container}`}>
      <form onSubmit={handleSubmit}>

        {!isForgot && <div className="row">
          <div className="d-flex justify-content-between">
            <div className={`row gutter-zero`}>
              <div className="blue">სისტემაში შესვლა</div>
              <div className={`${styles.registrationBtn} ${styles.cursorNone} text-muted `}>
                არ ხარ დარეგისტრირებული?
              </div>
              <div
                onClick={() => handleAuthorization(false)}
                className={`${styles.registrationBtn} ${styles.borderBottom} `}
              >
                დარეგისტრირდი
              </div>
            </div>
            <svg
            onClick={onClose}
            className={styles.closeBtn} width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.4 13.3077L9 9.7077L12.6 13.3077L13.3077 12.6L9.7077 9L13.3077 5.4L12.6 4.6923L9 8.2923L5.4 4.6923L4.6923 5.4L8.2923 9L4.6923 12.6L5.4 13.3077ZM9.00335 18C7.7588 18 6.58872 17.7638 5.4931 17.2915C4.39748 16.8192 3.44444 16.1782 2.63397 15.3685C1.82352 14.5588 1.18192 13.6066 0.70915 12.512C0.236383 11.4174 0 10.2479 0 9.00335C0 7.7588 0.236158 6.58872 0.708475 5.4931C1.18081 4.39748 1.82183 3.44444 2.63153 2.63398C3.44123 1.82353 4.39337 1.18192 5.48795 0.709151C6.58255 0.236384 7.75212 0 8.99665 0C10.2412 0 11.4113 0.236158 12.5069 0.708475C13.6025 1.18081 14.5556 1.82182 15.366 2.63152C16.1765 3.44122 16.8181 4.39337 17.2908 5.48795C17.7636 6.58255 18 7.75212 18 8.99665C18 10.2412 17.7638 11.4113 17.2915 12.5069C16.8192 13.6025 16.1782 14.5556 15.3685 15.366C14.5588 16.1765 13.6066 16.8181 12.512 17.2909C11.4174 17.7636 10.2479 18 9.00335 18Z" fill="#1C1B1F"/>
            </svg>
          </div>
          <div className="d-grid gap-2">
            <label className="blue mt-2 fx">იმეილი</label>
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
            <label className="blue mt-2 fx">პაროლი</label>
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
            <span onClick={forgotPassword} style={{ paddingTop: "5px", cursor: "pointer" }}>დაგავიწყდა პაროლი?</span>
            <button
              className={`fill-btn btn btn-primary georgian ${styles.btn}`}
              type="submit"
            >
              შესვლა
            </button>

            <button
              className={`m-0 btn red-ghost-btn ${styles.btn}`}
              type="button"
              onClick={authenticateWithGoogle}
            >
              <svg style={{ width: '20px', height: '20px', marginRight: '5px' }} xmlns="http://www.w3.org/2000/svg" width="2443" height="2500" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg>
              შესვლა
            </button>
            {/* <button
              className={`m-0 btn btn-primary ${styles.btn}`}
              type="button"
              onClick={authenticateWithFacebook}
            >
              <svg style={{ width: '20px', height: '20px', marginRight: '5px' }} xmlns="http://www.w3.org/2000/svg" data-name="Ebene 1" viewBox="0 0 1024 1024" id="facebook-logo-2019"><path fill="#1877f2" d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"></path><path fill="#fff" d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"></path></svg>
              შესვლა
            </button> */}
          </div>

        </div>}

        {isForgot && <div className="row">
          <div className="d-flex justify-content-between">
            <div>
              <div
                // onClick={() => handleAuthorization(false)}
                className={`${styles.registrationBtn} row `}
              >
                პაროლის აღდგენა
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
              style={{ borderColor: lossData && forgotData?.email?.length <= 0 ? "red" : "" }}
              autoComplete="username"
              id="identifier"
              className="form-control"
              placeholder="youremail@gmail.com"
              type="email"
              onChange={(e) => {
                setForgotData((prevSendData) => ({
                  ...prevSendData,
                  email: e.target.value
                }));
              }}
            />
          </div>
          {lossData && forgotData?.email?.length <= 0 && <p style={{ color: 'red' }}>გთხოვთ შეიყვანოთ იმეილი</p>}
          <div className="d-grid gap-2 mt-2">
            <button
              className={` btn btn-success georgian ${styles.btn}`}
              type="button"
              onClick={forgotPasswordHandler}
            >
              გაგზავნა
            </button>
          </div>
        </div>}
      </form>
    </div>
  );
};

export default AuthModal;
