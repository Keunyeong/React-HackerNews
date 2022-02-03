import { createSlice } from "@reduxjs/toolkit";
const rankState = { list: 0, json: [] };

const rankSlice = createSlice({
  name: "rank",
  initialState: rankState,
  reducers: {
    addJson(state, action) {
      state.json = action.payload;
    },
  },
});

export const rankActions = rankSlice.actions;

export default rankSlice;
