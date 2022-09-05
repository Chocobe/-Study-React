import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const NAMESPACE = "counterThunkSlice";

export const thunkDecrease = createAsyncThunk<Promise<void>, { thunkDiff: number }>(
  `${NAMESPACE}/thunkDecrease`,
  async (arg, thunkApi) => {
    const resultDiff = await new Promise<number>(resolve => {
      setTimeout(() => {
        resolve(arg.thunkDiff);
      }, 1000);
    });

    thunkApi.dispatch(calculate({ a: { b: { diff: resultDiff } } }));
  }
);

export const thunkIncrease = createAsyncThunk<Promise<void>, { thunkDiff: number }>(
  `${NAMESPACE}/thunkIncrease`,
  async (arg, thunkApi) => {
    const resultDiff = await new Promise<number>(resolve => {
      setTimeout(() => {
        resolve(arg.thunkDiff);
      }, 1000);
    });

    thunkApi.dispatch(calculate({ a: { b: { diff: resultDiff } } }));
  }
);

const initialState = {
  thunkCounterValue: 10000,
};

const counterThunkSlice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    calculate: (state, action: PayloadAction<{ a: { b: { diff: number } } }>) => {
      state.thunkCounterValue += action.payload.a.b.diff;
    },
  },
});

export default counterThunkSlice;
export const {
  calculate,
} = counterThunkSlice.actions;