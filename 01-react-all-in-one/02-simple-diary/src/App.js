import DiaryEditor from "./DiaryEditor/DiaryEditor";
import DiaryList from "./DiaryList/DiaryList";
// import Lifecycle from "./Lifecycle/Lifecycle";
// import OptimizeTest from "./OptimizeTest/OptimizeTest";

import React, { 
  useRef,
  useEffect,
  useMemo,
  useCallback,
  useReducer,
} from "react";

import "./App.css";

const dataReducer = (data, action) => {
  
  switch (action.type) {
    // getData() => INIT
    case "INIT": {
      return action.data;
    }
    
    // onCreate() => CREATE
    case "CREATE": {
      const createDate = new Date().getTime();
      
      const newItem = {
        ...action.data,
        createDate,
      };
      
      return [newItem, ...data];
    }
    
    // onRemove() =>
    case "REMOVE": {
      return data.filter(item => item.id !== action.targetId);
    }
    
    // onEdit() =>
    case "EDIT": {
      const { targetId, newContent } = action;
      return data.map(
        item => item.id === targetId
        ? { ...item, content: newContent }
        : item
        );
      }
      
    default: {
      return data;
    }
  }
}

export const DiaryStateContext = React.createContext();

export const DiaryDispatchContext = React.createContext();

const App = () => {
  const [data, dispatch] = useReducer(dataReducer, []);
  
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

    dispatch({ type: "INIT", data: initData });
  };

  useEffect(() => {
    getData();
  }, []);
  
  const _onCreate = (author, content, emotion) => {
    dispatch({ type: "CREATE", data: {
      id: diaryId.current,
      author,
      content,
      emotion,
    }});

    diaryId.current += 1;
  };
  const onCreate = useCallback(_onCreate, []);

  const _onRemove = targetId => {
    dispatch({ type: "REMOVE", targetId });
  };
  const onRemove = useCallback(_onRemove, []);

  const _onEdit = (targetId, newContent) => {
    dispatch({ type: "EDIT", targetId, newContent });
  };
  const onEdit = useCallback(_onEdit, []);

  const memoizedDispatches = useMemo(() => {
    return {
      onCreate,
      onEdit,
      onRemove,
    }
  }, []);

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
    // <DiaryDispatchContext.Provider value={{
    //   onCreate, onEdit, onRemove,
    // }}>
    //   <DiaryStateContext.Provider value={data}>
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={memoizedDispatches}>
        <div className="App">
          {/* <Lifecycle /> */}
          {/* <OptimizeTest /> */}

          <DiaryEditor />

          <div>
            <div>Good Count: {goodCount}</div>
            <div>Bad Count: {badCount}</div>
            <div>Good Ratio: {goodRatio}</div>
          </div>
          
          <DiaryList />
        </div>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
    //   </DiaryStateContext.Provider>
    // </DiaryDispatchContext.Provider>
  )
}

export default App;