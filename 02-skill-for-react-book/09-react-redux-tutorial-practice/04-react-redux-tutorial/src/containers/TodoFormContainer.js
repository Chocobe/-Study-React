import React from "react";
import { connect } from "react-redux";
import TodoForm from "@/components/TodoForm/TodoForm";
import { input, add } from "@/store/todoListReducer";

const TodoFormContainer = ({
  input,
  onInput,
  onAdd,
}) => {
  return (
    <TodoForm
      input={input}
      onInput={onInput}
      onAdd={onAdd}
    />
  );
};

export default connect(
  state => ({
    input: state.todoList.input,
  }),

  dispatch => ({
    onInput: newInput => dispatch(input(newInput)),
    onAdd: () => dispatch(add()),
  }),
)(TodoFormContainer);