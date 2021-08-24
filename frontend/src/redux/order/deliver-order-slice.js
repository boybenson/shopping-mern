import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

export const deliverOrderRequest = createAsyncThunk(
  "deliverOrder/deliverOrder",
  async (orderId) => {
    const config = {
      headers: {
        Authorization: `Bearer ${Cookies.get("accessToken")}`,
      },
    };

    const res = await axios.put(
      `/api/v1/order/delivered/${orderId}`,
      orderId,
      config
    );
    return res?.data;
  }
);

const deliverOrderSlice = createSlice({
  name: "deliverOrder",
  initialState: {
    deliveredOrder: null,
    status: null,
    errorInfo: null,
  },
  reducers: {
    deliverOrder: (state, action) => {
      state.deliveredOrder = action.payload;
      state.status = "success";
      state.errorInfo = null;
    },
    deliverOrderError: (state, action) => {
      state.deliveredOrder = null;
      state.status = "failed";
      state.errorInfo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(deliverOrderRequest.pending, (state, action) => {
      state.deliveredOrder = null;
      state.status = "loading";
      state.errorInfo = null;
    });

    builder.addCase(deliverOrderRequest.fulfilled, (state, action) => {
      state.deliveredOrder = null;
      state.status = "loading";
      state.errorInfo = null;
    });

    builder.addCase(deliverOrderRequest.rejected, (state, action) => {
      state.deliveredOrder = null;
      state.status = "failed";
      state.errorInfo = action.payload;
    });
  },
});

const { actions, reducer } = deliverOrderSlice;

export const { deliverOrder, deliverOrderError } = actions;

export default reducer;
