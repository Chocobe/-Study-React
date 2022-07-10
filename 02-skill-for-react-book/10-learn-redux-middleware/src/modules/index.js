import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
// import counter from "./counter";
import sample, { sampleSaga } from "./sample";
import counter, { counterSaga } from "./counterSaga";
import loading from "./loading";

const rootReducer = combineReducers({
  loading,
  counter,
  sample,
});

export function* rootSaga() {
  yield all([counterSaga(), sampleSaga()]);
}

export default rootReducer;