import React, {
  useState,
  useCallback,
  useRef,
} from "react";
import MainLayout from "@layouts/MainLayout";
import TodoInsert from "@components/TodoInsert";
import TodoList from "@components/TodoList";

import "./App.scss";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 0,
      text: "리액트의 기초를 알아보기",
      checked: false,
    },
    {
      id: 1,
      text: "Hooks 기초 스터디",
      checked: true,
    },
    {
      id: 2,
      text: "TodoList App 만들기",
      checked: true,
    },
  ]);

  // FIXME: 초기값 0 으로 바꾸기
  const nextId = useRef(3);

  const handleInsert = useCallback(text => {
    setTodos(todos => {
      const newTodo = {
        id: nextId.current,
        text,
        checked: false,
      };

      nextId.current++;

      return todos.concat(newTodo);
    });
  }, []);

  const handleToggle = useCallback(id => {
    setTodos(todos => todos.map(todo => {
      return todo.id === id
        ? { ...todo, checked: !todo.checked }
        : todo;
    }))
  }, []);

  const handleRemove = useCallback(id => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }, []);
  
  return (
    <MainLayout>
      <TodoInsert handleInsert={handleInsert}/>
      <TodoList 
        todos={todos} 
        handleToggle={handleToggle}
        handleRemove={handleRemove}
      />
    </MainLayout>
  );
};

export default App;