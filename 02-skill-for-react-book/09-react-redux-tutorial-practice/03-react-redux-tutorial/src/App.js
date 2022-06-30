import React from "react";
// import TodoForm from "./components/TodoForm";
// import TodoList from "./components/TodoList";
import TodoFormContainer from "./containers/TodoFormContainer";
import TodoListContainer from "./containers/TodoListContainer";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <header className="header">
        <h1 className="header-title">
          일정 관리
        </h1>

        {/* <TodoForm /> */}
        <TodoFormContainer />

        {/* <TodoList /> */}
        <TodoListContainer />
      </header>
    </div>
  );
};

export default App;