import searchSlice from "./searchSlice";

const { configureStore } = require("@reduxjs/toolkit");
const { default: appSlice } = require("./appSlice");

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
  },
});

export default store;
