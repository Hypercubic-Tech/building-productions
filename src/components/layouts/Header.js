import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAuthState, setAuthState } from "../../store/slices/authSlice";
import { useSession } from "next-auth/react";

import HeaderLogged from "./HeaderLogged";
import DefaultHeader from "./DefaultHeader";

import styles from "./HeaderLogged.module.css";

function Header() {
  const [header, setHeader] = useState(null);
  const [animate, setAnimate] = useState(false);
  const [animateWarn, setAnimateWarn] = useState(false);
  const loggedIn = useSelector(selectAuthState);
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const userStatus = useSelector((state) => state.userStatus);

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");

    if ((accessToken && accessToken !== "") || session) {
      dispatch(setAuthState(true));
    } else {
      dispatch(setAuthState(false));
    }
  }, [dispatch, session]);

  useEffect(() => {
    if (loggedIn) {
      setHeader(<HeaderLogged animate={animate}/>);
    } else {
      setHeader(<DefaultHeader animate={animate} />);
    }
  }, [loggedIn, session]);
  useEffect(() => {
    setAnimate(true);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setAnimateWarn(true);
    },500)
  }, []);

  if (!header) {
    return <div></div>;
  }

  return (
    <>
      {header}
      {loggedIn &&
        Number(userStatus.allowed_projects) - Number(userStatus.all_projects) < 3 && Number(userStatus.allowed_projects) - Number(userStatus.all_projects) != 0 ? (
        <div className={`${styles.warningMessage} animateBY ${animateWarn && loggedIn ? 'animate' : ''}`}>
         <div className="container">
           <span className='geo-title'>თქვენი პროექტების დამატების ლიმიტი იწურება, დაგრჩათ{" "}
             {Number(userStatus.allowed_projects) -
                 Number(userStatus.all_projects)}{" "}
             პროექტი, გთხოვთ განაახლოთ გადახდის გეგმა !!!</span>
         </div>
        </div>
      ) : loggedIn && Number(userStatus.allowed_projects) - Number(userStatus.all_projects) ==
        0 ? (
        <div>
          <div className={`${styles.warningMessage} animateBY ${animateWarn  ? 'animate' : ''}`}>
            <div className="container"><span className='geo-title'>თქვენი პროექტების დამატების ლიმიტი ამოიწურა, გთხოვთ გაანახლოთ გადახდის გეგმა !!!</span></div>
          </div>
        </div>
      ) : (
        null
      )}
    </>
  );
}

export default Header;
