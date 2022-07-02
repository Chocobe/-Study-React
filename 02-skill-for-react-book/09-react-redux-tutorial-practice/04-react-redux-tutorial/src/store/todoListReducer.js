import { createAction, handleActions } from "redux-actions";

const INPUT = "todoList/INPUT";
const TOGGLE = "todoList/TOGGLE";
const ADD = "todoList/ADD";
const REMOVE = "todoList/REMOVE";

export const input = createAction(INPUT, input => input);
export const toggle = createAction(TOGGLE, id => id);
export const add = createAction(ADD, () => void(0));
export const remove = createAction(REMOVE, id => id);

const initialState = {
  input: "",
  items: [
    {
      id: 0,
      content: "리액트 스터디 하기",
      isFinished: true,
    },
    {
      id: 1,
      content: "Redux 스터디 하기",
      isFinished: true,
    },
    {
      id: 2,
      content: "React Redux 복습하기",
      isFinished: false,
    },
  ],
};

let nextId = 3;
const todoListReducer = handleActions({
  [INPUT]: (state, { payload: input }) => ({
    ...state,
    input,
  }),

  [TOGGLE]: (state, { payload: id }) => ({
    ...state,
    items: state.items.map(todo => {
      return todo.id !== id
        ? todo
        : { ...todo, isFinished: !todo.isFinished };
    }),
  }),

  [ADD]: state => {
    const newTodo = {
      id: nextId++,
      content: state.input,
      isFinished: false,
    };

    return {
      ...state,
      items: [newTodo, ...state.items],
    };
  },

  [REMOVE]: (state, { payload: id }) => ({
    ...state,
    items: state.items.filter(todo => todo.id !== id),
  }),
}, initialState);

export default todoListReducer;