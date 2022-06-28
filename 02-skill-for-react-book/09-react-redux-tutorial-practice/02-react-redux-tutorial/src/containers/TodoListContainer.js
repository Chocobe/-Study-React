import React from "react";

import { connect } from "react-redux";
import {
  remove,
  toggle,
} from "../store/todoListStore";

import TodoList from "../components/TodoList";

const TodoListContainer = ({
  todoList,
  remove,
  toggle,
}) => {
  return (
    <TodoList
      todoList={todoList}
      onRemove={remove}
      onToggle={toggle}
    />
  );
};

const mapStateToProps = state => ({
  todoList: state.todoList.todoList,
});

export default connect(
  mapStateToProps,
  {
    remove,
    toggle,
  },
)(TodoListContainer);