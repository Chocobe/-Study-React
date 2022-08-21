import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const NAMESPACE = "counter";

export const asyncUpFetch = createAsyncThunk(
  `${NAMESPACE}/ASYNC_UP_FETCH`,
  async params => {
    console.log("asyncUpFetch 에서 받은 params: ", params);

    const response = await fetch(
      "https://api.countapi.xyz/hit/opesaljkdfslkjfsadf.com/visits"
    );

    const data = await response.json();
    return data.value;
  }
);

const initialState = {
  value: 0,
  status: "Idle",
};

const counterSlice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    up: state => {
      state.value++;
    },
  },
  extraReducers: builder => {
    builder.addCase(asyncUpFetch.pending, state => {
      state.status = "loading";
    });

    builder.addCase(asyncUpFetch.fulfilled, (state, { payload: value }) => {
      state.status = "completed";
      state.value = value;
    });

    builder.addCase(asyncUpFetch.rejected, state => {
      state.status = "failed";
    });
  },
});

export default counterSlice;
export const {
  up,
} = counterSlice.actions;
