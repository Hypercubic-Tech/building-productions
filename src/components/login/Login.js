import { useState } from "react";
import Registration from "../registration/Registration";
import styles from "../login/Login.module.css";

function Login({ open }) {
  const [showModal, setShowModal] = useState(open);
  const [showSecondModal, setShowSecondModal] = useState(false);

  const handleClick = () => {
    setShowModal(false);
    setShowSecondModal(true);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
  };
  return (
    <>
      {showModal ? (
        <div className={`${styles.container}`}>
          <form onSubmit={handleSubmit}>
            <div className="col">
              <div onClick={handleClick} className={styles.registrationBtn}>
                რეგისტრაცია
              </div>
              <div className="d-grid gap-2">
                <label>Email:</label>
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
                <label>Password:</label>
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
                  Log in
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : null}
      {showSecondModal ? <Registration /> : null}
    </>
  );
}

export default Login;
