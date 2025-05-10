import { configureStore } from "@reduxjs/toolkit";
import { appSlice } from "../redux/appSlice";

const store = configureStore({
  reducer: {
    app: appSlice.reducer, // ✅ use .reducer
  },
});

export default store;
