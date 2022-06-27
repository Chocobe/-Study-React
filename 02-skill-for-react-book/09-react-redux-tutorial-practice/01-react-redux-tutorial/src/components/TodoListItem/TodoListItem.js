import React, {
  memo,
  useMemo,
} from "react";

import cn from "classnames";

import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from "react-icons/md";

import "./TodoListItem.scss";

const TodoListItem = ({
  todo,
  toggle,
  remove,
}) => {
  const id = useMemo(() => todo.id, [todo.id]);
  const content = useMemo(() => todo.content, [todo.content]);
  const done = useMemo(() => todo.done, [todo.done]);
  
  return (
    <div className="TodoListItem">
      <div 
        className={cn(
          "todo",
          { done },
        )}
        onClick={() => toggle(id)}
      >
        <div className="todo-checkbox">
          {done
            ? <MdCheckBox />
            : <MdCheckBoxOutlineBlank />
          }
        </div>
        
        <div className="todo-content">
          {content}
        </div>
      </div>

      <button 
        className="remove"
        onClick={() => remove(id)}
      >
        <MdRemoveCircleOutline />
      </button>
    </div>
  );
};

export default memo(TodoListItem);