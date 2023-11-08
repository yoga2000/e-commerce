import { createSelector, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      existingItem
        ? (existingItem.quantity += 1)
        : state.items.push({ ...action.payload, quantity: 1 });
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    selectedProduct: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      item.quantity++;
    },

    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
  },
});
export const selectCartItems = (state) => state.cart.items;
export const selectCartTotal = createSelector(selectCartItems, (items) =>
  items
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2)
);
export const {
  addItem,
  removeFromCart,
  selectedProduct,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
