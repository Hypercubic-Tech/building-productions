import "../styles/main/style.bundle.css"
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import store, { persistor } from "../store/store"
import Layout from "../components/layout/Layout";
import { PersistGate } from "redux-persist/integration/react";
export default function App({ Component, ...rest }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...rest} />
        </Layout>
        <ToastContainer />
      </PersistGate>
    </Provider>
  );
}
