import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import shopReducer from "../slices/shopSlice";
import authenticatedReducer from "../slices/authSlice";
import toastReducer from "../slices/toastSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  authenticated: authenticatedReducer,
  user: userReducer,
  shop: shopReducer,
  toast: toastReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
