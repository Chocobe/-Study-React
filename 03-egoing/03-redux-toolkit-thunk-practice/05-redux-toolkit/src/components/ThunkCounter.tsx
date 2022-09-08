import {
  useRef,
  useCallback,
} from "react";
import {
  useAppSelector,
  useAppDispatch,
  useGlobalShortcut,
} from "../hooks";
import {
  thunkIncrease,
  thunkDecrease,
} from "../redux/slices/thunkCount";

function ThunkCounter() {
  const increaseRef = useRef<HTMLButtonElement>(null);
  const decreaseRef = useRef<HTMLButtonElement>(null);

  const thunkCountValue = useAppSelector(state => state.thunkCount.thunkCountValue);
  const appDispatch = useAppDispatch();

  useGlobalShortcut("z", () => {
    decreaseRef.current!.click();
  });

  useGlobalShortcut("x", () => {
    increaseRef.current!.click();
  });

  const onIncrease = useCallback(() => {
    appDispatch(thunkIncrease({ thunkCountDiff: 100 }));
  }, []);

  const onDecrease = useCallback(() => {
    appDispatch(thunkDecrease({ thunkCountDiff: 100 }));
  }, []);

  return (
    <div className="ThunkCounter Counter">
      <h1 className="Counter-indicator">
        Thunk Counter: {thunkCountValue}
      </h1>

      <div className="Counter-actions">
        <button onClick={onDecrease} ref={decreaseRef}>Decrease</button>
        <button onClick={onIncrease} ref={increaseRef}>Increase</button>
      </div>
    </div>
  );
};

export default ThunkCounter;