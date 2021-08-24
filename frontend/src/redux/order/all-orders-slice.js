import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

export const fetchAllOrdersRequest = createAsyncThunk(
  "allOrders/fetchAllOrders",
  async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${Cookies.get("accessToken")}`,
      },
    };

    const res = await axios.get("/api/v1/order/fetch-all-orders", config);
    return res?.data;
  }
);

const allOrdersSlice = createSlice({
  name: "allOrders",
  initialState: {
    allOrders: null,
    status: null,
    errorInfo: null,
  },
  reducers: {
    fetchAllOrders: (state, action) => {
      state.allOrders = action.payload;
      state.status = "success";
      state.errorInfo = null;
    },
    fetchAllOrdersError: (state, action) => {
      state.allOrders = null;
      state.status = "failed";
      state.errorInfo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllOrdersRequest.pending, (state, action) => {
      state.allOrders = null;
      state.status = "loading";
      state.errorInfo = null;
    });

    builder.addCase(fetchAllOrdersRequest.fulfilled, (state, action) => {
      state.allOrders = null;
      state.status = "loading";
      state.errorInfo = null;
    });

    builder.addCase(fetchAllOrdersRequest.rejected, (state, action) => {
      state.allOrders = null;
      state.status = "failed";
      state.errorInfo = action.payload;
    });
  },
});

const { actions, reducer } = allOrdersSlice;

export const { fetchAllOrders, fetchAllOrdersError } = actions;

export default reducer;
