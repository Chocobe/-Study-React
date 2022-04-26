// import './App.css';

import MyHeader from "./MyHeader";
import MyFooter from "./MyFooter";

function App() {
  const name = "김영우";

  const style = {
    App: {
      backgroundColor: "#000",
    },
    h2: {
      color: "#03a9f4",
    },
    boldText: {
      color: "#ff1493",
    },
  };

  const myNumber = 5;
  
  return (
    <div className="App" style={style.App}>
      <MyHeader />

      <header className="App-header">
        <h2 style={style.h2}>
          Hello React - {name}
        </h2>

        <b style={style.boldText}>
          {myNumber} 은(는) {myNumber % 2 === 0 ? "짝수" : "홀수"} 입니다.
        </b>

        <p style={style.boldText}>
          {() => "Hello"}
        </p>
      </header>

      <MyFooter /> 
    </div>
  );
}

export default App;
