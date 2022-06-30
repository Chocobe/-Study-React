import React, {
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
  const onSubmit = e => {
    e.preventDefault();
    onAdd(content);
    onContent("");
    $input.current.focus();
  };

  const $input = useRef(null);
  
  return (
    <form 
      className="TodoForm"
      onSubmit={onSubmit}
    >
      <input
        className="TodoForm-input"
        placeholder="할 일을 입력하세요."
        ref={$input}
        value={content}
        onInput={e => onContent(e.target.value)}
      />

      <button
        type="submit"
        className="TodoForm-submit"
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default TodoForm;