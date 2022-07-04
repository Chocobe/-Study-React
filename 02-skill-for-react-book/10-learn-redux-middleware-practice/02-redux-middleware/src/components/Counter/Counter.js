import React from "react";

const BUTTON_ACTIONS = [
  {
    name: "Increase",
    difference: 1,
  },
  {
    name: "Decrease",
    difference: 2,
  },
];

const Counter = props => {
  const { counter } = props;
  
  return (
    <div className="Counter">
      <h1>Counter: {counter}</h1>

      <div className="Counter-actions">
        {BUTTON_ACTIONS.map(({ name, difference }) => (
          <button
            key={name}
            name={name}
            onClick={() => props[`on${name}`](difference)}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Counter;