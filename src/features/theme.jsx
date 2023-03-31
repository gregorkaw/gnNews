import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = true;

export const themeSlice = createSlice({
  name: "theme",
  initialState: { value: initialStateValue },
  reducers: {
    changeTheme: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;