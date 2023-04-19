import DefaultHeader from "./DefaultHeader";
import HeaderLogged from "./HeaderLogged";

function Header({ loggedIn }) {
  return <>{loggedIn ? <HeaderLogged /> : <DefaultHeader />}</>;
}

export default Header;
