import DiaryEditor from "./DiaryEditor/DiaryEditor";
import DiaryList from "./DiaryList/DiaryList";
// import Lifecycle from "./Lifecycle/Lifecycle";
// import OptimizeTest from "./OptimizeTest/OptimizeTest";

import { 
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";

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
  
  const _onCreate = (author, content, emotion) => {
    const createDate = new Date().getTime();
    const newItem = {
      id: diaryId.current,
      author,
      content,
      emotion,
      createDate,
    };

    diaryId.current += 1;

    // ``State (상태)`` 업데이트 기본 사용법
    // setData([newItem, ...data]);

    // 함수형 업데이트 (Functional Update) 방식으로 ``setState()`` 를 사용
    setData(data => [newItem, ...data]);
  };
  const onCreate = useCallback(_onCreate, []);

  const _onRemove = targetId => {
    setData(data => {
      return data.filter(item => item.id !== targetId);
    });
  };
  const onRemove = useCallback(_onRemove, []);

  const _onEdit = (targetId, newContent) => {
    setData(data => {
      return data.map(item => item.id === targetId
        ? { ...item, content: newContent}
        : item
      );
    });
  };
  const onEdit = useCallback(_onEdit, []);

  const getDiaryAnalysis = useMemo(() => {
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
      {/* <Lifecycle /> */}
      {/* <OptimizeTest /> */}

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