import Counter from "components/Counter";
import styled from "styled-components";

const CounterPageRoot = styled.div`
  width: 100%;
  height:100%;

  display: flex;
  justify-content: center;
  align-items: start;

  background-color: ${({ theme }) => theme.colors.gray03};
`

function CounterPage() {
  return (
    <CounterPageRoot>
      <Counter />
    </CounterPageRoot>
  );
}

export default CounterPage;