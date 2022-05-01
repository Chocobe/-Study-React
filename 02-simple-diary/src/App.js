import DiaryEditor from "./DiaryEditor/DiaryEditor";
import DiaryList from "./DiaryList/DiaryList";
import Lifecycle from "./Lifecycle/Lifecycle";

import { useState, useRef, useEffect, useMemo } from "react";

import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const diaryId = useRef(0);

  const getData = async () => {
    const responseData = await fetch("https://jsonplaceholder.typicode.com/comments")
      .then(response => response.json());
    
    const initData = responseData
      .slice(0, 20)
      .map(({ email, body }) => ({
        author: email,
        content: body,
        emotion: Math.floor(Math.random() * 5) + 1,
        createDate: new Date().getTime(),
        id: diaryId.current++,
      }));

    setData(initData);
  };

  useEffect(() => {
    getData();
  }, []);
  
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

  const onRemove = targetId => {
    const newDiaryList = data
      .filter(item => item.id !== targetId);

    setData(newDiaryList);
    
    console.log(`targetId: ${targetId} 가 삭제 되었습니다.`);
  };

  const onEdit = (targetId, newContent) => {
    setData(
      data.map(item => item.id === targetId
        ? { ...item, content: newContent}
        : item
      )
    );
  };

  const getDiaryAnalysis = useMemo(() => {
    console.log("일기 분석 시작");

    const goodCount = data.filter(item => item.emotion > 2).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100 || 0;

    return {
      goodCount,
      badCount,
      goodRatio,
    };
  }, [data.length]);

  const {
    goodCount,
    badCount,
    goodRatio,
  } = getDiaryAnalysis;
  
  return (
    <div className="App">
      <Lifecycle />
      <DiaryEditor onCreate={onCreate} />

      <div>
        <div>Good Count: {goodCount}</div>
        <div>Bad Count: {badCount}</div>
        <div>Good Ratio: {goodRatio}</div>
      </div>
      
      <DiaryList 
        diaryList={data} 
        onRemove={onRemove}
        onEdit={onEdit}
      />
    </div>
  )
}

export default App;