import { configureStore } from "@reduxjs/toolkit";
import { default as authReducer } from "./auth/auth-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
