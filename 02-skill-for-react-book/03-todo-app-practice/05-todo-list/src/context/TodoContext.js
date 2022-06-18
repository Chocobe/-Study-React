import React, {
  useCallback,
  useMemo,
  useRef,
  useReducer,
} from "react";

import { todoReducer } from "./todoReducer";

/**
 * @type { import("react").Context<{
 *  id: number;
 *  text: string;
 *  checked: boolean;
 * }[]>}
 */
export const TodoStateContext = React.createContext([]);

/**
 * @type { import("react").Context<{
 *  SUBMIT: (text: string) => void;
 *  TOGGLE: (id: number) => void;
 *  REMOVE: (id: number) => void;
 * }>}
 */
export const TodoDispatchContext = React.createContext({});

const TodoContext = ({ children }) => {
  const [todos, dispatchTodos] = useReducer(todoReducer, undefined, () => []);
  
  const nextId = useRef(0);

  const SUBMIT = useCallback(text => {
    const newTodo = {
      id: nextId.current,
      text,
      checked: false,
    };

    nextId.current++;

    dispatchTodos({
      type: "SUBMIT",
      todo: newTodo,
    });
  }, []);

  const TOGGLE = useCallback(id => {
    dispatchTodos({
      type: "TOGGLE",
      id,
    });
  }, []);

  const REMOVE = useCallback(id => {
    dispatchTodos({
      type: "REMOVE",
      id,
    });
  }, []);

  const dispatch = useMemo(() => ({
    SUBMIT,
    TOGGLE,
    REMOVE,
  }), [SUBMIT, TOGGLE, REMOVE]);

  return (
    <TodoStateContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export default TodoContext;