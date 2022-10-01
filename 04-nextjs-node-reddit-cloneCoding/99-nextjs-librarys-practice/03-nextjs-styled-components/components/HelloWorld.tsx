import styled from "styled-components";

const HelloWorldRoot = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
`;

function HelloWorld() {
  return (
    <HelloWorldRoot>
      <Title>
        Hello World
      </Title>
    </HelloWorldRoot>
  );
}

export default HelloWorld;