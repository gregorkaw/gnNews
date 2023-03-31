import { createSlice } from "@reduxjs/toolkit";

// True means sidebar is shown(only on mobile)

const initialStateValue = false;

export const showsidebarSlice = createSlice({
  name: "showsidebar",
  initialState: { value: initialStateValue },
  reducers: {
    changeShowsidebar: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeShowsidebar } = showsidebarSlice.actions;

export default showsidebarSlice.reducer;