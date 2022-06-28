import React, {
  memo,
} from "react";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from "react-icons/md";

import cn from "classnames";

import "./TodoListItem.scss";

const TodoListItem = ({
  id,
  content,
  toggle,
  onRemove,
  onToggle,
}) => {
  return (
    <div className="TodoListItem">
      <div 
        className={cn(
          "wrapper",
          { "checked": toggle }
        )}
        onClick={() => onToggle(id)}
      >
        <div className="wrapper-checkbox">
          {toggle
            ? <MdCheckBox />
            : <MdCheckBoxOutlineBlank />
          }
        </div>

        <div className="wrapper-content">
          {content}
        </div>
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

export default memo(TodoListItem);