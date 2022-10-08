import { PayloadAction } from "@reduxjs/toolkit";
import {
  call,
  put,
  takeLatest,
} from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import ApiManager from "@/network/ApiManager";
import {
  retrieveNewsRequest,
  retrieveNewsSucceed,
  retrieveNewsFailed,
} from "../slices/newsSlice";

function* retrieveNews(action: PayloadAction<string>): SagaIterator {
  try {
    const category = action.payload;
    const response: any = yield call(ApiManager.retrieveNews, category);

    const newsData = response.data.articles
      .map(({ title, description, urlToImage }: any) => {
        return { title, description, urlToImage }
      });

    yield put(retrieveNewsSucceed(newsData));

  } catch (error) {
    put(retrieveNewsFailed(error));
  }
}

function* newsSaga() {
  yield takeLatest(retrieveNewsRequest, retrieveNews)
}

export default newsSaga;