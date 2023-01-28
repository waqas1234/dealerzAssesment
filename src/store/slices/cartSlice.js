import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      // if cart is empty reset the total amount and quantity //
      if (action.payload.quantity === 0) {
        state.totalQuantity = 0;
        state.totalAmount = 0;
        state.items = [];
        return;
      }

      const newItem = action.payload.product;
      const quantity = action.payload.quantity;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity = state.totalQuantity + quantity;
      state.totalAmount = state.totalAmount + newItem.price * quantity;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          quantity: quantity,
          total: newItem.price * quantity,
        });
      } else {
        existingItem.quantity = existingItem.quantity + quantity;
        existingItem.total = existingItem.total + newItem.price * quantity;
      }
    },

    removeItemFromCart(state, action) {
      const id = action.payload;
      // if cart is empty reset the total amount and quantity //

      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity = state.totalQuantity - existingItem.quantity;
      state.totalAmount = state.totalAmount - existingItem.total;
      state.items = state.items.filter((item) => item.id !== id);
    },
  },
});

export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;
