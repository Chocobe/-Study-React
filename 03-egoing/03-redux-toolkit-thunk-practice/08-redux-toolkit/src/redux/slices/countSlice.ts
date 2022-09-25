import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const NAMESPACE = "countSlice";

const initialState = {
  countSliceValue: 0,
  dummyValue: "It's countSlice Dummy Value",
};

const countSlice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    "decrease": (state, action: PayloadAction<number>) => {
      state.countSliceValue -= action.payload;
    },

    "increase": (state, action: PayloadAction<number>) => {
      state.countSliceValue += action.payload;
    },
  },
});

export default countSlice;
export const {
  decrease,
  increase,
} = countSlice.actions;