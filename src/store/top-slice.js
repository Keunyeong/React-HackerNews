import { createSlice } from "@reduxjs/toolkit";
const initialState = { list: 0, json: [] };

const topSlice = createSlice({
  name: "top",
  initialState,
  reducers: {
    addJson(state, action) {
      state.json = action.payload;
    },
  },
});

export const topActions = topSlice.actions;

export default topSlice;
