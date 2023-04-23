import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "../popup/AuthModal.module.css";
import RegModal from "./RegModal";
import useAxiosPrivate from "@/hooks/useAxiosPrivate";
import {
  setAuthAccessToken,
  setAuthEmail,
  setAuthRole,
  setAuthUserId
} from "@/store/slices/authSlice";

function AuthModal(props) {
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();
  const [showRegModal, setShowRegModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistrationClick = () => {
    setShowRegModal(true);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    axiosPrivate
      .post("/api/login", {
        email,
        password,
      })
      .then((res) => {
        let data = res.data;
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("email", data.email);
        localStorage.setItem("role", data.role);
        localStorage.setItem("userId", data._id);
        dispatch(setAuthAccessToken(data.access_token));
        dispatch(setAuthEmail(data.email));
        dispatch(setAuthRole(data.role));
        dispatch(setAuthUserId(data._id));
        window.location.reload();
      });
  };

  return (
    <>
      <div className={`${styles.container}`}>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="d-flex justify-content-between">
              <div>
                <div className="text-muted">არ ხარ დარეგისტრირებული?</div>
                <div
                  onClick={handleRegistrationClick}
                  className={`${styles.registrationBtn} row `}
                >
                  დარეგისტრირდი
                </div>
              </div>
              <svg
                onClick={props.onClose}
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
                შესვლა
              </button>
            </div>
          </div>
        </form>
        {showRegModal && <RegModal onClose={() => setShowRegModal(false)} />}
      </div>
    </>
  );
}

export default AuthModal;
