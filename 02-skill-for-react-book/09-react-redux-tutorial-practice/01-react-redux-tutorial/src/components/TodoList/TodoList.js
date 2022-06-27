import React, {
  memo,
} from "react";
import TodoListItem from "../TodoListItem/TodoListItem";

import "./TodoList.scss";

const TodoList = ({
  todoList,
  toggle,
  remove,
}) => {
  return (
    <div className="TodoList">
      {todoList.map(todo => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          toggle={toggle}
          remove={remove}
        />
      ))}
    </div>
  );
};

export default memo(TodoList);