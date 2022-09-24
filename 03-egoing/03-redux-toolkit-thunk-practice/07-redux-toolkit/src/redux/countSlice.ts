import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const NAMESPACE = "count";

const initialState = {
  countSliceValue: 0,
  dummyValue: "It's countSlice dummy value",
};

const countSlice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    decrease: (state, action: PayloadAction<number>) => {
      state.countSliceValue -= action.payload;
    },
    
    increase: (state, action: PayloadAction<number>) => {
      state.countSliceValue += action.payload;
    },
  },
});

export default countSlice;
export const {
  decrease,
  increase,
} = countSlice.actions;