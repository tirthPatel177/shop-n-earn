import { createSlice } from "@reduxjs/toolkit";

export const toastSlice = createSlice({
  name: "toast",
  initialState: {
    toast: {
      status: false,
      message: "",
      type: "",
    },
  },
  reducers: {
    setToast: (state, action) => {
      console.log("action.payload", action.payload);
      state.toast = action.payload;
    },
  },
});
export const { setToast } = toastSlice.actions;
export default toastSlice.reducer;
