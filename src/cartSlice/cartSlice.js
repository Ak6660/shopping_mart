import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  total: 0,
};
const inCart = (arr = [], item) => {
  return arr.find((i) => i.title === item.title) || null;
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, actions) => {
      const product = inCart(state.cart, actions.payload);
      if (product) {
        product.quantity += 1;
      } else {
        const newProduct = { ...actions.payload, quantity: 1 };
        state.cart.push(newProduct);
      }
      state.total += actions.payload.price;
    },
    deleteFromCart: (state, actions) => {
      state.cart = state.cart.filter((_, idx) => idx !== actions.payload);
    },
  },
});

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
