import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

// COMPONENTS
import MyButton from "./components/MyButton/MyButton";
import MyHeader from "./components/MyHeader/MyHeader";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>App.js</h2>

        <MyHeader
          leftChild={
            <MyButton 
              onClick={() => alert("MyHeader 의 Left 버튼 클릭")}
              type="positive"
            >
              좌측 버튼
            </MyButton>
          }
          rightChild={
            <MyButton 
              onClick={() => alert("MyHeader 의 Right 버튼 클릭")}
              type="negative"
            >
              우측 버튼
            </MyButton>
          }
        >
          마이 헤더
        </MyHeader>

        <MyButton 
          onClick={() => alert("Default 버튼 클릭")}
        >
          Default 버튼
        </MyButton>

        <MyButton
          onClick={() => alert("Positive 버튼 클릭")}
          type="positive"
        >
          Positive 버튼
        </MyButton>

        <MyButton
          onClick={() => alert("Negative 버튼 클릭")}
          type="negative"
        >
          Negative 버튼
        </MyButton>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary/:id/:mode/:page" element={<Diary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;