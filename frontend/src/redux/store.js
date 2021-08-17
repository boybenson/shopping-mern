import { configureStore } from "@reduxjs/toolkit";
import { default as authReducer } from "./auth/signin-slice";
import { default as signupReducer } from "./auth/signup-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    signup: signupReducer,
  },
});

export default store;
