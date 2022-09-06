import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const NAMESPACE = "thunkCount";

export const thunkDecrease = createAsyncThunk<void, number>(
  `${NAMESPACE}/thunkDecrease`,
  async (diff, thunkApi) => {
    const response = await new Promise<number>(resolve => {
      setTimeout(() => {
        resolve(diff);
      }, 1000);
    });

    thunkApi.dispatch(calculate(-response));
  }
);

export const thunkIncrease = createAsyncThunk<void, number>(
  `${NAMESPACE}/thunkIncrease`,
  async (diff, thunkApi) => {
    const response = await new Promise<number>(resolve => {
      setTimeout(() => {
        resolve(diff);
      }, 1000);
    });

    thunkApi.dispatch(calculate(response));
  }
);

const initialState = {
  thunkCountValue: 1000,
};

const thunkCount = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    calculate: (state, action: PayloadAction<number>) => {
      state.thunkCountValue += action.payload;
    },
  },
});

export default thunkCount;
export const {
  calculate,
} = thunkCount.actions;