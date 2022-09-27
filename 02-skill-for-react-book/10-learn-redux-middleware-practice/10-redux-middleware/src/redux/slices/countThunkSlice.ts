import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

const NAMESPACE = "countThunkSlice";

const initialState = {
  countThunkSliceValue: 0,
  dummyValue: "It's countThunkSlice dummy value",
};

const countThunkSlice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    DECREASE: (state, action: PayloadAction<number>) => {
      state.countThunkSliceValue -= action.payload;
    },

    INCREASE: (state, action: PayloadAction<number>) => {
      state.countThunkSliceValue += action.payload;
    },
  },
});

export default countThunkSlice.reducer;
export const {
  DECREASE,
  INCREASE,
} = countThunkSlice.actions;

export const decreaseThunk = createAsyncThunk<void, number>(
  `${NAMESPACE}/DECREASE_THUNK`,
  async (diff, thunkApi) => {
    const response = await new Promise<{
      data: {
        diff: number;
      };
    }>(resolve => {
      setTimeout(() => {
        const data = { diff };
        resolve({ data });
      }, 2000);
    });

    thunkApi.dispatch(DECREASE(response.data.diff));
  }
);

export const increaseThunk = createAsyncThunk<void, number>(
  `${NAMESPACE}/INCREASE_THUNK`,
  async (diff, thunkApi) => {
    const response = await new Promise<{
      data: {
        diff: number;
      };
    }>(resolve => {
      setTimeout(() => {
        const data = { diff };
        resolve({ data });
      }, 2000);
    });

    thunkApi.dispatch(INCREASE(response.data.diff));
  }
);