const TEXT = "TODO_LIST/TEXT";
const ADD = "TODO_LIST/ADD";
const REMOVE = "TODO_LIST/REMOVE";
const TOGGLE = "TODO_LIST/TOGGLE";

export const text = text => ({
  type: TEXT,
  text,
});

let id = 5;
export const add = text => ({
  type: ADD,
  todo: {
    id: id++,
    content: text,
    done: false,
  },
});

export const remove = id => ({
  type: REMOVE,
  id,
});

export const toggle = id => ({
  type: TOGGLE,
  id,
});

const initialState = {
  text: "초기값 🚀",
  todoList: [
    {
      id: 0,
      content: "리액트 기초 스터디",
      done: true,
    },
    {
      id: 1,
      content: "Redux 기본 스터디",
      done: true,
    },
    {
      id: 2,
      content: "React 와 Redux 연동",
      done: false,
    },
    {
      id: 3,
      content: "Todo List App 만들기",
      done: true,
    },
    {
      id: 4,
      content: "바디 프로필 찍기",
      done: false,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case TEXT: {
      return {
        ...state,
        text: action.text,
      };
    }

    case ADD: {
      return {
        ...state,
        todoList: [
          action.todo,
          ...state.todoList,
        ],
      };
    }

    case REMOVE: {
      return {
        ...state,
        todoList: state.todoList.filter(({ id }) => {
          return id !== action.id;
        }),
      };
    }

    case TOGGLE: {
      return {
        ...state,
        todoList: state.todoList.map(todo => {
          return todo.id === action.id
            ? { ...todo, done: !todo.done }
            : todo;
        }),
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;