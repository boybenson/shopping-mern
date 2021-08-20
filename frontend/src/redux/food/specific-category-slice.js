import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSPecificCategoryFoodsRequest = createAsyncThunk(
  "specificCategory/fetchSPecificCategoryFoods",
  async (categoryName) => {
    const res = await axios.get(`/api/v1/foods/category/${categoryName}`);
    return res.data;
  }
);

const specificCategorySlice = createSlice({
  name: "specificCategory",
  initialState: {
    status: null,
    foods: [],
    errorInfo: null,
  },
  reducers: {
    fetchSPecificCategoryFoods: (state, action) => {
      state.foods = action.payload;
      state.status = "success";
      state.errorInfo = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchSPecificCategoryFoodsRequest.pending,
      (state, action) => {
        state.foods = [];
        state.status = "loading";
        state.errorInfo = null;
      }
    );
    builder.addCase(
      fetchSPecificCategoryFoodsRequest.fulfilled,
      (state, action) => {
        state.foods = [];
        state.status = "loading";
        state.errorInfo = null;
      }
    );
    builder.addCase(
      fetchSPecificCategoryFoodsRequest.rejected,
      (state, action) => {
        state.foods = [];
        state.status = "failed";
        state.errorInfo = action.payload;
      }
    );
  },
});

const { actions, reducer } = specificCategorySlice;

export const { fetchSPecificCategoryFoods } = actions;

export default reducer;
