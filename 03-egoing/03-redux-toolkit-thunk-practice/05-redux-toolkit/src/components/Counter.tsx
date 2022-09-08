import {
  useState,
  useCallback,
  useRef,
} from "react";
import useGlobalShortcut from "../hooks/useGlobalShortcut";

import "./Counter.scss";

function Counter() {
  const increaseRef = useRef<HTMLButtonElement>(null);
  const decreaseRef = useRef<HTMLButtonElement>(null);
  
  const [count, setCount] = useState(0);
  useGlobalShortcut("q", () => {
    decreaseRef.current!.click();
  });
  useGlobalShortcut("w", () => {
    increaseRef.current!.click();
  });

  const onIncrease = useCallback(() => {
    setCount(count => ++count);
  }, []);

  const onDecrease = useCallback(() => {
    setCount(count => --count);
  }, []);

  return (
    <div className="Counter">
      <h1 className="Counter-indicator">
        Counter: {count}
      </h1>

      <div className="Counter-actions">
        <button onClick={onDecrease} ref={decreaseRef}>Decrease</button>
        <button onClick={onIncrease} ref={increaseRef}>Increase</button>
      </div>
    </div>
  );
};

export default Counter;