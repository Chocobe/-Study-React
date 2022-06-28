const ADD = "todoList/ADD";
const REMOVE = "todoList/REMOVE";
const TOGGLE = "todoList/TOGGLE";

export const add = content => ({
  type: ADD,
  content,
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
  todoList: [
    {
      id: 0,
      content: "리액트 스터디",
      toggle: true,
    },
    {
      id: 1,
      content: "Redux 스터디",
      toggle: true,
    },
    {
      id: 2,
      content: "Redux 를 이용한 TodoList 만들기",
      toggle: false,
    },
    {
      id: 3,
      content: "집중하기",
      toggle: true,
    },
  ],
};

let nextId = 4;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD: {
      const todo = {
        id: nextId++,
        content: action.content,
        toggle: false,
      };

      return {
        ...state,
        todoList: [todo, ...state.todoList],
      };
    }

    case REMOVE: {
      return {
        ...state,
        todoList: state.todoList
          .filter(todo => todo.id !== action.id),
      };
    }

    case TOGGLE: {
      return {
        ...state,
        todoList: state.todoList.map(todo => {
          return todo.id !== action.id
            ? todo
            : { ...todo, toggle: !todo.toggle };
        }),
      };
    }
    
    default: {
      return state;
    }
  }
};

export default reducer;