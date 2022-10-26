import { createSlice } from '@reduxjs/toolkit';
import data from '../../data';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalAmount: 0,
    totalCount: 0,
  },
  reducers: {
    // Adding item to cart
    addToCart: (state, action) => {
      const isItemAlreadyAdded = state.items.filter(
        (item) => item.name === action.payload.name,
      );
      if (isItemAlreadyAdded.length === 0) {
        state.items = [...state.items, action.payload];
      }
    },

    // Getting total amount from the cart
    getCartTotal: (state) => {
      const { totalAmount, totalCount } = state.items.reduce(
        (cartTotal, cartItem) => {
          const { asking_price } = cartItem;
          const itemTotal = asking_price;
          cartTotal.totalAmount += itemTotal;
          cartTotal.totalCount += 1;
          return cartTotal;
        },
        { totalAmount: 0, totalCount: 0 },
      );
      state.totalAmount = parseInt(totalAmount.toFixed(2), 10);
      state.totalCount = totalCount;
    },
    // removing item from shopping cart
    remove: (state, action) => {
      state.items = state.items.filter((item) => item.name !== action.payload);
    },
  },
});

export const { addToCart, getCartTotal, remove } = cartSlice.actions;

export default cartSlice.reducer;
