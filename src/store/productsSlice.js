import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
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
    onSetFilter(state, action) {
      console.log(fetchProducts);
      // const cat = action.payload;
      // const filteredProducts = state.products.filter(
      //   (item) => item.category === cat
      // );
      // state.products = filteredProducts;
      // console.log(filteredProducts, cat);
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
export const getProductsStatus = (state) => state.products.status;
export const getProductsError = (state) => state.products.error;

// reducers

export const { onSetFilter } = productsSlice.actions;
export default productsSlice.reducer;
