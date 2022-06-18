import React, {
  useContext,
} from "react";
import { TodoStateContext } from "../context/TodoContext";

import TodoListItem from "./TodoListItem";

import "./TodoList.scss";

const TodoList = () => {
  const { todos } = useContext(TodoStateContext);
  
  return (
    <div className="TodoList">
      {todos.map(todo => (
        <TodoListItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
};

export default React.memo(TodoList);