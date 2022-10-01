import {
  useCallback,
} from "react";
import styled from "styled-components";
import Counter from "../components/Counter";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h1`
  color: #fff;
`;

function Home() {
  const onClick = useCallback(() => {
    console.log("Hello World");
  }, []);
  
  return (
    <Wrapper>
      <Title>
        styled-components & redux-saga
      </Title>

      <Counter />
    </Wrapper>
  );
}

export default Home;