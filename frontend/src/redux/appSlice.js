import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    open: false,
    user:null
  },
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setAuthUser:(state,action)=>{
      state.user = action.payload;
    }
  },
});

export const { setOpen,setAuthUser } = appSlice.actions;
export default appSlice.reducer;
