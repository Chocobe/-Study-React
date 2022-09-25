import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

const NAMESPACE = "countWithThunk";

export const decreaseAsync = createAsyncThunk<void, number>(
  `${NAMESPACE}/decreaseAsync`,
  async (diff, thunkApi) => {
    const response = await new Promise<{
      data: {
        diff: number;
      };
    }>(resolve => {
      setTimeout(() => {
        const data = {
          diff,
        };

        resolve({ data });
      }, 2000);
    });

    thunkApi.dispatch(decreaseSync(response.data.diff));
  },
);

export const increaseAsync = createAsyncThunk<void, number>(
  `${NAMESPACE}/increaseAsync`,
  async (diff, thunkApi) => {
    const response = await new Promise<{
      data: {
        diff: number;
      };
    }>(resolve => {
      setTimeout(() => {
        const data = {
          diff,
        };

        resolve({ data });
      }, 2000);
    });

    thunkApi.dispatch(increaseSync(response.data.diff));
  }
)

const initialState = {
  countWithThunkValue: 0,
  dummyValue: "It's countWithThunk Dummy Value",
};

const countThunkSlice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    decreaseSync: (state, action: PayloadAction<number>) => {
      state.countWithThunkValue -= action.payload;
    },

    increaseSync: (state, action: PayloadAction<number>) => {
      state.countWithThunkValue += action.payload;
    },
  },
});

export default countThunkSlice;
export const {
  decreaseSync,
  increaseSync,
} = countThunkSlice.actions;