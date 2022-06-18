import React, {
  useState,
  useCallback,
  useRef,
  useMemo,
} from "react";

export const TodoStateContext = React.createContext({
  todos: [
    {
      id: 0,
      content: "리액트 기초 스터디 하기",
      checked: false,
    },
    {
      id: 1,
      content: "Todo List App 만들기",
      checked: true,
    },
    {
      id: 2,
      content: "Context API 복습 하기",
      checked: false,
    },
  ],
});

export const TodoDispatchContext = React.createContext({
  /** @param { string } content */
  SUBMIT: content => {},
  /** @param { number } id */
  TOGGLE: id => {},
  /** @param { number } id */
  REMOVE: id => {},
});

const TodoContext = ({ children }) => {
  const [todos, setTodos] = useState([
    {
      id: 0,
      content: "여기 살짝 춥다..",
      checked: true,
    },
    {
      id: 1,
      content: "Todo List 에 Context API 적용하기",
      checked: false,
    },
    {
      id: 2,
      content: "MX Mechanical MINI 느낌 너무 좋다!!",
      checked: true,
    },
  ]);

  const nextId = useRef(3);

  const SUBMIT = useCallback(content => {
    const newTodo = {
      id: nextId.current,
      content,
      checked: false,
    };

    nextId.current++;

    setTodos(todos => todos.concat(newTodo));
  }, []);

  const TOGGLE = useCallback(id => {
    setTodos(todos => todos.map(todo => {
      return todo.id === id
        ? {
          ...todo,
          checked: !todo.checked,
        } : todo;
    }));
  }, []);

  const REMOVE = useCallback(id => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }, []);
  
  // const state = {
  //   todos,
  // }
  
  // const dispatch = {
  //   SUBMIT,
  //   TOGGLE,
  //   REMOVE,
  // };

  const state = useMemo(() => ({ todos }), [todos]);
  const dispatch = useMemo(() => ({
    SUBMIT,
    TOGGLE,
    REMOVE,
  }), [SUBMIT, TOGGLE, REMOVE]);
  
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export default TodoContext;