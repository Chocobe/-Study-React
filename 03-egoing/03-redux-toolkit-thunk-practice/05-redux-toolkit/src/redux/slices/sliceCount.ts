import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const NAMESPACE = "sliceCount";

const initialState = {
  sliceCountValue: 100,
};

const sliceCount = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    sliceIncrease: (
      state,
      action: PayloadAction<{ sliceCountDiff: number }>
    ) => {
      state.sliceCountValue += action.payload.sliceCountDiff;
    },

    sliceDecrease: (
      state,
      action: PayloadAction<{ sliceCountDiff: number }>
    ) => {
      state.sliceCountValue -= action.payload.sliceCountDiff;
    },
  },
});

export default sliceCount;
export const {
  sliceIncrease,
  sliceDecrease,
} = sliceCount.actions;