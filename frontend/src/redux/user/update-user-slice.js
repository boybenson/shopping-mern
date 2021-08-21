import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const updateUserRequest = createAsyncThunk(
  "updateUser/updateUser",
  async (userInfo) => {
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo?.accessToken}`,
      },
    };
    const res = await axios.put("/api/v1/user/updateUser", userInfo, config);
    return res?.data;
  }
);

const updateUserSlice = createSlice({
  name: "updateUser",
  initialState: {
    updatedUserInfo: null,
    status: null,
    errorInfo: null,
  },
  reducers: {
    updateUser: (state, action) => {
      state.updatedUserInfo = action.payload;
      state.status = "success";
      state.errorInfo = null;
    },
    updateUserError: (state, action) => {
      state.updatedUserInfo = null;
      state.status = "failed";
      state.errorInfo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateUserRequest.pending, (state, action) => {
      state.updatedUserInfo = null;
      state.status = "loading";
      state.errorInfo = null;
    });

    builder.addCase(updateUserRequest.fulfilled, (state, action) => {
      state.updatedUserInfo = null;
      state.status = "loading";
      state.errorInfo = null;
    });

    builder.addCase(updateUserRequest.rejected, (state, action) => {
      state.updatedUserInfo = null;
      state.status = "failed";
      state.errorInfo = action.payload;
    });
  },
});

const { actions, reducer } = updateUserSlice;

export const { updateUser, updateUserError } = actions;

export default reducer;
