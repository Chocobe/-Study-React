import React from "react";

import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from "react-icons/md";

import cn from "classnames";

import "./TodoListItem.scss";

const TodoListItem = ({
  todo, 
  handleToggle,
  handleRemove,
}) => {
  const { id, text, checked } = todo;
  
  return (
    <div className="TodoListItem">
      <div 
        className={cn("content", { checked })}
        onClick={() => handleToggle(id)}
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

      <button 
        className="remove"
        onClick={() => handleRemove(id)}
      >
        <MdRemoveCircleOutline />
      </button>
    </div>
  );
};

export default React.memo(TodoListItem);