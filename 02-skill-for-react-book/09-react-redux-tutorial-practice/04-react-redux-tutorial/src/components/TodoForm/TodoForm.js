import React, {
  useRef,
} from "react";
import {
  FaPlus,
} from "react-icons/fa";

import "./TodoForm.scss";

const TodoForm = ({
  input,
  onInput,
  onAdd,
}) => {
  const $input = useRef(null);
  
  const onSubmit = e => {
    e.preventDefault();
    onAdd();
    onInput("");

    $input.current.focus();
  }
  
  return (
    <form className="TodoForm">
      <input
        className="input"
        placeholder="할 일을 입력하세요."
        value={input}
        onInput={e => onInput(e.target.value)}
        ref={$input}
      />

      <button
        className="submit"
        type="submit"
        onClick={onSubmit}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default TodoForm;