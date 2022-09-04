import React from "react";
import useAppSelector from "../redux/hooks/useAppSelector";
import useAppDispatch from "../redux/hooks/useAppDispatch";
import { thunkDecrease, thunkIncrease } from "../redux/slices/counterSlice";

function ThunkCounter() {
  const count = useAppSelector(state => state.counter.countValue);
  const dispatch = useAppDispatch();

  const onDecrease = () => {
    dispatch(thunkDecrease({ diff: 1000 }));
  };

  const onIncrease = () => {
    dispatch(thunkIncrease({ diff: 10000 }));
  };

  return (
    <div className="ThunkCounter">
      <h1>
        ThunkCount: {count}
      </h1>

      <div>
        <button onClick={onDecrease}>Decrease</button>
        <button onClick={onIncrease}>Increase</button>
      </div>
    </div>
  );
};

export default ThunkCounter;