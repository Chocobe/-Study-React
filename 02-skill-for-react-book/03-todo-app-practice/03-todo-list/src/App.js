import React, {
  useRef,
  useCallback,
  useReducer,
} from "react";
import MainLayout from "./layouts/MainLayout";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

import "./App.scss";

const initTodos = () => Array.from(
  { length: 2500 },
  (_, i) => ({
    id: i,
    text: `테스트 값 ${i}`,
    checked: Math.floor(Math.random() * 2) % 2 === 0
  })
);

const todosReducer = (todos, actions) => {
  const { type } = actions;

  switch(type) {
    case "INSERT": {
      return todos.concat(actions.todo);
    }

    case "TOGGLE": {
      const { id } = actions;
      return todos.map(todo => {
        return todo.id === id
          ? { ...todo, checked: !todo.checked }
          : todo;
      });
    }

    case "REMOVE": {
      const { id } = actions;
      return todos.filter(todo => todo.id !== id);
    }

    default: {
      return todos;
    }
  }
};

const App = () => {
  const [todos, dispatchTodos] = useReducer(
    todosReducer, undefined, initTodos,
  );

  const nextId = useRef(2500);
  const handleInsert = useCallback(text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    nextId.current++;

    dispatchTodos({ type: "INSERT", todo });
  }, []);

  const handleToggle = useCallback(id => {
    dispatchTodos({ type: "TOGGLE", id });
  }, []);

  const handleRemove = useCallback(id => {
    dispatchTodos({ type: "REMOVE", id });
  }, []);
  
  return (
    <div className="App">
      <MainLayout>
        <TodoInsert handleInsert={handleInsert} />
        <TodoList
          todos={todos}
          handleToggle={handleToggle} 
          handleRemove={handleRemove}
        />
      </MainLayout>
    </div>
  );
};

export default App;