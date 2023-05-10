import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { authSlice } from "./slices/authSlice";
import { projectSlice } from "./slices/projectSlice";
import modalReducer from "./slices/modalSlice";
import headerPopUpReducer from "./slices/headerModalSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      [authSlice.name]: authSlice.reducer,
      modal: modalReducer,
      headerPopUp: headerPopUpReducer,
      [projectSlice.name]: projectSlice.reducer
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
