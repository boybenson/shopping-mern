import { configureStore } from "@reduxjs/toolkit";
import { default as authReducer } from "./auth/signin-slice";
import { default as signupReducer } from "./auth/signup-slice";
import { default as cartReducer } from "./cart/cart-slice";
import { default as specificCategoryReducer } from "./food/specific-category-slice";
import { default as updateUserReducer } from "./user/update-user-slice";
import { default as fetchAllCustomersReducer } from "./user/all-customers-slice";
import { default as createFoodReducer } from "./food/create-food-slice";
import { default as checkoutReducer } from "./checkout/checkout-slice";
import { default as myOrdersReducer } from "./order/my-orders-slice";
import { default as specificOrderReducer } from "./order/specific-order-slice";
import { default as allOrdersReducer } from "./order/all-orders-slice";
import { default as deliverOrderReducer } from "./order/deliver-order-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    signup: signupReducer,
    specificCategory: specificCategoryReducer,
    updateUser: updateUserReducer,
    allCustomers: fetchAllCustomersReducer,
    createFood: createFoodReducer,
    checkout: checkoutReducer,
    myOrders: myOrdersReducer,
    specificOrder: specificOrderReducer,
    allOrders: allOrdersReducer,
    deliverOrder: deliverOrderReducer,
  },
});

export default store;
