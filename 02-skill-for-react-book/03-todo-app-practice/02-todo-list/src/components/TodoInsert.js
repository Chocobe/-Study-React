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

  const onChange = useCallback(({ target: { value } }) => {
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
        type="text"
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />

      <button
        className="button"
        type="submit"
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default React.memo(TodoInsert);