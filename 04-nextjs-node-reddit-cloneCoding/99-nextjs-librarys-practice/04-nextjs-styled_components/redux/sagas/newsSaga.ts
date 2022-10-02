import {
  PayloadAction,
} from "@reduxjs/toolkit";
import {
  call,
  put,
  takeLatest,
} from "redux-saga/effects";
import ApiManager from "api/ApiManager";
import {
  retrieveNewsRequest,
  retrieveNewsSucceed,
  retrieveNewsFailed,
} from "../slices/newsSlice";
import { NewsItem } from "entities";
import { AxiosResponse } from "axios";

function* retrieveNews(action: PayloadAction<string>) {
  try {
    const response: AxiosResponse<{
      articles: NewsItem[];
    }> = yield call(ApiManager.retrieveNews, action.payload);
    
    yield put(retrieveNewsSucceed(response.data.articles));
  } catch (error: any) {
    console.log("error: ", error);
    put(retrieveNewsFailed(error));
  }
}

function* newsSaga() {
  yield takeLatest(retrieveNewsRequest, retrieveNews);
}

export default newsSaga;