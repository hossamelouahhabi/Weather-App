import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    result: "empty",
  },
  reducers: {
    changeResult: (state, actiom) => {
      state.result = "not empty";
    },
  },
});

export const { changeResult } = weatherSlice.actions;
export default weatherSlice.reducer;
