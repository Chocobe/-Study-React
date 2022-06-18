import React, {
  useState,
  useCallback,
  useContext,
} from "react";

import { TodoDispatchContext } from "../context/TodoContext";

import { FaPlus } from "react-icons/fa";

import "./TodoInsert.scss";

const TodoInsert = () => {
  const dispatch = useContext(TodoDispatchContext);
  
  const [value, setValue] = useState("");
  
  const onInput = useCallback(({ target }) => {
    setValue(target.value);
  }, []);
  
  const onSubmit = useCallback(e => {
    e.preventDefault();

    dispatch.SUBMIT(value);
    setValue("");
  }, [value, dispatch]);
  
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
        type="submit"
        className="submit"
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default TodoInsert;