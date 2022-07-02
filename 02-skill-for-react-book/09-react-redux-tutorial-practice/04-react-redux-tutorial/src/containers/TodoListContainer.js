import React from "react";
import { connect } from "react-redux";
import { toggle, remove } from "@/store/todoListReducer";
import TodoList from "@/components/TodoList/TodoList";

const TodoListContainer = ({
  items,
  onToggle,
  onRemove,
}) => (
  <TodoList
    items={items}
    onToggle={onToggle}
    onRemove={onRemove}
  />
);

export default connect(
  state => ({
    items: state.todoList.items,
  }),
  {
    onToggle: toggle,
    onRemove: remove,
  },
)(TodoListContainer);