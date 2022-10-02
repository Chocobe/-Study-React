import {
  useCallback,
} from "react";
import styled from "styled-components";
import {
  useAppSelector,
  useAppDispatch,
} from "../hooks";
import {
  decreaseRequest,
  increaseRequest,
} from "../redux/slices/countSlice";
const HomeRoot = styled.div`
  padding: 8px 16px;
  color: #fff;
`;

const Title = styled.h1`
  color: #fff;
  text-align: center;
`;

const ActionWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Button = styled.button<{ color: string }>`
  padding: 8px 16px;
  color: #fff;
  font-weight: 700;
  background-color: ${({ color }) => color};
  border: none;
  outline: none;
  border-radius: 4px;

  box-shadow: 1px 1px 1px #777;
  transition: all 0.25s ease;

  &:hover {
    box-shadow: 1px 1px 6px #777;
  }

  &:active {
    opacity: 0.5;
  }
`;

function Counter() {
  const countValue = useAppSelector(({ count }) => count.countValue);
  const appDispatch = useAppDispatch();

  const onDecrease = useCallback(() => {
    appDispatch(decreaseRequest(10));
  }, [appDispatch]);

  const onIncrease = useCallback(() => {
    appDispatch(increaseRequest(10));
  }, [appDispatch]);
  
  return (
    <HomeRoot>
      <Title>
        Hello World
      </Title>

      <p>count value: {countValue}</p>

      <ActionWrapper>
        <Button color="#ff1493" onClick={onDecrease}>Decrease</Button>
        <Button color="#03a9f4" onClick={onIncrease}>Increase</Button>
      </ActionWrapper>
    </HomeRoot>
  );
}

export default Counter;