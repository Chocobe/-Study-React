import React, {
  memo,
  useRef,
} from "react";

import {
  FaPlus,
} from "react-icons/fa";

import "./TodoForm.scss";

const TodoForm = ({
  content,
  onContent,
  onAdd,
}) => {
  const $input = useRef(null);
  
  const onSubmit = e => {
    e.preventDefault();
    onAdd(content);
    onContent("");

    $input.current.focus();
  };
  
  return (
    <form
      className="TodoForm"
      onSubmit={onSubmit}
    >
      <input
        className="TodoForm-input"
        placeholder="할 일을 입력하세요."
        value={content}
        onInput={e => onContent(e.target.value)}
        ref={$input}
      />

      <button
        className="TodoForm-submit"
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default memo(TodoForm);