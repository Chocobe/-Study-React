import { 
  createSlice,
  createAsyncThunk,
  PayloadAction
} from "@reduxjs/toolkit";

const NAMESPACE = "countThunk";

export const thunkDecrease = createAsyncThunk<void, number>(
  `${NAMESPACE}/thunkDecrease`,
  async (arg, thunkApi) => {
    const response = await new Promise<number>(resolve => {
      setTimeout(() => {
        resolve(-arg);
      }, 2000);
    });

    thunkApi.dispatch(calculate(response));
  }
);

export const thunkIncrease = createAsyncThunk<void, number>(
  `${NAMESPACE}/thunkIncrease`,
  async (arg, thunkApi) => {
    const response = await new Promise<number>(resolve => {
      setTimeout(() => {
        resolve(arg);
      }, 2000);
    });

    thunkApi.dispatch(calculate(arg));
  }
);

const initialState = {
  countThunkValue: 10000,
};

const countThunk = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    calculate: (state, { payload: diff }: PayloadAction<number>) => {
      state.countThunkValue += diff;
    },
  },
});

export default countThunk;
export const {
  calculate,
} = countThunk.actions;