// action 타입
const CHANGE_INPUT = "todos/CHANGE_INPUT";
const TOGGLE = "todos/TOGGLE";
const INSERT = "todos/INSERT";
const REMOVE = "todos/REMOVE";

// action 객체 생성 함수
let id = 3;
export const changeInput = input => ({
  type: CHANGE_INPUT,
  input,
});
export const toggle = id => ({
  type: TOGGLE,
  id,
});
export const insert = text => ({
  type: INSERT,
  id: id++,
  text,
  done: false,
});
export const remove = id => ({
  type: REMOVE,
  id,
});

// state 초기값
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

// reducer()
const todos = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT: {
      return {
        ...state,
        input: action.input,
      };
    }

    case TOGGLE: {
      return {
        ...state,
        todos: state.todos.map(todo => {
          return todo.id === action.id
            ? { ...todo, done: !todo.done }
            : todo;
        }),
      }
    }

    case INSERT: {
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };
    }

    case REMOVE: {
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id),
      };
    }

    default: {
      return state;
    }
  }
};

export default todos;