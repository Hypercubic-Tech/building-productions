// import DefaultHeader from "./DefaultHeader";
import HeaderLogged from "./HeaderLogged";

function Header({ loggedIn }) {
  // return <>{loggedIn ? <HeaderLogged true /> : <DefaultHeader />}</>;
  return <HeaderLogged true />;
}

export default Header;
