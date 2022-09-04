import { 
  createSlice, 
  PayloadAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export const thunkDecrease = createAsyncThunk<{ resultDiff: number }, { diff: number }>(
  "thunkDecrease",
  ({ diff }) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ resultDiff: diff });
      }, 2000);
    });
  },
);

export const thunkIncrease = createAsyncThunk<{ resultDiff: number }, { diff: number }>(
  "thunkIncrease",
  ({ diff }) => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ resultDiff: diff });
      }, 1000);
    });
  },
);

// const thunkIncrease = createAsyncThunk<
//   Promise<{ resultValue: number }>, 
//   { diffValue: number }
// >(
//   "thunkIncrease", 
//   async ({ diffValue }) => {
//     const promise = new Promise<{ resultValue: number }>(resolve => {
//       setTimeout(() => {
//         resolve({ resultValue: diffValue });
//       }, 2000);
//     });

//     return promise;
//   },
// );

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    countValue: 0,
  },
  reducers: {
    sliceIncrease: (state, { payload: diff }: PayloadAction<number>) => {
      state.countValue += diff;
    },
    sliceDecrease: (state, { payload: diff }: PayloadAction<number>) => {
      state.countValue -= diff;
    },
  },
  extraReducers: builder => {
    builder.addCase(thunkDecrease.fulfilled, (state, action) => {
      state.countValue -= action.payload.resultDiff;
    });

    builder.addCase(thunkIncrease.fulfilled, (state, action) => {
      state.countValue += action.payload.resultDiff;
    });
  },
});

export const {
  sliceIncrease,
  sliceDecrease,
} = counterSlice.actions;

export default counterSlice;