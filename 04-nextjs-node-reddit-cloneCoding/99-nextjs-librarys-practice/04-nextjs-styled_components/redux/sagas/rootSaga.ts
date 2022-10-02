import {
  all,
} from "redux-saga/effects";
import countSaga from "./countSaga";
import newsSaga from "./newsSaga";

function* rootSaga() {
  yield all([
    countSaga(),
    newsSaga(),
  ]);
}

export default rootSaga;