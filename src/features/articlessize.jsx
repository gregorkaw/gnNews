import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = 0;

export const articlessizeSlice = createSlice({
  name: "articlessize",
  initialState: { value: initialStateValue },
  reducers: {
    changeArticlessize: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeArticlessize } = articlessizeSlice.actions;

export default articlessizeSlice.reducer;