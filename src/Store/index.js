import { configureStore } from "@reduxjs/toolkit";
import authSlice, { authActions } from "./AuthStore";
import cartSlice from "./CartStore";

const store = configureStore({
  reducer: { auth: authSlice.reducer, cart: cartSlice.reducer }
});

export default store;
