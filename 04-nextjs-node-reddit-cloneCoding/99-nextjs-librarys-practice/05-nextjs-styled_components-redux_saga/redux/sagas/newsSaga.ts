import { PayloadAction } from "@reduxjs/toolkit";
import {
  call,
  put,
  takeLatest,
} from "redux-saga/effects";
import {
  retrieveNewsRequest,
  retrieveNewsSucceed,
} from "@slices/newsSlice";
import ApiManager from "@network/ApiManager";
import { NewsItem } from "@entities/news";

function* retrieveNews(action: PayloadAction<string>) {
  const category = action.payload;
  const response: {
    data: {
      articles: NewsItem[];
    };
  } = yield call(ApiManager.retrieveNews, category);
  
  yield put(retrieveNewsSucceed(response.data.articles));
}

function* newsSaga() {
  yield takeLatest(retrieveNewsRequest, retrieveNews);
}

export default newsSaga;