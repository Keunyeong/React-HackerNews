import { configureStore } from "@reduxjs/toolkit";
import rankSlice from "./rank-slice";
import topSlice from "./top-slice";

const store = configureStore({
  reducer: { top: topSlice.reducer, rank: rankSlice.reducer },
});

export default store;
