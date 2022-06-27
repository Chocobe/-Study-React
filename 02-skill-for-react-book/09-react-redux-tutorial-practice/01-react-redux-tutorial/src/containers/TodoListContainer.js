import React from "react";
import TodoList from "../components/TodoList/TodoList";

import { connect } from "react-redux";
import {
  remove,
  toggle,
} from "../store/todoList";

const TodoListContainer = ({
  todoList,
  remove,
  toggle,
}) => {
  return (
    <TodoList
      todoList={todoList}
      toggle={toggle}
      remove={remove}
    />
  );
};

const mapStateToProps = ({ 
  todoList: { todoList },
}) => ({
  todoList,
});

const mapDispatchToProps = dispatch => ({
  remove: id => dispatch(remove(id)),
  toggle: id => dispatch(toggle(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoListContainer);