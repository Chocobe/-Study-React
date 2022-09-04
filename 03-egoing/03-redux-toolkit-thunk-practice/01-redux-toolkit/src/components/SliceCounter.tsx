import React from "react";
import useAppSelector from "../redux/hooks/useAppSelector";
import useAppDispatch from "../redux/hooks/useAppDispatch";
import {
  sliceDecrease,
  sliceIncrease,
} from "../redux/slices/counterSlice";

function SliceCounter() {
  const countValue = useAppSelector(({ counter }) => counter.countValue);
  const dispatch = useAppDispatch();

  const onDecrease = () => dispatch(sliceDecrease(3));
  const onIncrease = () => dispatch(sliceIncrease(3));

  return (
    <div className="SliceCounter">
      <h1>
        SliceCounter: {countValue}
      </h1>

      <div>
        <button onClick={onDecrease}>Decrease</button>
        <button onClick={onIncrease}>Increase</button>
      </div>
    </div>
  );
};

export default SliceCounter;