import { createSlice } from "@reduxjs/toolkit";

const Loading = createSlice({
  name: "Loading",
  initialState: {
    isLoading: false,
  },
  reducers: {
    OpenLoading: (state) => {
      state.isLoading = true;
    },
    CloseLoading: (state) => {
      state.isLoading = false;
    },
  },
});
export const { OpenLoading, CloseLoading } = Loading.actions;
export default Loading.reducer;