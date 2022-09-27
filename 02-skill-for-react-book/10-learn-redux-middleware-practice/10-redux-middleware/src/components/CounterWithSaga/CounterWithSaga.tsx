import React, {
  useCallback,
} from "react";
import {
  useAppSelector,
  useAppDispatch,
} from "@/hooks";
import {
  INCREASE_REQUESTED,
} from "@/redux/slices/countSagaSlice";

import { CounterTemplate } from "..";

function CounterWithSaga() {
  const count = useAppSelector(({ countSagaSlice }) => countSagaSlice.countSagaSliceValue);
  const appDispatch = useAppDispatch();

  const onDecrease = useCallback(() => {
    appDispatch(INCREASE_REQUESTED(-1000));
  }, []);

  const onIncrease = useCallback(() => {
    appDispatch(INCREASE_REQUESTED(1000));
  }, []);

  return (
    <CounterTemplate
      title="CounterWithSaga"
      count={count}
      onDecrease={onDecrease}
      onIncrease={onIncrease}
    />
  );
}

export default CounterWithSaga;