import {
  useState,
  useCallback,
  MouseEvent,
} from "react";
import MyButton from "./MyButton";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 16px 24px;
`

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;
  font-weight: 700;
`

const ActionWrapper = styled.div`
  margin-top: 16px;
  width: 100%;
  min-width: 400px;

  display: flex;
  justify-content: end;
  gap: 20px;
`

function Counter() {
  const [count, setCount] = useState(0);

  const onDecrease = useCallback(() => {
    setCount(count => --count);
  }, []);

  const onIncrease = useCallback(() => {
    setCount(count => ++count);
  }, []);

  return (
    <Wrapper>
      <Title>
        {`Counter value: ${count}`}
      </Title>

      <ActionWrapper>
        <MyButton
          onClick={onDecrease}
        >
          Decrease
        </MyButton>

        <MyButton
          onClick={onIncrease}
        >
          Increase
        </MyButton>
      </ActionWrapper>
    </Wrapper>
  );
}

export default Counter;