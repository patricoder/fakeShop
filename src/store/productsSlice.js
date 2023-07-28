import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  products: [],
  status: "idle",
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/products`
      );
      return response.data;
    } catch (err) {
      return err;
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsFilter(state, action) {
      state.products = action.payload;
    },
    clearFilters(state, action) {
     
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectAllProducts = (state) => state.products.products;
export const selectAllProductsData = (state) => state.products.data;
export const getProductsStatus = (state) => state.products.status;
export const getProductsError = (state) => state.products.error;

// reducers

export const { productsFilter, clearFilters } = productsSlice.actions;
export default productsSlice.reducer;
