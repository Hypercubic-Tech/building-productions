import "@/styles/main/style.bundle.css";
import "../../public/assets/plugins/global/plugins.bundle.css";
import Layout from "../components/layout/Layout";

// import "@/styles/main/bpg-arial-caps.css"
// import "@/styles/main/style.bundle.rtl.css";
// import "@/styles/main/style.dark.bundle.css";
// import "@/styles/main/style.dark.bundle.rtl.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
