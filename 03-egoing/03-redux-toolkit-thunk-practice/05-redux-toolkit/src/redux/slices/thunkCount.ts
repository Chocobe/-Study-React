import { 
  createAsyncThunk, 
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

const NAMESPACE = "thunkCount";

const initialState = {
  thunkCountValue: 10000,
};

export const thunkIncrease = createAsyncThunk<
  void,
  { thunkCountDiff: number }
>(
  `${NAMESPACE}/thunkIncrease`,
  async (arg, thunkApi) => {
    const response = await new Promise<number>(resolve => {
      setTimeout(() => {
        resolve(arg.thunkCountDiff);
      }, 2000);
    });

    thunkApi.dispatch(calculate({ thunkCountDiff: response }));
  }
);

export const thunkDecrease = createAsyncThunk<void, { thunkCountDiff: number }>(
  `${NAMESPACE}/thunkDecrease`,
  async (arg, thunkApi) => {
    const response = await new Promise<number>(resolve => {
      setTimeout(() => {
        resolve(-arg.thunkCountDiff);
      }, 2000);
    });

    thunkApi.dispatch(calculate({ thunkCountDiff: response }));
  }
);

const thunkCount = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    calculate: (
      state, 
      action: PayloadAction<{ thunkCountDiff: number}>
    ) => {
      state.thunkCountValue += action.payload.thunkCountDiff;
    },
  },
});

export default thunkCount;
export const {
  calculate,
} = thunkCount.actions;