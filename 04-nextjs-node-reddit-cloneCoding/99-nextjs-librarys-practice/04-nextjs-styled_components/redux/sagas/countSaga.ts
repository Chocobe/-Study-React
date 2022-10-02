import {
  call,
  put,
  takeLatest,
} from "redux-saga/effects";
import {
  decreaseRequest,
  decreaseSucceed,
  increaseRequest,
  increaseSucceed,
} from "../slices/countSlice";

function* decrease() {
  try {
    const response: number = yield call(() => new Promise(resolve => {
      setTimeout(() => {
        resolve(10);
      }, 2000);
    }));

    yield put(decreaseSucceed(response));
  } catch (error) {
    console.log("에러 발생");
    console.log(error);
  }
}

function* increase() {
  try {
    const response: number = yield call(() => new Promise(resolve => {
      setTimeout(() => {
        console.log("아니..");
        resolve(10);
      }, 2000);
    }));

    yield put(increaseSucceed(response));
  } catch (error) {
    console.log("에러 발생");
    console.log(error);
  }
}

function* countSaga() {
  yield takeLatest(decreaseRequest, decrease);
  yield takeLatest(increaseRequest, increase);
}

export default countSaga;