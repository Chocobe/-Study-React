import React from "react";
import { connect } from "react-redux";
import {
  text,
  add,
} from "../store/todoList";

import TodoInput from "../components/TodoInput/TodoInput";

const TodoInputContainer = ({
  text,
  onText,
  onAdd,
}) => {
  return (
    <TodoInput
      text={text}
      onText={onText}
      onAdd={onAdd}
    />
  );
};

export default connect(
  state => ({
    text: state.todoList.text,
  }),
  {
    onText: text,
    onAdd: add,
  },
)(TodoInputContainer);