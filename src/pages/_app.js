import "../styles/main/style.bundle.css"
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import store, { persistor } from "../store/store"
import Layout from "../components/layout/Layout";
import { PersistGate } from "redux-persist/integration/react";
import { SessionProvider } from "next-auth/react"
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <Layout>
           <SessionProvider session={session}>
              <Component {...pageProps} />
            </SessionProvider>
          </Layout>
        <ToastContainer />
      </PersistGate>
    </Provider>
  );
}
