import React from "react";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
import cn from "classnames";

import "./TodoListItem.scss";

const TodoListItem = ({
  todo,
  onToggle,
  onRemove,
}) => {
  const { id, content, finished } = todo;
  
  return (
    <div className="TodoListItem">
      <div 
        className={cn(
          "TodoListItem-wrapper",
          { "TodoListItem-wrapper__finished": finished }
        )}
        onClick={() => onToggle(id)}
      >
        <div className="TodoListItem-wrapper-checkbox">
          {finished
            ? <MdCheckBox />
            : <MdCheckBoxOutlineBlank />
          }
        </div>

        <div className="TodoListItem-wrapper-content">
          {content}
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

export default React.memo(TodoListItem);