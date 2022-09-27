import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

const NAMESPACE = "countSagaSlice";

const initialState = {
  countSagaSliceValue: 0,
  dummyValue: "It's countSagaSlice dummy value",
};

const countSagaSlice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    INCREASE_REQUESTED: (state, action: PayloadAction<number>) => {
      console.log("INCREASE_REQUESTED action 호출");
    },

    INCREASE_SUCCEEDED: (state, action: PayloadAction<number>) => {
      state.countSagaSliceValue += action.payload;
    },
  },
});

export default countSagaSlice.reducer;
export const {
  INCREASE_REQUESTED,
  INCREASE_SUCCEEDED,
} = countSagaSlice.actions;