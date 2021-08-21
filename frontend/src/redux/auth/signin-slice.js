import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUserInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

export const userSignInRequest = createAsyncThunk(
  "auth/userSigIn",
  async (userInfo) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(
      "/api/v1/auth/signin",
      {
        email: userInfo.email,
        password: userInfo.password,
      },
      config
    );
    return res?.data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userInfo: fetchUserInfoFromLocalStorage,
    status: null,
    errorInfo: null,
  },
  reducers: {
    signin: (state, action) => {
      state.userInfo = action.payload;
      state.status = "success";
      state.errorInfo = null;
    },
    signinError: (state, action) => {
      state.userInfo = null;
      state.status = "failed";
      state.errorInfo = action.payload;
    },
    signOut: (state, action) => {
      state.userInfo = null;
      state.status = null;
      state.errorInfo = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userSignInRequest.pending, (state, action) => {
      state.userInfo = null;
      state.status = "loading";
      state.errorInfo = null;
    });

    builder.addCase(userSignInRequest.fulfilled, (state, action) => {
      state.userInfo = null;
      state.status = "loading";
      state.errorInfo = null;
    });

    builder.addCase(userSignInRequest.rejected, (state, action) => {
      state.userInfo = null;
      state.status = "failed";
      state.errorInfo = action.payload;
    });
  },
});

const { actions, reducer } = authSlice;

export const { signin, signinError, signOut } = actions;

export default reducer;
