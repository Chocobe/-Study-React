/**
 * reducer() 만들기 04 - immer 라이브러리 연동
 */
import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// 1. Action 타입
const CHANGE_INPUT = "todos/CHANGE_INPUT";
const TOGGLE = "todos/TOGGLE";
const INSERT = "todos/INSERT";
const REMOVE = "todos/REMOVE";

// 2. Action 생성 함수
export const changeInput = createAction(CHANGE_INPUT, input => input);

export const toggle = createAction(TOGGLE, id => id);

let id = 3;
export const insert = createAction(INSERT, text => ({
  id: id++,
  text,
  done: false,
}));

export const remove = createAction(REMOVE, id => id);

// 3. state 초기값
const initialState = {
  input: "",
  todos: [
    {
      id: 1,
      text: "리덕스 기초 배우기",
      done: true,
    },
    {
      id: 2,
      text: "리액트와 리덕스 사용하기",
      done: false,
    },
  ],
};

// 4. reducer()
const todos = handleActions({
  [CHANGE_INPUT]: (state, { payload: input }) =>
    produce(state, draft => {
      draft.input = input;
    }),

  [TOGGLE]: (state, { payload: id }) =>
    produce(state, draft => {
      const todo = draft.todos.find(todo => todo.id === id);
      todo.done = !todo.done;
    }),

  [INSERT]: (state, { payload: todo }) =>
    produce(state, draft => {
      draft.todos.push(todo);
    }),

  [REMOVE]: (state, { payload: id }) =>
    produce(state, draft => {
      const index = draft.todos.findIndex(todo => todo.id === id);
      draft.todos.splice(index, 1);
    }),
}, initialState);

export default todos;




// /**
//  * reducer() 만들기 03 - handleActions() 의 가독성 높이기
//  */
// import { createAction, handleActions } from "redux-actions";

// // Action 타입
// const CHANGE_INPUT = "todos/CHANGE_INPUT";
// const TOGGLE = "todos/TOGGLE";
// const INSERT = "todos/INSERT";
// const REMOVE = "todos/REMOVE";

// // Action 생성 함수
// export const changeInput = createAction(CHANGE_INPUT, input => input);

// export const toggle = createAction(TOGGLE, id => id);

// let id = 3;
// export const insert = createAction(INSERT, text => ({
//   id: id++,
//   text,
//   done: false,
// }));

// export const remove = createAction(REMOVE, id => id);

// // state 초기값
// const initialState = {
//   input: "",
//   todos: [
//     {
//       id: 1,
//       text: "리덕스 기초 배우기",
//       done: true,
//     },
//     {
//       id: 2,
//       text: "리액트와 리덕스 사용하기",
//       done: false,
//     },
//   ],
// };

// const todos = handleActions({
//   [CHANGE_INPUT]: (state, { payload: input }) => ({
//     ...state,
//     input,
//   }),
  
//   [TOGGLE]: (state, { payload: id }) => ({
//     ...state,
//     todos: state.todos.map(todo => {
//       return todo.id !== id
//         ? todo
//         : { ...todo, done: !todo.done };
//     }),
//   }),

//   [INSERT]: (state, { payload: todo }) => {
//     return {
//       ...state,
//       todos: state.todos.concat(todo),
//     };
//   },

//   [REMOVE]: (state, { payload: id }) => ({
//     ...state,
//     todos: state.todos.filter(todo => todo.id !== id),
//   }),
// }, initialState);

// export default todos;



// /**
//  * reducer() 만들기 02 - redux-actions 사용
//  */
// import { createAction, handleActions } from "redux-actions";

// // Action 타입
// const CHANGE_INPUT = "todos/CHANGE_INPUT";
// const TOGGLE = "todos/TOGGLE";
// const INSERT = "todos/INSERT";
// const REMOVE = "todos/REMOVE";

// // Action 객체 생성 함수
// export const changeInput = createAction(CHANGE_INPUT, input => input);

// export const toggle = createAction(TOGGLE, id => id);

// let id = 3;
// export const insert = createAction(INSERT, text => ({
//   id: id++,
//   text,
//   done: false,
// }));

// export const remove = createAction(REMOVE, id => id);

// // state 초기값
// const initialState = {
//   input: "",
//   todos: [
//     {
//       id: 1,
//       text: "리덕스 기초 배우기",
//       done: true,
//     },
//     {
//       id: 2,
//       text: "리액트와 리덕스 사용하기",
//       done: false,
//     },
//   ],
// };

// // reducer() 
// const todos = handleActions({
//   [CHANGE_INPUT]: (state, action) => ({
//     ...state,
//     input: action.payload,
//   }),

//   [TOGGLE]: (state, action) => ({
//     ...state,
//     todos: state.todos.map(todo => {
//       return todo.id !== action.payload
//         ? todo
//         : { ...todo, done: !todo.done };
//     }),
//   }),

//   [INSERT]: (state, action) => ({
//     ...state,
//     todos: state.todos.concat(action.payload),
//   }),

//   [REMOVE]: (state, action) => ({
//     ...state,
//     todos: state.todos.filter(todo => todo.id !== action.payload),
//   }),
// }, initialState);

// export default todos;





/**
 * reducer() 만들기 01 - redux-actions 사용
 */
// // action 타입
// const CHANGE_INPUT = "todos/CHANGE_INPUT";
// const TOGGLE = "todos/TOGGLE";
// const INSERT = "todos/INSERT";
// const REMOVE = "todos/REMOVE";

// // action 객체 생성 함수
// let id = 3;
// export const changeInput = input => ({
//   type: CHANGE_INPUT,
//   input,
// });
// export const toggle = id => ({
//   type: TOGGLE,
//   id,
// });
// export const insert = text => ({
//   type: INSERT,
//   todo: {
//     id: id++,
//     text,
//     done: false,
//   },
// });
// export const remove = id => ({
//   type: REMOVE,
//   id,
// });

// // state 초기값
// const initialState = {
//   input: "",
//   todos: [
//     {
//       id: 1,
//       text: "리덕스 기초 배우기",
//       done: true,
//     },
//     {
//       id: 2,
//       text: "리액트와 리덕스 사용하기",
//       done: false,
//     },
//   ],
// };

// // reducer()
// const todos = (state = initialState, action) => {
//   switch (action.type) {
//     case CHANGE_INPUT: {
//       console.log("받은 값: ", action.input);
      
//       return {
//         ...state,
//         input: action.input,
//       };
//     }

//     case TOGGLE: {
//       return {
//         ...state,
//         todos: state.todos.map(todo => {
//           return todo.id === action.id
//             ? { ...todo, done: !todo.done }
//             : todo;
//         }),
//       }
//     }

//     case INSERT: {
//       return {
//         ...state,
//         todos: state.todos.concat(action.todo),
//       };
//     }

//     case REMOVE: {
//       return {
//         ...state,
//         todos: state.todos.filter(todo => todo.id !== action.id),
//       };
//     }

//     default: {
//       return state;
//     }
//   }
// };

// export default todos;