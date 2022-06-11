import React, {
  useState,
  useCallback,
} from "react";

import {
  MdAdd,
} from "react-icons/md";

import "./TodoInsert.scss";

const TodoInsert = ({ onAddTodo }) => {
  const [value, setValue] = useState("");

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(e => {
    e.preventDefault();
    
    onAddTodo(value);
    setValue("");
  }, [onAddTodo, value]);
  
  return (
    <form 
      className="TodoInsert"
      onSubmit={onSubmit}
    >
      <input
        className="TodoInsert-input"
        placeholder="할 일을 입력해 주세요"
        value={value}
        onChange={onChange}
      />

      <button
        className="TodoInsert-submit"
        type="submit"
      >
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;