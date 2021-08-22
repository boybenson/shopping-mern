import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie";

export const createFoodRequest = createAsyncThunk(
  "createFood/createFood",
  async (foodInfo) => {
    const config = {
      headers: {
        Authorization: `Bearer ${Cookies.get("accessToken")}`,
      },
    };
    const res = await axios.post("/api/v1/foods/create-food", foodInfo, config);
    return res?.data;
  }
);

const createFoodSlice = createSlice({
  name: "createFood",
  initialState: {
    status: null,
    food: null,
    errorInfo: null,
  },
  reducers: {
    createFood: (state, action) => {
      state.foods = action.payload;
      state.status = "success";
      state.errorInfo = null;
    },
    createFoodError: (state, action) => {
      state.foods = null;
      state.status = "failed";
      state.errorInfo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createFoodRequest.pending, (state, action) => {
      state.food = null;
      state.status = "loading";
      state.errorInfo = null;
    });
    builder.addCase(createFoodRequest.fulfilled, (state, action) => {
      state.food = null;
      state.status = "loading";
      state.errorInfo = null;
    });
    builder.addCase(createFoodRequest.rejected, (state, action) => {
      state.food = null;
      state.status = "failed";
      state.errorInfo = action.payload;
    });
  },
});

const { actions, reducer } = createFoodSlice;

export const { createFood, createFoodError } = actions;

export default reducer;
