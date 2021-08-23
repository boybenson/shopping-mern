import { configureStore } from "@reduxjs/toolkit";
import { default as authReducer } from "./auth/signin-slice";
import { default as signupReducer } from "./auth/signup-slice";
import { default as cartReducer } from "./cart/cart-slice";
import { default as specificCategoryReducer } from "./food/specific-category-slice";
import { default as updateUserReducer } from "./user/update-user-slice";
import { default as createFoodReducer } from "./food/create-food-slice";
import { default as checkoutReducer } from "./checkout/checkout-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    signup: signupReducer,
    specificCategory: specificCategoryReducer,
    updateUser: updateUserReducer,
    createFood: createFoodReducer,
    checkout: checkoutReducer,
  },
});

export default store;
