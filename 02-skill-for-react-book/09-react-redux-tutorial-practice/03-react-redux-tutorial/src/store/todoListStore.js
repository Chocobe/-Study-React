import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const CONTENT = "todoList/CONTENT";
const TOGGLE = "todoList/TOGGLE";
const ADD = "todoList/ADD";
const REMOVE = "todoList/REMOVE";

export const content = createAction(CONTENT, content => content);
export const toggle = createAction(TOGGLE, id => id);
export const add = createAction(ADD, () => void(0));
export const remove = createAction(REMOVE, id => id);

const initialState = {
  content: "초기값 🚀",
  items: [
    {
      id: 0,
      content: "React 스터디 하기",
      finished: true,
    },
    {
      id: 1,
      content: "Redux 스터디 하기",
      finished: true,
    },
    {
      id: 2,
      content: "React Redux 마무리 하기",
      finished: false,
    },
  ],
};

let id = 3;
const todoList = handleActions({
  [CONTENT]: (state, { payload: content }) =>
    produce(state, draft => {
      draft.content = content;
    }),
  // [CONTENT]: (state, { payload: content }) => ({
  //   ...state,
  //   content,
  // }),

  [TOGGLE]: (state, { payload: id }) =>
    produce(state, draft => {
      const todo = draft.items.find(todo => todo.id === id);
      todo.finished = !todo.finished;
    }),
  // [TOGGLE]: (state, { payload: id }) => ({
  //   ...state,
  //   items: state.items.map(todo => {
  //     return todo.id !== id
  //       ? todo
  //       : { ...todo, finished: !todo.finished };
  //   }),
  // }),

  [ADD]: state => produce(state, draft => {
    const newTodo = {
      id: id++,
      content: state.content,
      finished: false,
    };

    draft.items.push(newTodo);
  }),
  // [ADD]: state => {
  //   const newTodo = {
  //     id: id++,
  //     content: state.content,
  //     finished: false,
  //   };

  //   return {
  //     ...state,
  //     items: state.items.concat(newTodo),
  //   };
  // },

  [REMOVE]: (state, { payload: id }) =>
    produce(state, draft => {
      const index = draft.items.findIndex(todo => todo.id === id);
      draft.items.splice(index, 1);
    }),
  // [REMOVE]: (state, { payload: id }) => ({
  //   ...state,
  //   items: state.items.filter(todo => todo.id !== id),
  // }),
}, initialState);

export default todoList;