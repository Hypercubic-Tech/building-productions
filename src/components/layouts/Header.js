import DefaultHeader from "./DefaultHeader";
import HeaderLogged from "./HeaderLogged";
import { useSelector, useDispatch } from "react-redux";
import { selectAuthState, setAuthState } from "@/store/slices/authSlice";
import { useEffect } from "react";

function Header() {
  const loggedIn = useSelector(selectAuthState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      localStorage.getItem("access_token") &&
      localStorage.getItem("access_token") !== ""
    ) {
      dispatch(setAuthState(true));
    }
  }, [loggedIn, dispatch]);

  console.log(loggedIn)

  return <>{loggedIn ? <HeaderLogged /> : <DefaultHeader />}</>;
}

export default Header;