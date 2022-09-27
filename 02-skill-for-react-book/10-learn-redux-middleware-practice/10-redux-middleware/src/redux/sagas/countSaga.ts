import {
  call,
  put,
  takeEvery,
} from "redux-saga/effects";
import {
  INCREASE_REQUESTED,
  INCREASE_SUCCEEDED,
} from "@/redux/slices/countSagaSlice";

function* increaseRequested(action: any) {
  const { payload } = action;
  const response: {
    data: {
      diff: number;
    };
  } = yield call<any>(() => new Promise<any>(resolve => {
    setTimeout(() => {
      console.log("setTimeout() 안");
      const data = {
        diff: payload,
      };

      resolve({ data });
    }, 2000);
  }));

  console.log("안되나???: ", response);

  yield put(INCREASE_SUCCEEDED(response.data.diff));
}

function* countSaga() {
  yield takeEvery(INCREASE_REQUESTED, increaseRequested);
}

export default countSaga;