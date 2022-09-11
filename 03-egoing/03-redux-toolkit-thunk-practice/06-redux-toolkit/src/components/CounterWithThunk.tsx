import React, {
  useCallback,
} from "react";

import { thunkDecrease, thunkIncrease } from "../redux/slices/countThunk";

import useAppSelector from "../hooks/useAppSelector";
import useAppDispatch from "../hooks/useAppDispatch";

import MyButton from "./MyButton";

import "./Counter.scss";

function CounterWithThunk() {
  const countThunkValue = useAppSelector(state => state.countThunk.countThunkValue);
  const appDispatch = useAppDispatch();
  
  const onDecrease = useCallback(() => {
    appDispatch(thunkDecrease(100));
  }, []);
  
  const onIncrease = useCallback(() => {
    appDispatch(thunkIncrease(100));
  }, []);
  
  return (
    <div className="Counter">
      <h1 className="Counter-indicator">
        Counter With Thunk: {countThunkValue}
      </h1>

      <div className="Counter-actions">
        <MyButton
          onClick={onDecrease}
          bgColor="fail"
        >
          Decrease
        </MyButton>

        <MyButton
          onClick={onIncrease}
        >
          Increase
        </MyButton>
      </div>
    </div>
  );
};

export default CounterWithThunk;