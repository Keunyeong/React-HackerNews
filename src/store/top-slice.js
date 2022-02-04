import { createSlice } from "@reduxjs/toolkit";
const topState = { list: 0, json: [] };

const topSlice = createSlice({
  name: "top",
  initialState: topState,
  reducers: {
    addJson(state, action) {
      state.json = action.payload;
    },
  },
});

export const topActions = topSlice.actions;

export default topSlice;
