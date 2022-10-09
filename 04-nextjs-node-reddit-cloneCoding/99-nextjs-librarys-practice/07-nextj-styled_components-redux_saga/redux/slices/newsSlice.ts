import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

const NAMESPACE = "news";

const initialState = {
  isLoading: false,
  newsItems: [] as Array<any>,
  error: null,
};

const newsSlice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    retrieveNewsRequest: (state, _action: PayloadAction<string>) => {
      state.isLoading = true;
      state.error = null;
    },
    retrieveNewsSucceed: (state, action: PayloadAction<Array<any>>) => {
      state.isLoading = false;
      state.newsItems = action.payload;
    },
    retrieveNewsFailed: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.newsItems = [];
      state.error = action.payload;
    },
  },
});

export default newsSlice;
export const {
  retrieveNewsRequest,
  retrieveNewsSucceed,
  retrieveNewsFailed,
} = newsSlice.actions;