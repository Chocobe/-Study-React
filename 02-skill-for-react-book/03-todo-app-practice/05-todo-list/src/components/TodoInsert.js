import React, {
  useState,
  useContext,
} from "react";
import { TodoDispatchContext } from "src/context/TodoContext";

import { FaPlus } from "react-icons/fa";

import "./TodoInsert.scss";

const TodoInsert = () => {
  const dispatch = useContext(TodoDispatchContext);
  
  const [value, setValue] = useState("");

  const onInput = e => setValue(e.target.value);
  const onSubmit = e => {
    e.preventDefault();

    dispatch.SUBMIT(value);
    setValue("");
  };

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

export default React.memo(TodoInsert);