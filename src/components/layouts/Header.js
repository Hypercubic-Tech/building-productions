import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAuthState, setAuthState } from "../../store/slices/authSlice";

import HeaderLogged from "./HeaderLogged";
import DefaultHeader from "./DefaultHeader";

function Header() {
  const [header, setHeader] = useState(null);
  const loggedIn = useSelector(selectAuthState);
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");

    if (accessToken && accessToken !== "") {
      dispatch(setAuthState(true));
    }
  }, [dispatch]);

  useEffect(() => {
    if (loggedIn) {
      setHeader(<HeaderLogged />);
    } else {
      setHeader(<DefaultHeader />);
    }
  }, [loggedIn])

  if (!header) {
    return <div></div>;
  }

  return <>{header}</>;
}

export default Header;
