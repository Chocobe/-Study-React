import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { thunkDecrease, thunkIncrease } from "@/redux/slices/counterThunkSlice";

function CounterWithThunk() {
  const thunkCounterValue = useAppSelector(state => state.counterThunkSlice.thunkCounterValue);
  const appDispatch = useAppDispatch();

  const onDecrease = () => appDispatch(thunkDecrease({ thunkDiff: -100 }));

  const onIncrease = () => appDispatch(thunkIncrease({ thunkDiff: 100 }));

  return (
    <div className="CounterWithThunk">
      <h1>CounterWithThunk: {thunkCounterValue}</h1>

      <div>
        <button onClick={onDecrease}>Decrease</button>
        <button onClick={onIncrease}>Increase</button>
      </div>
    </div>
  );
};

export default CounterWithThunk;