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
      id: 0,
      text: "Todo 00",
      checked: true,
    },
    {
      id: 1,
      text: "Todo 01",
      checked: true,
    },
    {
      id: 2,
      text: "Todo 02",
      checked: false,
    },
  ]);

  const nextId = useRef(3);
  
  const onAddTodo = useCallback(text => {
    setTodos(todos => todos.concat({
      id: nextId.current,
      text,
      checked: false,
    }));

    nextId.current++;
  }, []);

  const onToggleTodo = useCallback(id => {
    setTodos(todos => todos.map(todo => {
      return todo.id === id
        ? { ...todo, checked: !todo.checked }
        : todo;
    }));
  }, []);

  const onRemove = useCallback(id => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }, []);
  
  return (
    <div className="App">
      <TodoTemplate>
        <TodoInsert onAddTodo={onAddTodo} />
        <TodoList 
          todos={todos} 
          onToggleTodo={onToggleTodo} 
          onRemove={onRemove}
        />
      </TodoTemplate>
    </div>
  );
};

export default App;