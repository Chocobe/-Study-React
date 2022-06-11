import React, {
  //
} from "react";

import "./TodoTemplate.scss";

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="TodoTemplate-title">
        Todo List
      </div>

      <main className="TodoTemplate-main">
        {children}
      </main>
    </div>
  );
};

export default TodoTemplate;