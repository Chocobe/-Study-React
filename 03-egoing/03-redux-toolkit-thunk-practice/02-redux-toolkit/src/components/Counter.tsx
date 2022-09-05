import {
  useState,
} from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const onIncrease = (diff: number) => setCount(count => count + diff);
  const onDecrease = (diff: number) => setCount(count => count - diff);
  
  return (
    <div className="Counter">
      <h1>Counter: {count}</h1>

      <div className="wrapper">
        <button onClick={() => onDecrease(3)}>Decrease</button>
        <button onClick={() => onIncrease(3)}>Increase</button>
      </div>
    </div>
  );
};

export default Counter;