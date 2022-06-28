import React, {
  memo,
} from "react";
import TodoListItem from "./TodoListItem";

import "./TodoList.scss";

const TodoList = ({
  todoList,
  onRemove,
  onToggle,
}) => {
  return (
    <div className="TodoList">
      {todoList.map(todo => (
        <TodoListItem
          key={todo.id}
          id={todo.id}
          content={todo.content}
          toggle={todo.toggle}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default memo(TodoList);