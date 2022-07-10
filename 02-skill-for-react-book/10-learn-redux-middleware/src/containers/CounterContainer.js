import React from "react";
import { connect } from "react-redux";
// import { increase, decrease } from "../modules/counter";
import { increaseAsync, decreaseAsync } from "../modules/counterSaga";
import Counter from "../components/Counter";

const CounterContainer = ({
  number,
  
  onIncrease,
  onDecrease,
}) => {
  // console.group();
  // console.log("onIncrease()", onIncrease);
  // console.log("onDecrease()", onDecrease);
  // console.groupEnd();
  
  return (
    <Counter
      number={number}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
    />
  );
};

export default connect(
  state => ({
    number: state.counter,
  }),
  // {
  //   onIncrease: increaseAsync,
  //   onDecrease: decreaseAsync,
  // }
  // dispatch => ({
  //   onIncrease: () => dispatch(increase()),
  //   onDecrease: () => dispatch(decrease()),
  // }),
  dispatch => ({
    onIncrease: () => dispatch(increaseAsync()),
    onDecrease: () => dispatch(decreaseAsync()),
  })
)(CounterContainer);