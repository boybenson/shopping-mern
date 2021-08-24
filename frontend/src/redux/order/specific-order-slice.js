import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

export const fetchSpecificOrderRequest = createAsyncThunk(
  "fetchSpecificOrder/specificOrder",
  async (orderId) => {
    const config = {
      headers: {
        Authorization: `Bearer ${Cookies.get("accessToken")}`,
      },
    };

    const res = await axios.get(
      `/api/v1/order/fetch-a-specific-order/${orderId}`,
      config
    );
    return res?.data;
  }
);

const specificOrderSlice = createSlice({
  name: "specificOrders",
  initialState: {
    orderDetails: null,
    status: null,
    errorInfo: null,
  },
  reducers: {
    fetchSpecificOrder: (state, action) => {
      state.orderDetails = action.payload;
      state.status = "success";
      state.errorInfo = null;
    },
    fetchSpecificOrderError: (state, action) => {
      state.orderDetails = null;
      state.status = "failed";
      state.errorInfo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSpecificOrderRequest.pending, (state, action) => {
      state.orderDetails = null;
      state.status = "loading";
      state.errorInfo = null;
    });

    builder.addCase(fetchSpecificOrderRequest.fulfilled, (state, action) => {
      state.orderDetails = null;
      state.status = "loading";
      state.errorInfo = null;
    });

    builder.addCase(fetchSpecificOrderRequest.rejected, (state, action) => {
      state.myOrders = null;
      state.status = "failed";
      state.errorInfo = action.payload;
    });
  },
});

const { actions, reducer } = specificOrderSlice;

export const { fetchSpecificOrder, fetchSpecificOrderError } = actions;

export default reducer;
