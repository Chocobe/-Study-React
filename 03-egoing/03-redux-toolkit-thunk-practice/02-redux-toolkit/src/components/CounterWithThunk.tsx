import useAppSelector from "../redux/hooks/useAppSelector";
import useAppDispatch from "../redux/hooks/useAppDispatch";
import { thunkDecrease, thunkIncrease } from "../redux/slices/counterThunk";

function CounterWithThunk() {
  const counterThunkValue = useAppSelector(state => state.counterThunk.counterThunkValue);
  const dispatch = useAppDispatch();

  const onDecrease = () => dispatch(thunkDecrease({ diff: -1000 }));
  const onIncrease = () => dispatch(thunkIncrease({ diff: 1000 }));

  return (
    <div className="CounterThunk">
      <h1>
        Counter Thunk Value: {counterThunkValue}
      </h1>

      <div>
        <button onClick={onDecrease}>Thunk Decrease</button>
        <button onClick={onIncrease}>Thunk Increase</button>
      </div>
    </div>
  );
};

export default CounterWithThunk;