import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAuthState, setAuthState } from "../../store/slices/authSlice";
import { useSession } from "next-auth/react";

import HeaderLogged from "./HeaderLogged";
import DefaultHeader from "./DefaultHeader";

function Header() {
  const [header, setHeader] = useState(null);
  const loggedIn = useSelector(selectAuthState);
  const dispatch = useDispatch();
  const { data: session } = useSession();

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");

    if (accessToken && accessToken !== "") {
      dispatch(setAuthState(true));
    } 
  }, [dispatch]);

  useEffect(() => {
    if (session && session.user) {
      dispatch(setAuthState(true));
    } else {
      dispatch(setAuthState(false));
    }
  }, [session, dispatch]);

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

  return <>{header}</>;
}

export default Header;
