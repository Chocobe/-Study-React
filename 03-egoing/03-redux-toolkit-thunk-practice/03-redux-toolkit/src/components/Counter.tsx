import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const onDecrease = () => setCount(count => --count);
  const onIncrease = () => setCount(count => ++count);
  
  return (
    <div className="Counter">
      <h1>
        Count: {count}
      </h1>

      <div>
        <button onClick={onDecrease}>Decrease</button>
        <button onClick={onIncrease}>Increase</button>
      </div>
    </div>
  );
};

export default Counter;