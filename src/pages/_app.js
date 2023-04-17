import "@/styles/main/style.bundle.css";
import "../../public/assets/plugins/global/plugins.bundle.css";
import Layout from "../components/layout/Layout";
import { useState, useEffect } from "react";

// import "@/styles/main/bpg-arial-caps.css";
// import "@/styles/main/style.bundle.rtl.css";
// import "@/styles/main/style.dark.bundle.css";
// import "@/styles/main/style.dark.bundle.rtl.css";

export default function App({ Component, pageProps }) {
  const [ loggedIn, setLoggedIn ] = useState(false);

  useEffect(() => {
    // Perform localStorage action
    if (localStorage.getItem('access_token') && localStorage.getItem('access_token') !== '') {
      setLoggedIn(true);
    }
  }, [])

  return (
    <Layout loggedIn={loggedIn}>
      <Component {...pageProps} />
    </Layout>
  );
}
