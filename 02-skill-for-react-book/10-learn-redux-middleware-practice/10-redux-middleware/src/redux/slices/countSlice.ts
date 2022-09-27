import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

const NAMESPACE = "countSlice";

const initialState = {
  countSliceValue: 0,
  dummyValue: "It's countSlice dummy value",
};

const countSlice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    decreaseFromSlice: (state, action: PayloadAction<number>) => {
      state.countSliceValue -= action.payload;
    },

    increaseFromSlice: (state, action: PayloadAction<number>) => {
      state.countSliceValue += action.payload;
    },
  },
});

export default countSlice.reducer;
export const {
  decreaseFromSlice,
  increaseFromSlice,
} = countSlice.actions;