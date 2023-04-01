import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

function Layout({ children }) {
  return (
    <>
      <Footer />
      <main>{children}</main>
      <Header />
    </>
  );
}

export default Layout;
