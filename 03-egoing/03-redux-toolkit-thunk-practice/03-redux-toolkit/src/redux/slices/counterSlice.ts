import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const NAMESPACE = "counterSlice";

const initialState = {
  sliceCounterValue: 100,
};

const counterSlice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    sliceDecrease: (state, action: PayloadAction<{ sliceDiff: number }>) => {
      state.sliceCounterValue -= action.payload.sliceDiff;
    },
    sliceIncrease: (state, action: PayloadAction<{ sliceDiff: number }>) => {
      state.sliceCounterValue += action.payload.sliceDiff;
    },
  },
});

export default counterSlice;
export const {
  sliceDecrease,
  sliceIncrease,
} = counterSlice.actions;