import DiaryEditor from "./DiaryEditor/DiaryEditor";
import DiaryList from "./DiaryList/DiaryList";

import { useState, useRef } from "react";

import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const diaryId = useRef(0);
  
  const onCreate = (author, content, emotion) => {
    const createDate = new Date().getTime();
    const newItem = {
      id: diaryId.current,
      author,
      content,
      emotion,
      createDate,
    };

    diaryId.current += 1;

    setData([newItem, ...data]);
  };
  
  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} />
    </div>
  )
}

export default App;