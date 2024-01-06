import { createSlice } from "@reduxjs/toolkit";

const searchSLice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheresults: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { cacheresults } = searchSLice.actions;
export default searchSLice.reducer;
