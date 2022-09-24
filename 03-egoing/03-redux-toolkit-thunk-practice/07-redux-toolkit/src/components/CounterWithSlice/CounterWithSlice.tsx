import {
  MouseEventHandler,
} from "react";
import {
  useAppSelector,
  useAppDispatch,
} from "@/hooks";
import {
  decrease,
  increase,
} from "@/redux/countSlice";

function CounterWithSlice() {
  const countSliceValue = useAppSelector(state => state.countSlice.countSliceValue);
  const appDispatch = useAppDispatch();

  const onDecrease: MouseEventHandler = () => {
    appDispatch(decrease(3));
  };

  const onIncrease: MouseEventHandler = () => {
    appDispatch(increase(3));
  };

  return (
    <div>
      <h1>
        Count Slice Value: {countSliceValue}
      </h1>

      <div>
        <button onClick={onDecrease}>Decrease</button>
        <button onClick={onIncrease}>Increase</button>
      </div>
    </div>
  );
};

export default CounterWithSlice;