/**
 * @typedef {{
 *  id: number;
 *  text: string;
 *  checked: boolean;
 * }} TodoItem
 */

/**
 * @param { TodoItem[] } prevTodos 
 * @param { {
 *  type: "SUBMIT" | "TOGGLE" | "REMOVE";
 *  todo?: TodoItem;
 *  id?: number;
 * } } actions
 */
export const todoReducer = (prevTodos, actions) => {
  const { type } = actions;

  switch (type) {
    case "SUBMIT": {
      const todo = actions.todo;

      return todo
        ? [todo, ...prevTodos]
        : prevTodos;
    }

    case "TOGGLE": {
      const id = actions.id;

      return isNaN(id)
        ? prevTodos
        : prevTodos.map(todo => {
          return todo.id !== id
            ? todo
            : { ...todo, checked: !todo.checked };
        });
    }

    case "REMOVE": {
      const id = actions.id;

      return isNaN(id)
        ? prevTodos
        : prevTodos.filter(todo => todo.id !== id);
    }

    default: {
      return prevTodos;
    }
  }
};