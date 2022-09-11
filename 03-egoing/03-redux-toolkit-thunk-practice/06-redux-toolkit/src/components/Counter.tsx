import React, {
  useRef,
  useState,
  useCallback,
} from "react";

import MyButton from "./MyButton";
import { useShortcut } from "../hooks";

import "./Counter.scss";

function Counter() {
  useShortcut({
    shortcut: "q",
    callback: () => {
      decreaseRef.current!.click();
    },
  });
  
  useShortcut({
    shortcut: "w",
    callback: () => {
      increaseRef.current!.click();
    },
  });

  const decreaseRef = useRef<HTMLButtonElement>(null);
  const increaseRef = useRef<HTMLButtonElement>(null);
  
  const [count, setCount] = useState(0);

  const onDecrease = useCallback(() => {
    setCount(count => --count);
  }, []);

  const onIncrease = useCallback(() => {
    setCount(count => ++count);
  }, []);
  
  return (
    <div className="Counter">
      <h1 className="Counter-indicator">
        Counter: {count}
      </h1>

      <div className="Counter-actions">
        <MyButton 
          ref={decreaseRef}
          className="Counter-actions-button" 
          onClick={onDecrease}
          bgColor="fail"
        >
          Decrease
        </MyButton>

        <MyButton 
          ref={increaseRef}
          className="Counter-actions-button" 
          onClick={onIncrease}
        >
          Increase
        </MyButton>
      </div>
    </div>
  );
};

export default Counter;