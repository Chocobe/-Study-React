import React from "react";

import TodoContext from "./context/TodoContext";

import MainLayout from "./layouts/MainLayout";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

import "./App.scss";

const App = () => {
  return (
    <TodoContext>
      <div className="App">
        <MainLayout title="일정 관리">
          <TodoInsert />
          <TodoList />
        </MainLayout>
      </div>
    </TodoContext>
  );
};

export default App;