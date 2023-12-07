import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../feature/cart/cartSlice";
import ProductSlice from "../feature/Productpage/productSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: ProductSlice,
  },
});

export default store;
