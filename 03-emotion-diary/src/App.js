import React, {
  useReducer,
  useRef,
  useCallback,
  useMemo,
} from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

import "./App.css";

const dataReducer = (state, action) => {
  let newState = [];

  switch(action.type) {
    case "INIT": {
      return action.data;
    }

    case "CREATE": {
      // const newItem = { ...action.data };
      // newState = [newItem, ...state];

      return [action.data, ...state];
      break;
    }

    case "REMOVE": {
      newState = state.filter(item => item.id !== action.targetId);
      break;
    }

    case "EDIT": {
      newState = state.map(item => {
        return item.id === action.data.id
          ? {...action.data}
          : item;
      });
      break;
    }

    default: {
      return state;
    }
  }
  
  return newState;
}

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const dummyData = [
  {
    id: 1,
    date: new Date(2022, 4, 1).getTime(),
    content: "5월 1일 봄이 와요",
    emotion: 1,
  },
  {
    id: 2,
    date: new Date(2022, 4, 2).getTime(),
    content: "5월 2일 비",
    emotion: 4,
  },
  {
    id: 3,
    date: new Date(2022, 4, 3).getTime(),
    content: "5월 3일 공기가 맑아요",
    emotion: 3,
  },
  {
    id: 4,
    date: new Date(2022, 4, 4).getTime(),
    content: "5월 4일 내일은 쉬는 날",
    emotion: 5,
  },
  {
    id: 5,
    date: new Date(2022, 4, 5).getTime(),
    content: "내일 출근...",
    emotion: 2,
  },
  {
    id: 6,
    date: new Date(2022, 4, 6).getTime(),
    content: "줄바꿈 테스트 중 입니다. 긴 글일 때, \"...\" 형식으로 보여줄 예정 입니다. 줄바꿈 테스트 중 입니다. 긴 글일 때, \"...\" 형식으로 보여줄 예정 입니다.",
    emotion: 2,
  },
]

function App() {
  const [data, dispatchData] = useReducer(dataReducer, dummyData);

  const dataId = useRef(0);
  
  // INIT
  // CREATE
  const _onCreate = (date, content, emotion) => {
    dispatchData({ type: "CREATE", data: {
      id: dataId.current,
      date: new Date(date).getTime(),
      content,
      emotion,
    }});

    dataId.current += 1;
  };
  const onCreate = useCallback(_onCreate, []);
  
  // EIDIT
  const _onEdit = (targetId, date, content, emotion) => {
    dispatchData({ type: "EDIT", targetId, data: {
      id: targetId,
      date: new Date(date).getTime(),
      content,
      emotion,
    }});
  }
  const onEdit = useCallback(_onEdit, []);
  
  // REMOVE
  const _onRemove = targetId => {
    dispatchData({ type: "REMOVE", targetId });
  };
  const onRemove = useCallback(_onRemove, []);
  
  const diaryDispatcher = useMemo(() => ({
    onCreate,
    onEdit,
    onRemove,
  }), []);
  
  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={diaryDispatcher}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="/diary/:id" element={<Diary />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
};

export default App;