import { createSlice } from "@reduxjs/toolkit";

export const authenticatedSlice = createSlice({
  name: "authenticated",
  initialState: { isAuthenticated: undefined },
  reducers: {
    setIsAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
});
export const { setIsAuthenticated } = authenticatedSlice.actions;
export default authenticatedSlice.reducer;
