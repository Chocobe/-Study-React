import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const NAMESPACE = "counterThunk";

export const thunkDecrease = createAsyncThunk<Promise<void>, { diff: number }>(
  `${NAMESPACE}/thunkDecrease`,
  async (arg, thunkApi) => {
    const resultDiff = await new Promise<number>(resolve => {
      setTimeout(() => {
        resolve(arg.diff);
      }, 1500);
    });
    thunkApi.dispatch(counterThunkSlice.actions.calculate(resultDiff));
  }
);

export const thunkIncrease = createAsyncThunk<Promise<void>, { diff: number }>(
  `${NAMESPACE}/thunkIncrease`,
  async (arg, thunkApi) => {
    const resultDiff = await new Promise<number>(resolve => {
      setTimeout(() => {
        resolve(arg.diff);
      }, 1500);
    });

    thunkApi.dispatch(counterThunkSlice.actions.calculate(resultDiff));
  }
);

const initialState = {
  counterThunkValue: 10000
};

const counterThunkSlice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    calculate: (state, { payload: diff }: PayloadAction<number>) => {
      state.counterThunkValue += diff;
    },
  },
});

export default counterThunkSlice;
export const {
  calculate,
} = counterThunkSlice.actions;