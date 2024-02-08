import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    formData: {},
  },
  reducers: {
    setFormData: (state, action) => {
      state.formData = action.payload;
    },
  },
});

export const { setFormData } = userSlice.actions;
export const selectFormData = (state) => state.user.formData;
export default userSlice.reducer;
