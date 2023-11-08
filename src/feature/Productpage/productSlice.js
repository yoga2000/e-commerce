import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    details: {},
    loading: false,
    error: null,
  },
  reducers: {
    getProductStart(state) {
      state.loading = true;
      state.error = null;
    },
    getProductSuccess(state, action) {
      state.details = action.payload;
      state.loading = false;
    },
    getProductFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getProductStart, getProductSuccess, getProductFailure } =
  productSlice.actions;
export const product = (state) => state.product.details;
export const loading = (state) => state.product.loading;
export const error = (state) => state.product.error;

export default productSlice.reducer;
