// import './App.css';

import Container from "./Container";
import MyHeader from "./MyHeader";
import Counter from "./Counter";

import OddEvenResult from "./OddEvenResult";

function App() {
  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    initialValue: 33,
  };
  
  return (
    <Container>
      <div>
        <MyHeader />
        <Counter {...counterProps} oddEvenResult={OddEvenResult} />
      </div>
    </Container>
  )
}

export default App;
