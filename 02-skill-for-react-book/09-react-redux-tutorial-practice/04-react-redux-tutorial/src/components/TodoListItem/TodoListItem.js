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
  onToggle,
  onRemove,
}) => {
  const { id, content, isFinished } = todo;
  
  return (
    <div className="TodoListItem">
      <div 
        className={cn(
          "info",
          { finished: isFinished }
        )}
        onClick={() => onToggle(id)}
      >
        <div className="info-checkbox">
          {isFinished
            ? <MdCheckBox />
            : <MdCheckBoxOutlineBlank />
          }
        </div>

        <p className="info-content">
          {content}
        </p>
      </div>

      <div className="actions">
        <button
          className="actions-remove"
          onClick={() => onRemove(id)}
        >
          <MdRemoveCircleOutline />
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;