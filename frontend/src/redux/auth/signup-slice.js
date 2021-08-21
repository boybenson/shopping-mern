import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userSignUpRequest = createAsyncThunk(
  "auth/userSigUn",
  async (userInfo) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.post(
      "/api/v1/auth/signup",
      {
        fullName: userInfo?.fullName,
        email: userInfo?.email,
        password: userInfo?.password,
        phone: userInfo?.phone,
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
    signupError: (state, action) => {
      state.userInfo = null;
      state.status = "failed";
      state.errorInfo = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(userSignUpRequest.pending, (state, action) => {
      state.userInfo = null;
      state.status = "loading";
      state.errorInfo = null;
    });

    builder.addCase(userSignUpRequest.fulfilled, (state, action) => {
      state.userInfo = null;
      state.status = "loading";
      state.errorInfo = null;
    });

    builder.addCase(userSignUpRequest.rejected, (state, action) => {
      state.userInfo = null;
      state.status = "failed";
      state.errorInfo = action.payload;
    });
  },
});

const { actions, reducer } = authSlice;

export const { signupError } = actions;

export default reducer;
