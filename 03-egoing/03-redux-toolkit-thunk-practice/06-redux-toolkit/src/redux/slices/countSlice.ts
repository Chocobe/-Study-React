import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const NAMESPACE = "countSlice";

const initialState = {
  countSliceValue: 1000,
};

const countSlice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    sliceDecrease: (state, { payload: diff }: PayloadAction<number>) => {
      state.countSliceValue -= diff
    },

    sliceIncrease: (state, { payload: diff }: PayloadAction<number>) => {
      state.countSliceValue += diff;
    },
  },
});

export default countSlice;
export const {
  sliceDecrease,
  sliceIncrease,
} = countSlice.actions;