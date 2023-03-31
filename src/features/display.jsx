import { createSlice } from "@reduxjs/toolkit";

// True means grid display

const initialStateValue = false;

export const displaySlice = createSlice({
  name: "display",
  initialState: { value: initialStateValue },
  reducers: {
    changeDisplay: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeDisplay } = displaySlice.actions;

export default displaySlice.reducer;