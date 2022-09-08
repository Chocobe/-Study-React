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
  sliceIncrease,
  sliceDecrease,
} from "../redux/slices/sliceCount";

function SliceCounter() {
  const increaseRef = useRef<HTMLButtonElement>(null);
  const decreaseRef = useRef<HTMLButtonElement>(null);

  const sliceCount = useAppSelector(state => state.sliceCount.sliceCountValue);
  const appDispatch = useAppDispatch();
  
  useGlobalShortcut("a", () => {
    decreaseRef.current!.click();
  });

  useGlobalShortcut("s", () => {
    increaseRef.current!.click();
  });

  const onIncrease = useCallback(() => {
    appDispatch(sliceIncrease({ sliceCountDiff: 10 }));
  }, []);

  const onDecrease = useCallback(() => {
    appDispatch(sliceDecrease({ sliceCountDiff: 10 }));
  }, []);

  return (
    <div className="SliceCounter Counter">
      <h1 className="Counter-indicator">
        Slice Counter: {sliceCount}
      </h1>

      <div className="Counter-actions">
        <button onClick={onDecrease} ref={decreaseRef}>Decrease</button>
        <button onClick={onIncrease} ref={increaseRef}>Increase</button>
      </div>
    </div>
  );
};

export default SliceCounter;