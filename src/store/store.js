import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../productSlice/productSlice";
import cartReducer from "../cartSlice/cartSlice";
import userReducer from "../userSlice/userSlice";
export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    user: userReducer,
  },
});
