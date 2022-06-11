import React, {
  //
} from "react";

import TodoListItem from "./TodoListItem";

import "./TodoList.scss";

const TodoList = ({ todos, onToggleTodo, onRemove }) => {
  return (
    <div className="TodoList">
      {todos.map(todo => (
        <TodoListItem 
          todo={todo} 
          key={todo.id} 
          onToggleTodo={onToggleTodo}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default TodoList;