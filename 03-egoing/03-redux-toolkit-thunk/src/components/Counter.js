import React from "react";
import {
  useSelector,
  useDispatch,
} from "react-redux";
import { up } from "../modules/counterSlice";
import { asyncUpFetch } from "../modules/counterSlice";

const Counter = () => {
  const count = useSelector(({ counter }) => counter.value);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(up());
  }

  const onClickAsync = () => {
    console.log("asyncUpFetch: ", asyncUpFetch);
    console.log("asyncUpFetch(): ", asyncUpFetch());
    console.log("asyncUpFetch.pending(): ", asyncUpFetch.pending());
    console.log("asyncUpFetch.fulfilled(): ", asyncUpFetch.fulfilled(333));
    
    dispatch(asyncUpFetch({
      aa: "왱?",
      bb: false,
      cc: 73,
    }));
  };
  
  return (
    <div className="Counter">
      <h1>카운터: {count}</h1>
      <button onClick={onClick}>+</button>
      <button onClick={onClickAsync}>Async +</button>
    </div>
  );
};

export default Counter;