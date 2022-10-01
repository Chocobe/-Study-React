import {
  useState,
  useCallback,
} from "react";
import styled from "styled-components";
import { ThemeColorName } from "../styles/theme";

const CounterRoot = styled.div`
  width: 400px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: #f0f400;
`;

const Button = styled.button<{ themeName?: ThemeColorName }>`
  padding: 12px 20px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  background-color: ${({ themeName = "primary", theme }) => theme.colors[themeName]};
`;

function Counter() {
  const [count, setCount] = useState(0);

  const onDecrease = useCallback(() => {
    setCount(count => --count);
  }, []);

  const onIncrease = useCallback(() => {
    setCount(count => ++count);
  }, []);

  return (
    <CounterRoot>
      <Title>
        Count: {count}
      </Title>

      <div>
        <Button onClick={onDecrease}>
          Decrease
        </Button>

        <Button onClick={onIncrease} themeName="secondary">
          Increase
        </Button>
      </div>
    </CounterRoot>
  );
}

export default Counter;