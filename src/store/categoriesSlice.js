import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
};

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/products/categories`
      );
      return response.data;
    } catch (err) {
      return err;
    }
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      let arr = action.payload;
      state.data = arr;
    });
  },
});

// reducers

// export const {} = postsSlice.actions;

export const getAllCategories = (state) => state.categories.data;

export default categoriesSlice.reducer;
