// 02. useSelector(), useDispatch() 를 사용한 CounterContainer 만들기
import React, {
  useCallback,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";

const CounterContainer = () => {
  const number = useSelector(state => state.counter.number);
  
  const dispatch = useDispatch();
  
  const onIncrease = useCallback(() => {
    dispatch(increase());
  }, [dispatch]);
  
  const onDecrease = useCallback(() => {
    dispatch(decrease());
  }, [dispatch]);
    
  return (
    <Counter
      number={number}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
    />
  );
};

export default CounterContainer;



// 01. connect() 를 사용한 CounterContainer 만들기
// import React from "react";
// import { connect } from "react-redux";
// import Counter from "../components/Counter";
// import { increase, decrease } from "../modules/counter";

// const CounterContainer = ({
//   number,
//   increase,
//   decrease,
// }) => {
//   return (
//     <Counter
//       number={number}
//       onIncrease={increase}
//       onDecrease={decrease}
//     />
//   );
// };

// export default connect(
//   state => ({
//     number: state.counter.number,
//   }),
//   {
//     increase,
//     decrease,
//   },
// )(CounterContainer);