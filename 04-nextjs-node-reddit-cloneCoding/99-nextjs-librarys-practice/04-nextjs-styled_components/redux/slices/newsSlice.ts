import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { NewsItem } from "entities";

const NAMESPACE = "news";

const initialState: {
  isLoading: boolean;
  newsItems: NewsItem[];
  error: any;
} = {
  isLoading: false,
  newsItems: [],
  error: null,
};

const newsSlice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {
    // retrieveNews
    retrieveNewsRequest: (state, action: PayloadAction<string>) => {
      state.isLoading = true;
      state.newsItems = [];
      state.error = null;
    },
    retrieveNewsSucceed: (state, action: PayloadAction<NewsItem[]>) => {
      console.log("retrieveNewsSucceed() 호출: ", action.payload);
      
      state.isLoading = false;
      state.newsItems = action.payload;
    },
    retrieveNewsFailed: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default newsSlice.reducer;
export const {
  retrieveNewsRequest,
  retrieveNewsSucceed,
  retrieveNewsFailed,
} = newsSlice.actions;