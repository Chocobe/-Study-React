import {
  all,
} from "redux-saga/effects";
import newsSaga from "./newsSaga";

function* rootSaga() {
  yield all([
    newsSaga(),
  ]);
}

export default rootSaga;