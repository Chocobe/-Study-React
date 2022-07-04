import React from "react";
import { connect } from "react-redux";
import Counter from "@components/Counter/Counter";
import { increase, decrease } from "@modules/counterModule";

const CounterContainer = ({
  counter,
  onIncrease,
  onDecrease,
}) => {
  return (
    <Counter
      counter={counter}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
    />
  );
};

export default connect(
  state => ({
    counter: state.counter.counter,
  }),

  dispatch => ({
    onIncrease: difference => dispatch(increase(difference)),
    onDecrease: difference => dispatch(decrease(difference)),
  }),
)(CounterContainer);