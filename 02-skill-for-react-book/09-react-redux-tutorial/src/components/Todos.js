import React from "react";

const TodoItem = ({
  todo, onToggle, onRemove,
}) => {
  return (
    <div className="TodoItem">
      <input
        type="checkbox"
        checked={todo.done}
        onClick={() => onToggle(todo.id)}
        readOnly={true}
      />

      <span style={{
        textDecoration: todo.done ? "line-through" : "none",
        color: todo.done ? "#777" : "#000",
      }}>
        {todo.text}
      </span>

      <button onClick={() => onRemove(todo.id)}>
        삭제
      </button>
    </div>
  );
};

const Todos = ({
  input,
  todos,
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  const onSubmit = e => {
    e.preventDefault();
    onInsert(input);
    onChangeInput("");
  };

  const onInput = e => {
    onChangeInput(e.target.value);
  }

  return (
    <div className="Todos">
      <form onSubmit={onSubmit}>
        <input value={input} onChange={onInput} />
        <button type="submit">등록</button>
      </form>

      <div>
        {todos.map(todo => (
          <TodoItem
            todo={todo}
            onToggle={onToggle}
            onRemove={onRemove}
            key={todo.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Todos;