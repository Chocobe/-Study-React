import React, {
  useRef,
  useCallback,
} from "react";
import useAppSelector from "../hooks/useAppSelector";
import useAppDispatch from "../hooks/useAppDispatch";
import { sliceDecrease, sliceIncrease } from "../redux/slices/countSlice";
import useShortcut from "../hooks/useShortcut";

import MyButton from "./MyButton";

import "./Counter.scss";

function CounterWithSlice() {
  const decreaseRef = useRef<HTMLButtonElement>(null);
  const increaseRef = useRef<HTMLButtonElement>(null);

  const countSliceValue = useAppSelector(state => state.countSlice.countSliceValue);
  const appDispatch = useAppDispatch();

  useShortcut({
    shortcut: "a",
    callback: () => {
      decreaseRef.current!.click();
    },
  });

  useShortcut({
    shortcut: "s",
    callback: () => {
      increaseRef.current!.click();
    },
  });

  const onDecrease = useCallback(() => {
    appDispatch(sliceDecrease(10));
  }, []);

  const onIncrease = useCallback(() => {
    appDispatch(sliceIncrease(10));
  }, []);

  return (
    <div className="Counter">
      <h1 className="Counter-indicator">
        Counter With Slice: {countSliceValue}
      </h1>

      <div className="Counter-actions">
        <MyButton 
          ref={decreaseRef}
          key="a" 
          onClick={onDecrease} 
          bgColor="fail"
        >
          Decrease
        </MyButton>

        <MyButton 
          ref={increaseRef}
          key="w" 
          onClick={onIncrease}
        >
          Increase
        </MyButton>
      </div>
    </div>
  );
};

export default CounterWithSlice;