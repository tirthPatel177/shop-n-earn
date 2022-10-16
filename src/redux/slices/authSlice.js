import { createSlice } from "@reduxjs/toolkit";

export const authenticatedSlice = createSlice({
  name: "authenticated",
  initialState: { isAuthenticated: undefined, token: undefined },
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setAuthToken: (state, action) => {
      state.token = action.payload;
    },
  },
});
export const { setIsAuthenticated, setAuthToken } = authenticatedSlice.actions;
export default authenticatedSlice.reducer;
