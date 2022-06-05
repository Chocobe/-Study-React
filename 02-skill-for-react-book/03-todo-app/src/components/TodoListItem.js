import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";

import cn from "classnames";

import "./TodoListItem.scss";

const TodoListItem = ({ 
  todo, onRemove, onToggle,
}) => {
  const { id, text, checked } = todo;

  return (
    <div className="TodoListItem">
      <div 
        className={cn("checkbox", { checked })}
        onClick={() => onToggle(id)}
      >
        {
          checked 
            ? <MdCheckBox /> 
            : <MdCheckBoxOutlineBlank />
        }

        <div className="text">
          {text}
        </div>
      </div>

      <button 
        className="remove"
        onClick={() => onRemove(id)}
      >
        <MdRemoveCircleOutline />
      </button>
    </div>
  );
};

export default TodoListItem;