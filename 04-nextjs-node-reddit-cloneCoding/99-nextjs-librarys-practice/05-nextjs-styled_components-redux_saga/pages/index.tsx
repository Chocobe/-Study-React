import styled from "styled-components";

const AppRoot = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.gray03};
`;

const Description = styled.div`
  padding: 20px 10px;
  font-size: 20px;
  text-align: center;
`;

function App() {
  return (
    <AppRoot>
      <Description>
        🚀 보고 싶은 카테고리를 선택해 주세요.
      </Description>
    </AppRoot>
  );
}

export default App;