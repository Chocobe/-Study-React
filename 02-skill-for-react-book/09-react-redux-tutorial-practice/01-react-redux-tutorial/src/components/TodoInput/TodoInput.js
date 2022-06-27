import React, {
  memo,
  useCallback,
  useRef,
} from "react";

import {
  FaPlus,
} from "react-icons/fa";

import "./TodoInput.scss";

const TodoInput = ({
  text,
  onText,
  onAdd,
}) => {
  const onSubmit = useCallback(() => {
    onAdd(text);
    onText("");
    $input.current.focus();
  }, [text, onText, onAdd]);

  const $input = useRef(null);
  
  return (
    <div className="TodoInput">
      <input
        className="input"
        placeholder="할 일을 입력하세요."
        value={text}
        onInput={e => onText(e.target.value)}
        ref={$input}
      />

      <button
        className="button"
        onClick={() => onSubmit(text)}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default memo(TodoInput);