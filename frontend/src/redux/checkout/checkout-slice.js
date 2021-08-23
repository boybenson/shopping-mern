import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

export const checkoutRequest = createAsyncThunk(
  "checkout/checkout",
  async (cartInfo) => {
    const config = {
      headers: {
        Authorization: `Bearer ${Cookies.get("accessToken")}`,
      },
    };

    const res = await axios.post(
      "/api/v1/order/create-order",
      cartInfo,
      config
    );
    return res?.data;
  }
);

const checkoutSlice = createSlice({
  name: "checkout",
  initialState: {
    checkoutInfo: null,
    status: null,
    errorInfo: null,
  },
  reducers: {
    checkout: (state, action) => {
      state.checkoutInfo = action.payload;
      state.status = "success";
      state.errorInfo = null;
    },
    checkoutError: (state, action) => {
      state.checkoutInfo = null;
      state.status = "failed";
      state.errorInfo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(checkoutRequest.pending, (state, action) => {
      state.checkoutInfo = null;
      state.status = "loading";
      state.errorInfo = null;
    });

    builder.addCase(checkoutRequest.fulfilled, (state, action) => {
      state.checkoutInfo = null;
      state.status = "loading";
      state.errorInfo = null;
    });

    builder.addCase(checkoutRequest.rejected, (state, action) => {
      state.checkoutInfo = null;
      state.status = "failed";
      state.errorInfo = action.payload;
    });
  },
});

const { actions, reducer } = checkoutSlice;

export const { checkout, checkoutError } = actions;

export default reducer;
