import useAppSelector from "../redux/hooks/useAppSelector";
import useAppDispatch from "../redux/hooks/useAppDispatch";
import { sliceIncrease, sliceDecrease } from "../redux/slices/counterSlice";

function CounterWithSlice() {
  const { counterSliceValue } = useAppSelector(state => state.counterSlice);
  const appDispatch = useAppDispatch();

  const onDecrease = () => appDispatch(sliceDecrease(10));
  const onIncrease = () => appDispatch(sliceIncrease(10));
  
  return (
    <div className="CounterWithSlice">
      <h1>Counter With Slice: {counterSliceValue}</h1>

      <div>
        <button onClick={onDecrease}>(Slice) Decrease</button>
        <button onClick={onIncrease}>(Slice) Increase</button>
      </div>
    </div>
  );
};

export default CounterWithSlice;