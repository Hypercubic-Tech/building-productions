import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

function Layout({ children, loggedIn }) {
  return (
    <>
      <Header loggedIn={loggedIn} />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
