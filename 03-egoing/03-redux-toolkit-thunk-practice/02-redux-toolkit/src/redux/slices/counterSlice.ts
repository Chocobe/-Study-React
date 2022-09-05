import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counterSliceValue: 100,
};

const counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    sliceIncrease: (state, { payload: diff }) => {
      return {
        ...state,
        counterSliceValue: state.counterSliceValue + diff,
      };
    },

    sliceDecrease: (state, { payload: diff }) => {
      return {
        ...state,
        counterSliceValue: state.counterSliceValue - diff,
      };
    },
  },
});

export default counterSlice;
export const {
  sliceIncrease,
  sliceDecrease,
} = counterSlice.actions;