import React from "react";
import { connect } from "react-redux";
import Todos from "../components/Todos";
import {
  changeInput,
  toggle,
  insert,
  remove,
} from "../modules/todos";

const TodosContainer = ({
  input,
  todos,
  changeInput,
  toggle,
  insert,
  remove,
}) => {
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onToggle={toggle}
      onInsert={insert}
      onRemove={remove}
    />
  );
};

const mapStateToProps = state => ({
  input: state.todos.input,
  todos: state.todos.todos,
});

const mapDispatchToProps = dispatch => ({
  changeInput: text => dispatch(changeInput(text)),
  toggle: id => dispatch(toggle(id)),
  insert: text => dispatch(insert(text)),
  remove: id => dispatch(remove(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodosContainer);