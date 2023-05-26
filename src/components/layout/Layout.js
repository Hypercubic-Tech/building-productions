import Footer from "../layouts/Footer";
import Header from "../layouts/Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main style={{minHeight: "80vh"}}>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
