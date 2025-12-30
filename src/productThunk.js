import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products / fetchProducts",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      return await res.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
