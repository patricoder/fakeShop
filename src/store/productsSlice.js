import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialValue = {
  products: [],
  status: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const selectAllProducts = (state) => state.products.products;
export const getPostsStatus = (state) => state.products.status;
export const getPostError = (state) => state.products.error;

// reducers

export const {} = postsSlice.actions;
