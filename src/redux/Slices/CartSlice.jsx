import { createSlice } from '@reduxjs/toolkit';
import sweet from '../../Assests/data/Dessert.json';

const initialState = {
  products: sweet,
  cart: [],
};

export const CartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { idMeal } = action.payload;
      const existingItem = state.cart.find((item) => item.idMeal === idMeal);

      if (existingItem) {
        // If the item already exists in the cart, increase its quantity by 1
        existingItem.qty += 1;
      } else {
        // If the item doesn't exist, add it to the cart with a quantity of 1
        state.cart.push({ ...action.payload, qty: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.idMeal !== action.payload.idMeal);
    },
    increaseQTY: (state, action) => {
      const { idMeal, qty } = action.payload;
      const itemToUpdate = state.cart.find((item) => item.idMeal === idMeal);

      if (itemToUpdate) {
        itemToUpdate.qty = qty;
      }
    },
    decreaseQTY: (state, action) => {
      const { idMeal, qty } = action.payload;
      const itemToUpdate = state.cart.find((item) => item.idMeal === idMeal);

      if (itemToUpdate) {
        itemToUpdate.qty = qty === 1 ? 1 : qty;
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, removeFromCart, increaseQTY, decreaseQTY, clearCart } = CartSlice.actions;
export default CartSlice.reducer;
