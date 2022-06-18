import React, {
  useContext,
} from "react";
import { TodoDispatchContext } from "../context/TodoContext";

import { 
  MdCheckBox, 
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from "react-icons/md";
import cn from "classnames";

import "./TodoListItem.scss";

const TodoListItem = ({ todo }) => {
  const dispatch = useContext(TodoDispatchContext);
  
  const { id, text, checked } = todo;

  const onToggle = () => dispatch.TOGGLE(id);
  const onRemove = () => dispatch.REMOVE(id);

  return (
    <div className="TodoListItem">
      <div 
        className={cn("content", { checked })}
        onClick={onToggle}
      >
        <div className="content-checkbox">
          {checked
            ? <MdCheckBox />
            : <MdCheckBoxOutlineBlank />
          }
        </div>

        <div className="content-text">
          {text}
        </div>
      </div>

      <div className="actions">
        <button
          className="actions-remove"
          onClick={onRemove}
        >
          <MdRemoveCircleOutline />
        </button>
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);