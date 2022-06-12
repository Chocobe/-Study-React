import React from "react";
import TodoListItem from "./TodoListItem";

import "./TodoList.scss";

const TodoList = ({ 
  todos, 
  handleToggle,
  handleRemove,
}) => {
  return (
    <div className="TodoList">
      {todos.map(todo => {
        return (
          <TodoListItem
            key={todo.id}
            todo={todo} 
            handleToggle={handleToggle}
            handleRemove={handleRemove}
          />
        )
      })}
    </div>
  );
};

export default React.memo(TodoList);