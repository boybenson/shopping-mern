import { createSlice } from "@reduxjs/toolkit";

const fetchCartInfoFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: fetchCartInfoFromLocalStorage,
  },
  reducers: {
    addToCart: (state, { payload }) => {
      state.cartItems.push(payload);
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

const { actions, reducer } = cartSlice;

export const { addToCart } = actions;

export default reducer;
