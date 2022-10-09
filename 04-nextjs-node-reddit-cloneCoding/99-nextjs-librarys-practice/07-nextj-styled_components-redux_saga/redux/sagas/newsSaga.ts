import { SagaIterator } from "redux-saga";
import {
  call,
  put,
  takeLatest,
} from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import apiManager from "@/network/apiManager";
import {
  retrieveNewsRequest,
  retrieveNewsSucceed,
  retrieveNewsFailed,
} from "../slices/newsSlice";

function* retrieveNews(action: PayloadAction<string>): SagaIterator {
  const category = action.payload;

  try {
    const response = yield call(
      apiManager.retrieveNews,
      category
    );

    const newsItems = response.data.articles;

    yield put(retrieveNewsSucceed(newsItems));
  } catch (error) {
    yield put(retrieveNewsFailed(error));
  }
}

function* newsSaga() {
  yield takeLatest(retrieveNewsRequest, retrieveNews);
}

export default newsSaga;