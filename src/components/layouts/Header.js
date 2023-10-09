import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAuthState, setAuthState } from "../../store/slices/authSlice";
import { useSession } from "next-auth/react";

import HeaderLogged from "./HeaderLogged";
import DefaultHeader from "./DefaultHeader";

import styles from "./HeaderLogged.module.css";

function Header() {
  const [header, setHeader] = useState(null);
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
      setHeader(<HeaderLogged />);
    } else {
      setHeader(<DefaultHeader />);
    }
  }, [loggedIn, session]);

  if (!header) {
    return <div></div>;
  }

  return (
    <>
      {header}
      {loggedIn &&
        Number(userStatus.allowed_projects) - Number(userStatus.all_projects) < 3 && Number(userStatus.allowed_projects) - Number(userStatus.all_projects) != 0 ? (
        <div className={styles.warningMessage}>
          თქვენი პროდუქტების დამატების ლიმიტი იწურება, დაგრჩათ{" "}
          {Number(userStatus.allowed_projects) -
            Number(userStatus.all_projects)}{" "}
          პროექტი, გთხოვთ განაახლოთ გადახდის გეგმა !!!
        </div>
      ) : loggedIn && Number(userStatus.allowed_projects) - Number(userStatus.all_projects) ==
        0 ? (
        <div className={styles.warningMessage}>
          თქვენი პროდუქტების დამატების ლიმიტი ამოიწურა, გთხოვთ გაანახლოთ გადახდის გეგმა !!!
        </div>
      ) : (
        null
      )}
    </>
  );
}

export default Header;
