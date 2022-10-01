import styled from "styled-components";
import HelloWorld from "../components/HelloWorld";
import Counter from "../components/Counter";

const AppRoot = styled.div`
  width: 500px;
  padding: 20px;

  background-color: ${({ theme }) => theme.colors.secondary};
`

function App() {
  return (
    <AppRoot>
      <HelloWorld />
      <Counter />
    </AppRoot>
  );
}

export default App;