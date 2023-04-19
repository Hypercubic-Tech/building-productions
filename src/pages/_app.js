import "@/styles/main/style.bundle.css";
import { Provider } from "react-redux";
import { wrapper } from "../store/store";
import "../../public/assets/plugins/global/plugins.bundle.css";
import Layout from "../components/layout/Layout";

// import "@/styles/main/bpg-arial-caps.css";
// import "@/styles/main/style.bundle.rtl.css";
// import "@/styles/main/style.dark.bundle.css";
// import "@/styles/main/style.dark.bundle.rtl.css";

export default function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
