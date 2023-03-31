import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = "pl";

export const countrySlice = createSlice({
  name: "country",
  initialState: { value: initialStateValue },
  reducers: {
    changeCountry: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeCountry } = countrySlice.actions;

export default countrySlice.reducer;