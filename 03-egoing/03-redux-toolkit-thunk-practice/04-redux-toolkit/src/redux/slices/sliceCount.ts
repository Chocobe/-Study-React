import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const NAMESPACE = "sliceCount";

const initialState = {
  sliceCountValue: 0,
};

const sliceCount = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    sliceDecrease: (state, action: PayloadAction<{ diff: number }>) => {
      state.sliceCountValue -= action.payload.diff;
    },

    sliceIncrease: (state, action: PayloadAction<{ diff: number }>) => {
      state.sliceCountValue += action.payload.diff;
    },
  },
});

export default sliceCount;
export const {
  sliceDecrease,
  sliceIncrease,
} = sliceCount.actions;