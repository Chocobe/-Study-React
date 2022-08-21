import {
  createSlice,
} from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    up: (state, { payload: step=1 }) => {
      state.value = state.value + step;
    },
  },
});

export default counterSlice;
export const counterActions = counterSlice.actions;