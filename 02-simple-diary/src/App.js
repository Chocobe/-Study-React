import DiaryEditor from "./DiaryEditor/DiaryEditor";
import DiaryList from "./DiaryList/DiaryList";

import "./App.css";

const dummyList = [
  {
    id: 1,
    author: "Chocobe",
    content: "일기 내용 1",
    emotion: 3,
    createDate: new Date().getTime(),
  },
  {
    id: 2,
    author: "김영우",
    content: "오늘의 일기 2",
    emotion: 4,
    createDate: new Date().getTime(),
  },
  {
    id: 3,
    author: "초코비",
    content: "초코비 일기 3",
    emotion: 5,
    createDate: new Date().getTime(),
  },
];

const App = () => {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  )
}

export default App;