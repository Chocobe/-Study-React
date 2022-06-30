import React from "react";
import TodoForm from "../components/TodoForm";
import { connect } from "react-redux";
import { content, add } from "../store/todoListStore";

const TodoFormContainer = ({
  content,
  onContent,
  onAdd,
}) => (
  <TodoForm
    content={content}
    onContent={onContent}
    onAdd={onAdd}
  />
);

export default connect(
  state => ({
    content: state.todoList.content,
  }),
  dispatch => ({
    onContent: newContent => dispatch(content(newContent)),
    onAdd: newId => dispatch(add(newId)),
  }),
)(TodoFormContainer);