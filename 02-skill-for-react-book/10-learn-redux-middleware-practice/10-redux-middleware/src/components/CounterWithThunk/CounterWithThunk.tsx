import React, {
  useCallback,
} from "react";
import {
  useAppSelector,
  useAppDispatch,
} from "@/hooks";
import {
  decreaseThunk,
  increaseThunk,
} from "@/redux/slices/countThunkSlice";

import { CounterTemplate } from "@/components";

function CounterWithThunk() {
  const count = useAppSelector(({ countThunkSlice }) => countThunkSlice.countThunkSliceValue);
  const appDispatch = useAppDispatch();

  const onDecrease = useCallback(() => {
    appDispatch(decreaseThunk(100));
  }, []);

  const onIncrease = useCallback(() => {
    appDispatch(increaseThunk(100));
  }, []);

  return (
    <CounterTemplate
      title="CounterWithThunk"
      count={count}
      onDecrease={onDecrease}
      onIncrease={onIncrease}
    />
  );
}

export default CounterWithThunk;