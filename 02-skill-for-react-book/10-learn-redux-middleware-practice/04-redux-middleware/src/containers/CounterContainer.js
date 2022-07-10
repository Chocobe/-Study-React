import React from "react";
import Counter from "@components/Counter";
import { connect } from "react-redux";
import { increase, decrease } from "@modules/counter";

const CounterContainer = ({
  counter,
  onIncrease,
  onDecrease,
}) => {
  return (
    <div className="CounterContainer">
      <Counter
        counter={counter}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
    </div>
  );
};

export default connect(
  state => ({
    counter: state.counter,
  }),
  dispatch => ({
    onIncrease: diff => dispatch(increase(diff)),
    onDecrease: diff => dispatch(decrease(diff)),
  }),
)(CounterContainer);