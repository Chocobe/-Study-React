import React from "react";
import MainLayout from "@/layouts/MainLayout";
// import TodoForm from "@/components/TodoForm/TodoForm";
// import TodoList from "@/components/TodoList/TodoList";

import TodoFormContainer from "@/containers/TodoFormContainer";
import TodoListContainer from "@/containers/TodoListContainer";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <MainLayout>
        {/* <TodoForm /> */}
        {/* <TodoList /> */}
        <TodoFormContainer />
        <TodoListContainer />
      </MainLayout>
    </div>
  );
};

export default App;