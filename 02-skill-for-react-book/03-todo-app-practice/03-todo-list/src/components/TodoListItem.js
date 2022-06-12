import React, {
  useCallback,
} from "react";

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

  const onToggle = useCallback(() => {
    handleToggle(id);
  }, [handleToggle, id]);

  const onRemove = useCallback(() => {
    handleRemove(id);
  }, [handleRemove, id]);
  
  return (
    <div className="TodoListItem">
      <div 
        className={cn("content", { checked })}
        onClick={onToggle}
      >
        <div className="checkbox">
          {checked
            ? <MdCheckBox />
            : <MdCheckBoxOutlineBlank />
          }
        </div>

        <div className="text">
          {text}
        </div>
      </div>

      <div className="actions">
        <button
          className="remove"
          onClick={onRemove}
        >
          <MdRemoveCircleOutline />
        </button>
      </div>
    </div>
  );
};

export default React.memo(TodoListItem);