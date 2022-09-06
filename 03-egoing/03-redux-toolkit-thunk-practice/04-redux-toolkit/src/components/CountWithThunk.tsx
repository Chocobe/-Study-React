import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { thunkDecrease, thunkIncrease } from "@/redux/slices/thunkCount";

function CountWithThunk() {
  const thunkCountValue = useAppSelector(state => state.thunkCount.thunkCountValue);
  const appDispatch = useAppDispatch();

  const onDecrease = () => appDispatch(thunkDecrease(100));

  const onIncrease = () => appDispatch(thunkIncrease(100));

  return (
    <div>
      <h1>Thunk Count: {thunkCountValue}</h1>

      <div>
        <button onClick={onDecrease}>Decrease</button>
        <button onClick={onIncrease}>Increase</button>
      </div>
    </div>
  );
};

export default CountWithThunk;