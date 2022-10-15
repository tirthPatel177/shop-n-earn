import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import shopReducer from "../slices/shopSlice";
import authenticatedReducer from "../slices/authSlice";

export const store = configureStore({
  reducer: {
    authenticated: authenticatedReducer,
    user: userReducer,
    shop: shopReducer,
  },
});
