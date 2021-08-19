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

    removeFromCart: (state, { payload }) => {
      const newCartItems = state.cartItems.filter((item) => {
        return item._id !== payload._id;
      });
      state.cartItems = newCartItems;
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    },

    increaseQty: (state, { payload }) => {
      const newCartItems = state.cartItems.map((item) => {
        if (item._id === payload._id) {
          item.qtyToBuy += 1;
          return item;
        } else {
          return item;
        }
      });
      state.cartItems = newCartItems;
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    },

    decreaseQty: (state, { payload }) => {
      const newCartItems = state.cartItems.map((item) => {
        if (item._id === payload._id) {
          if (item.qtyToBuy <= 1) {
            item.qtyToBuy = 1;
          } else {
            item.qtyToBuy -= 1;
          }
          return item;
        } else {
          return item;
        }
      });
      state.cartItems = newCartItems;
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    },

    clearCart: (state, action) => {
      localStorage.removeItem("cartItems");
      state.cartItems = [];
    },
  },
});

const { actions, reducer } = cartSlice;

export const {
  addToCart,
  clearCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
} = actions;

export default reducer;
