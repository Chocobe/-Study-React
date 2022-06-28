import React from "react";
import TodoForm from "../components/TodoForm";
import { connect } from "react-redux";
import { content } from "../store/todoFormStore";
import { add } from "../store/todoListStore";

const TodoFormContainer = ({
  content,
  onContent,
  onAdd,
}) => {
  return (
    <TodoForm
      content={content}
      onContent={onContent}
      onAdd={onAdd}
    />
  );
};

const mapStateToProps = state => ({
  content: state.todoForm.content,
});

export default connect(
  mapStateToProps,
  {
    onContent: content,
    onAdd: add,
  },
)(TodoFormContainer);