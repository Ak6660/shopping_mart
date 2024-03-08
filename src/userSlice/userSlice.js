import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  orderHistory: [],
  savedItems: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToSavedItems(state, actions) {
      state.savedItems.push(actions.payload);
    },
    removeFromSavedItems(state, actions) {
      state.savedItems.slice(
        state.savedItems.indexOf((el) => el.id === actions.payload.id),
        1,
      );
    },
    login(state, actions) {
      const { user, orderHistory, savedItems } = actions.payload;
      state.user = user;
      if (orderHistory.length) {
        state.orderHistory = orderHistory;
      }
      if (savedItems.length) {
        state.savedItems = savedItems;
      }
    },
    logout(state) {
      state.user = initialState.user;
      state.orderHistory = initialState.orderHistory;
      state.savedItems = initialState.savedItems;
    },
  },
});

export default userSlice.reducer;
export const { addToSavedItems, removeFromSavedItems, login, logout } =
  userSlice.actions;
