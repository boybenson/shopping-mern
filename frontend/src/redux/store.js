import { configureStore } from "@reduxjs/toolkit";
import { default as authReducer } from "./auth/signin-slice";
import { default as signupReducer } from "./auth/signup-slice";
import { default as cartReducer } from "./cart/cart-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    signup: signupReducer,
  },
});

export default store;
