import React, {
  useCallback,
  useContext,
} from "react";

import { TodoDispatchContext } from "../context/TodoContext";

import cn from "classnames";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from "react-icons/md";

import "./TodoListItem.scss";

const TodoListItem = ({ todo }) => {
  const dispatch = useContext(TodoDispatchContext);
  
  const { id, content, checked } = todo;

  const onToggle = useCallback(() => {
    dispatch.TOGGLE(id);
  }, [dispatch, id]);

  const onRemove = useCallback(() => {
    dispatch.REMOVE(id);
  }, [id, dispatch]);
  
  return (
    <div className="TodoListItem">
      <div 
        className="content"
        onClick={onToggle}
      >
        <div className={cn("content-checkbox", { checked })}>
          {checked
            ? <MdCheckBox />
            : <MdCheckBoxOutlineBlank />
          }
        </div>

        <div className="content-text">
          {content}
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