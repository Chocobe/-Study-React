import {
  useAppSelector, useAppDispatch,
} from "@/redux/hooks";
import {
  sliceDecrease,
  sliceIncrease,
} from "@/redux/slices/sliceCount";

function CountWithSlice() {
  const sliceCountValue = useAppSelector(state => state.sliceCount.sliceCountValue);
  const appDispatch = useAppDispatch();

  const onDecrease = () => appDispatch(sliceDecrease({ diff: 10 }))
  const onIncrease = () => appDispatch(sliceIncrease({ diff: 10 }));

  return (
    <div>
      <h1>Slice Count: {sliceCountValue}</h1>

      <div>
        <button onClick={onDecrease}>Decrease</button>
        <button onClick={onIncrease}>Increase</button>
      </div>
    </div>
  );
};

export default CountWithSlice;