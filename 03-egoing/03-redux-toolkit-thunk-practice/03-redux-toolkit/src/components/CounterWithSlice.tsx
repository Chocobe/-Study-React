import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { sliceDecrease, sliceIncrease } from "@/redux/slices/counterSlice";

function CounterWithSlice() {
  const sliceCounterValue = useAppSelector(state => state.counterSlice.sliceCounterValue);
  const appDispatch = useAppDispatch();
  
  const onDecrease = () => appDispatch(sliceDecrease({ sliceDiff: 10 }));
  const onIncrease = () => appDispatch(sliceIncrease({ sliceDiff: 10 }));
  
  return (
    <div className="CounterWithSlice">
      <h1>CounterWithSlice: {sliceCounterValue}</h1>

      <div>
        <button onClick={onDecrease}>Decrease</button>
        <button onClick={onIncrease}>Increase</button>
      </div>
    </div>
  );
};

export default CounterWithSlice;