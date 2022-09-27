import React, {
  useCallback,
} from "react";
import {
  useAppSelector,
  useAppDispatch,
} from "@/hooks";
import {
  decreaseFromSlice,
  increaseFromSlice,
} from "@/redux/slices/countSlice";

import { CounterTemplate } from "../";

function CounterWithSlice() {
  const count = useAppSelector(({ countSlice }) => countSlice.countSliceValue);
  const appDispatch = useAppDispatch();

  const onDecrease = useCallback(() => {
    appDispatch(decreaseFromSlice(1));
  }, []);

  const onIncrease = useCallback(() => {
    appDispatch(increaseFromSlice(1));
  }, []);

  return (
    <CounterTemplate
      title="CounterWithSlice"
      count={count}
      onDecrease={onDecrease}
      onIncrease={onIncrease}
    />
  );
}

export default CounterWithSlice;