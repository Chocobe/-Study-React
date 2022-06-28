import React from "react";
import MainLayout from "./layouts/MainLayout";
// import TodoForm from "./components/TodoForm";
// import TodoList from "./components/TodoList";
import TodoListContainer from "./containers/TodoListContainer";
import TodoFormContainer from "./containers/TodoFormContainer";

import store from "./store";
import { Provider } from "react-redux";

import "./App.scss";

const App = () => {
  return (
    <Provider store={store}>
      <MainLayout>
        {/* <TodoForm /> */}
        {/* <TodoList /> */}
        <TodoFormContainer />
        <TodoListContainer />
      </MainLayout>
    </Provider>
  );
};

export default App;