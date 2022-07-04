import React from "react";

const Counter = ({
  number,
  onIncrease,
  onDecrease,
}) => {
  return (
    <div className="Counter">
      <h1>{number}</h1>
      <button
        className="Counter-increase"
        onClick={onIncrease}
      >
        Increase
      </button>
      <button
        className="Counter-decrease"
        onClick={onDecrease}
      >
        Decrease
      </button>
    </div>
  );
};

export default Counter;