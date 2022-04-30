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

  const onDelete = targetId => {
    const newDiaryList = data
      .filter(item => item.id !== targetId);

    setData(newDiaryList);
    
    console.log(`targetId: ${targetId} 가 삭제 되었습니다.`);
  };
  
  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList 
        diaryList={data} 
        onDelete={onDelete}
      />
    </div>
  )
}

export default App;