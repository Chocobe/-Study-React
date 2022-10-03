import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { NewsItem } from "@entities/news";

const NAMESPACE = "news";

const initialState = {
  isLoading: false,
  error: null as any,
  category: "",
  newsItems: [] as NewsItem[],
};

const newsSlice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    // news
    retrieveNewsRequest: (state, action: PayloadAction<string>) => {
      state.isLoading = true;
      state.error = null;
      state.category = action.payload;
      state.newsItems = [];
    },
    retrieveNewsSucceed: (state, action: PayloadAction<NewsItem[]>) => {
      state.isLoading = false;
      state.newsItems = action.payload;
    },
    retrieveNewsFailed: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = action.payload
    },
  },
});

export default newsSlice.reducer;
export const {
  retrieveNewsRequest,
  retrieveNewsSucceed,
  retrieveNewsFailed,
} = newsSlice.actions;