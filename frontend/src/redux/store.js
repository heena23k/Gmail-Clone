import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "../redux/appSlice.js";

const store = configureStore({
  reducer: {
    app: appSlice.reducer, // ✅ use .reducer
  },
});

export default store;


