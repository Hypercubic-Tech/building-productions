import "@/styles/main/style.bundle.css";
import { Provider } from "react-redux";
import { wrapper } from "../store/store";
import "../../public/assets/plugins/global/plugins.bundle.css";
import Layout from "../components/layout/Layout";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "../store/store"
export default function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}
