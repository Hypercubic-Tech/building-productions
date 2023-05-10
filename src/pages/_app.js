import "@/styles/main/style.bundle.css";
import { Provider } from "react-redux";
import "../../public/assets/plugins/global/plugins.bundle.css";
import Layout from "../components/layout/Layout";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "../store/store"
export default function App({ Component, ...rest }) {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...rest} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}
