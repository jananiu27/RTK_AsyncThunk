import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productThunk";

const productSlice = createSlice({
  name: "products",
  initialState: { items: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builders) => {
    builders
      .addCase(fetchProducts.pending, (state) => {
        state.state = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.items = action.error.message;
      });
  },
});

export default productSlice.reducer;
