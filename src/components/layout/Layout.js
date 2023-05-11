import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
