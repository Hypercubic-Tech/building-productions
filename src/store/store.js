import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { authSlice } from "./slices/authSlice";
import { projectSlice } from "./slices/projectSlice";
import modalReducer from "./slices/modalSlice";
import headerPopUpReducer from "./slices/headerModalSlice";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage
};

const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  modal: modalReducer,
  headerPopUp: headerPopUpReducer,
  [projectSlice.name]: projectSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const makeStore = () =>
  configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  });

export const wrapper = createWrapper(makeStore);

export const persistor = persistStore(makeStore());
