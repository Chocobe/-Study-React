import React from "react";
import MainLayout from "./layouts/MainLayout";
// import TodoInput from "./components/TodoInput/TodoInput";
// import TodoList from "./components/TodoList/TodoList";
import TodoInputContainer from "./containers/TodoInputContainer";
import TodoListContainer from "./containers/TodoListContainer";

import store from "./store";
import { Provider } from "react-redux";

import "./App.scss";

const App = () => {
  return (
    <Provider store={store}>
      <MainLayout>
        {/* <TodoInput /> */}
        {/* <TodoList /> */}
        <TodoInputContainer />
        <TodoListContainer />
      </MainLayout>
    </Provider>
  );
};

export default App;