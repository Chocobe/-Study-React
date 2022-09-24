import {
  useCallback,
  MouseEventHandler,
} from "react";
import {
  useAppSelector,
  useAppDispatch,
} from "@/hooks";

import {
  decreaseAsync,
  increaseAsync,
} from "@/redux/countThunkSlice";

function CounterWithThunk() {
  const countThunkValue = useAppSelector(state => state.countThunkSlice.countThunkValue);
  const appDispatch = useAppDispatch();

  const onDecrease: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    appDispatch(decreaseAsync(100));
  }, []);

  const onIncrease: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    appDispatch(increaseAsync(100));
  }, []);
  
  return (
    <div>
      <h1>Count Thunk Value: {countThunkValue}</h1>

      <div>
        <button onClick={onDecrease}>Decrease</button>
        <button onClick={onIncrease}>Increase</button>
      </div>
    </div>
  );
};

export default CounterWithThunk;