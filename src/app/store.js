import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../feature/cart/cartSlice";
import userSlice from "../feature/auth/userSlice";
import ProductSlice from "../feature/Productpage/ProductSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userSlice,
    product: ProductSlice,
  },
});

export default store;
