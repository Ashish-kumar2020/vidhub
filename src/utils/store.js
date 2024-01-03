const { configureStore } = require("@reduxjs/toolkit");
const { default: appSlice } = require("./appSlice");

const store = configureStore({
  reducer: {
    app: appSlice,
  },
});

export default store;
