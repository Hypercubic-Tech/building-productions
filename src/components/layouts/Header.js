import DefaultHeader from "./DefaultHeader";
import HeaderLogged from "./HeaderLogged";

function Header({ loggedIn }) {
  return <>{loggedIn ? <DefaultHeader  /> : <HeaderLogged />}</>;
  // return <HeaderLogged />;
}

export default Header;
