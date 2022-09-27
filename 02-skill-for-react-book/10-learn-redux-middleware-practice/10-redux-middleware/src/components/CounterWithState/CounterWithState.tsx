import React, {
  useState,
  useCallback,
} from "react";
import { CounterTemplate } from "@/components";

function CounterWithState() {
  const [count, setCount] = useState(0);

  const onDecrease = useCallback(() => {
    setCount(count => --count);
  }, []);

  const onIncrease = useCallback(() => {
    setCount(count => ++count);
  }, []);

  return (
    <CounterTemplate
      title="CounterWithState"
      count={count}
      onDecrease={onDecrease}
      onIncrease={onIncrease}
    />
  );
}

export default CounterWithState;