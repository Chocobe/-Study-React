import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { NewsItemData } from "@/network/news";

const NAMESPACE = "news";

const initialState = {
  isLoading: false,
  newsItems: [] as NewsItemData[],
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
    retrieveNewsSucceed: (state, action: PayloadAction<NewsItemData[]>) => {
      state.isLoading = false;
      state.newsItems = action.payload;
    },
    retrieveNewsFailed: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
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