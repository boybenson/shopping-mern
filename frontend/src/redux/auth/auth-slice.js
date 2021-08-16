import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userSignInRequest = createAsyncThunk(
  "auth/userSigIn",
  async (userInfo) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    console.log(userInfo);
    const res = await axios.post(
      "http://localhost:8080/api/v1/auth/signin",
      {
        email: userInfo.email,
        password: userInfo.password,
      },
      config
    );
    return res.data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userInfo: null,
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

export const { signin, signinError } = actions;

export default reducer;
