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

function App() {
  const [data, dispatchData] = useReducer(dataReducer, []);

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
              <Route path="/edit" element={<Edit />} />
              <Route path="/diary/:id/:mode/:page" element={<Diary />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
};

export default App;