import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

export const fetchAllCustomersRequest = createAsyncThunk(
  "customers/fetchCustomers",
  async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${Cookies.get("accessToken")}`,
      },
    };
    const res = await axios.get("/api/v1/user/fetch-all-users", config);
    return res?.data;
  }
);

const fetchAllCustomersSlice = createSlice({
  name: "customers",
  initialState: {
    allCustomers: null,
    status: null,
    errorInfo: null,
  },
  reducers: {
    fetchAllCustomers: (state, action) => {
      state.allCustomers = action.payload;
      state.status = "success";
      state.errorInfo = null;
    },
    fetchAllCustomersError: (state, action) => {
      state.allCustomers = null;
      state.status = "failed";
      state.errorInfo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllCustomersRequest.pending, (state, action) => {
      state.allCustomers = null;
      state.status = "loading";
      state.errorInfo = null;
    });

    builder.addCase(fetchAllCustomersRequest.fulfilled, (state, action) => {
      state.allCustomers = null;
      state.status = "loading";
      state.errorInfo = null;
    });

    builder.addCase(fetchAllCustomersRequest.rejected, (state, action) => {
      state.allCustomers = null;
      state.status = "failed";
      state.errorInfo = action.payload;
    });
  },
});

const { actions, reducer } = fetchAllCustomersSlice;

export const { fetchAllCustomers, fetchAllCustomersError } = actions;

export default reducer;
