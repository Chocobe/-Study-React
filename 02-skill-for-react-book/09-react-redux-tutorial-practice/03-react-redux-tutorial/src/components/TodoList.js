import React from "react";
import TodoListItem from "./TodoListItem";

import "./TodoList.scss";

const TodoList = ({
  items,
  onToggle,
  onRemove,
}) => {
  return (
    <div className="TodoList">
      {items.map(todo => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default React.memo(TodoList);