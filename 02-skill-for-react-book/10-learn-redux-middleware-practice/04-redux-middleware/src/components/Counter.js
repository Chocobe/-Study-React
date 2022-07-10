import React from "react";

const Counter = ({
  counter,
  onIncrease,
  onDecrease,
}) => {
  return (
    <div className="Counter">
      <h3>카운터: {counter}</h3>
      <button onClick={() => onIncrease()}>Increase</button>
      <button onClick={() => onDecrease()}>Decrease</button>
    </div>
  );
};

export default Counter;