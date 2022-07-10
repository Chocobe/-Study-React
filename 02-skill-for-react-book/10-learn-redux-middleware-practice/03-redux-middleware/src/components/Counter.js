import React from "react";

const Counter = ({
  number, onIncrease, onDecrease,
}) => {
  return (
    <div className="Counter">
      <h1>{number}</h1>
      <button onClick={onIncrease}>Increase</button>
      <button onClick={onDecrease}>Decrease</button>
    </div>
  );
};

export default Counter;