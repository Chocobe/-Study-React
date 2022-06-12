import React, {
  useState,
  useCallback,
} from "react";

import {
  FaPlus,
} from "react-icons/fa";

import "./TodoInsert.scss";

const TodoInsert = ({ handleInsert }) => {
  const [value, setValue] = useState("");
  
  const onInput = useCallback(({ target: { value } }) => {
    setValue(value);
  }, []);

  const onSubmit = useCallback(e => {
    e.preventDefault();

    handleInsert(value);
    setValue("");
  }, [value, handleInsert]);
  
  return (
    <form 
      className="TodoInsert"
      onSubmit={onSubmit}
    >
      <input
        className="input"
        placeholder="할 일을 입력하세요."
        value={value}
        onInput={onInput}
      />

      <button
        className="submit"
        type="submit"
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default TodoInsert;