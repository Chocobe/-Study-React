import { 
  all,
  takeEvery,
} from "redux-saga/effects";

import countSaga from "./countSaga";

import {
  DECREASE,
  INCREASE,
} from "@/redux/slices/countThunkSlice";

function* helloSaga() {
  yield console.log("helloSaga 호출 됨");
  return console.log("helloSaga 종료 🐫");
}

function* helloSaga2(action: any) {
  const { payload } = action;
  yield console.log("helloSaga2 - payload: ", payload);
  return console.log("helloSaga2 종료!! 🚀🚀");
}

function* helloRootSaga() {
  yield takeEvery(DECREASE, helloSaga);
  yield takeEvery(INCREASE, helloSaga2);
}

function* rootSaga() {
  yield all([
    helloRootSaga(),
    countSaga(),
  ]);
}

export default rootSaga;