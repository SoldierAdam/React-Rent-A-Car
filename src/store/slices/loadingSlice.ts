import { createSlice } from "@reduxjs/toolkit";

const initialState = { requestCount: 0 };

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
	increaseRequestCount: (state: any) => {
	  state.requestCount++;
	},
	decreaseRequestCount: (state: any) => {
	  state.requestCount--;
	},
  }
});

export const { increaseRequestCount, decreaseRequestCount } = loadingSlice.actions;
export default loadingSlice.reducer;