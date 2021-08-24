import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

export const fetchMyOrdersRequest = createAsyncThunk(
  "myOrders/fetchMyOrders",
  async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${Cookies.get("accessToken")}`,
      },
    };

    const res = await axios.get("/api/v1/order/fetch-my-orders", config);
    return res?.data;
  }
);

const myOrdersSlice = createSlice({
  name: "myOrders",
  initialState: {
    myOrders: null,
    status: null,
    errorInfo: null,
  },
  reducers: {
    fetchMyOrders: (state, action) => {
      state.myOrders = action.payload;
      state.status = "success";
      state.errorInfo = null;
    },
    fetchMyOrdersError: (state, action) => {
      state.myOrders = null;
      state.status = "failed";
      state.errorInfo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMyOrdersRequest.pending, (state, action) => {
      state.myOrders = null;
      state.status = "loading";
      state.errorInfo = null;
    });

    builder.addCase(fetchMyOrdersRequest.fulfilled, (state, action) => {
      state.myOrders = null;
      state.status = "loading";
      state.errorInfo = null;
    });

    builder.addCase(fetchMyOrdersRequest.rejected, (state, action) => {
      state.myOrders = null;
      state.status = "failed";
      state.errorInfo = action.payload;
    });
  },
});

const { actions, reducer } = myOrdersSlice;

export const { fetchMyOrders, fetchMyOrdersError } = actions;

export default reducer;
