import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../feature/cart/cartSlice";
import userSlice from "../feature/auth/userSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userSlice,
  },
});

export default store;
