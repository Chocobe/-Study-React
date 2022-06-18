import React from "react";
import TodoContext from "./context/TodoContext";
import MainLayout from "./layouts/MainLayout";
import TodoList from "./components/TodoList";
import TodoInsert from "./components/TodoInsert";

import "./App.scss";

const App = () => {
  // const [todos, setTodos] = useState([
  //   {
  //     id: 0,
  //     text: "리액트 기초 스터디 하기",
  //     checked: true,
  //   },
  //   {
  //     id: 1,
  //     text: "Todo List App 만들기",
  //     checked: true,
  //   },
  //   {
  //     id: 2,
  //     text: "Context API 복습하기",
  //     checked: false,
  //   },
  //   {
  //     id: 3,
  //     text: "리덕스 기초 스터디 하기",
  //     checked: false,
  //   },
  // ]);

  // const nextId = useRef(4);
  
  // const handleInsert = useCallback(text => {
  //   setTodos(todos => {
  //     const newTodo = {
  //       id: nextId.current,
  //       text,
  //       checked: false,
  //     };

  //     nextId.current++;

  //     return [newTodo, ...todos];
  //   });
  // }, []);

  // const handleRemove = useCallback(id => {
  //   setTodos(todos => todos.filter(todo => todo.id !== id));
  // }, []);
  
  // const handleToggle = useCallback(id => {
  //   setTodos(todos => todos.map(todo => {
  //     return todo.id !== id
  //       ? todo
  //       : {
  //         ...todo,
  //         checked: !todo.checked,
  //       };
  //   }))
  // }, []);
  
  return (
    <TodoContext>
      <div className="App">
        <MainLayout title="일정 관리">
          <TodoInsert />
          <TodoList />
        </MainLayout>
      </div>
    </TodoContext>
  );
};

export default App;