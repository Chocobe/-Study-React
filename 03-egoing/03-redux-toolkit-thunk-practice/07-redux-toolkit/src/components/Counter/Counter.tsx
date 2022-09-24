import {
  useState,
  MouseEvent,
  useMemo,
  useCallback,
} from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const counterMethodMapper = useMemo(() => ({
    decrease: () => setCount(count => --count),
    increase: () => setCount(count => ++count),
  }), []);

  const onClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    const { currentTarget } = e;
    const { name } = currentTarget;

    counterMethodMapper[name as keyof typeof counterMethodMapper]?.();
  }, [counterMethodMapper]);

  return (
    <div>
      <h1>
        Counter Value: {count}
      </h1>

      <div>
        <button name="decrease" onClick={onClick}>Decrease</button>
        <button name="increase" onClick={onClick}>Increase</button>
      </div>
    </div>
  );
};

export default Counter;