import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "shop",
  initialState: { userId: undefined },
  reducers: {
    setUser: (state, action) => {
      state.userId = action.payload;
    },
  },
});
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
