import React, {
  //
} from "react";

import cn from "classnames";

import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from "react-icons/md";

import "./TodoListItem.scss";

const TodoListItem = ({ todo, onToggleTodo, onRemove }) => {
  const { id, text, checked } = todo;
  
  return (
    <div className="TodoListItem">
      <div 
        className={cn("TodoListItem-content", { checked })}
        onClick={() => onToggleTodo(id)}
      >
        {checked
          ? <MdCheckBox />
          : <MdCheckBoxOutlineBlank />
        }

        <div className="TodoListItem-content-text">
          {text}
        </div>
      </div>

      <button 
        className="TodoListItem-remove"
        onClick={() => onRemove(id)}
      >
        <MdRemoveCircleOutline />
      </button>
    </div>
  );
};

export default TodoListItem;