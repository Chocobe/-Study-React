import React, {
  useState,
  useCallback,
  useRef,
} from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

import "./App.scss";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트의 기초를 알아보기",
      checked: true,
    },
    {
      id: 2,
      text: "컴포넌트 스타일링해 보기",
      checked: true,
    },
    {
      id: 3,
      text: "일정관리 앱 만들어 보기",
      checked: false,
    },
  ]);

  const nextId = useRef(4);
  const onInsert = useCallback(text => {
    const newTodo = {
      id: nextId.current,
      text,
      checked: false,
    };

    setTodos(todos => todos.concat(newTodo));
    nextId.current++;
  }, []);

  const onRemove = useCallback(id => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }, []);

  const onToggle = useCallback(id => {
    setTodos(todos => todos.map(todo => {
      return todo.id === id
        ? { ...todo, checked: !todo.checked }
        : todo;
    }));
  }, []);
  
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;