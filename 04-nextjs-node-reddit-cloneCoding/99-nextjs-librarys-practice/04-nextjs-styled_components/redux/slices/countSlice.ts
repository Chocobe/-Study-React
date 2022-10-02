import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

const NAMESPACE = "count";

const initialState = {
  countValue: 0,
  dummyValue: "It's count dummy value",
};

const countSlice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    decreaseRequest: (_state, _action: PayloadAction<number>) => {
      console.log("왜 안될까???");
    },
    decreaseSucceed: (state, action: PayloadAction<number>) => {
      state.countValue -= action.payload;
    },

    increaseRequest: (_state, _action: PayloadAction<number>) => {},
    increaseSucceed: (state, action: PayloadAction<number>) => {
      state.countValue += action.payload;
    },
  },
});

export default countSlice.reducer;
export const {
  decreaseRequest,
  decreaseSucceed,
  increaseRequest,
  increaseSucceed,
} = countSlice.actions;