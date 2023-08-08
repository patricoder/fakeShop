import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IProducts } from "../types/Products.interface";
import { IState } from "../types/State.interface";

const initialState: IProducts = {
  products: [],
  filteredProducts: [],
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
    filterByCategory(state, action) {
      const category = action.payload;
      const filteredArray = state?.products.filter(
        (item) => item.category === category
      );
      state.filteredProducts = filteredArray;
    },
    clearFilters(state, action) {
      console.log("clear");
      state.filteredProducts = state.products;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
        state.filteredProducts = action.payload;
        console.log(action.payload);
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error?.message;
      });
  },
});

export const selectAllProducts = (state: IState) =>
  state.products.filteredProducts;

export const getProductsStatus = (state: IState) => state.products.status;
export const getProductsError = (state: IState) => state.products.error;

// reducers

export const { filterByCategory, clearFilters } = productsSlice.actions;
export default productsSlice.reducer;
