import { 
  useState,
  useRef,
  useCallback,
  useReducer,
} from "react";

import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const createBulkTodos = () => {
  console.log("bulkTodos 생성 중...")
  
  return Array.from(
    { length: 2500 },
    (_, i) => ({
      id: i,
      text: `할 일 ${i}`,
      checked: (Math.floor(Math.random() * 2) % 2) === 0,
    })
  );
};

const reducer = (todos, action) => {
  const { type } = action;
  
  switch(type) {
    case "INSERT": {
      const { todo } = action;
      return todos.concat(todo);
    }

    case "REMOVE": {
      const { id } = action;
      return todos.filter(curTodo => curTodo.id !== id);
    }

    case "TOGGLE": {
      const { id } = action;
      return todos.map(curTodo => 
        curTodo.id === id
          ? { ...curTodo, checked: !curTodo.checked }
          : curTodo
      );
    }

    default: {
      return todos;
    }
  }
}

const App = () => {
  const [todos, dispatch] = useReducer(reducer, undefined, createBulkTodos);

  // const [todos, setTodos] = useState(createBulkTodos());
  
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     text: "리액트의 기초 알아보기",
  //     checked: true,
  //   },
  //   {
  //     id: 2,
  //     text: "컴포넌트 스타일링 해 보기",
  //     checked: true,
  //   },
  //   {
  //     id: 3,
  //     text: "일정 관리 앱 만들어 보기",
  //     checked: false,
  //   },
  // ]);

  // const nextId = useRef(4);

  const nextId = useRef(2500);

  const onInsert = useCallback(text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };

    // setTodos(todos => todos.concat(todo));

    dispatch({
      type: "INSERT",
      todo,
    });
    nextId.current++;
  }, []);

  const onRemove = useCallback(id => {
    // setTodos(todos => todos.filter(todo => todo.id !== id));
    dispatch({
      type: "REMOVE",
      id,
    });
  }, []);

  const onToggle = useCallback(id => {
    // setTodos(todos => {
    //   return todos.map(
    //     todo => todo.id === id
    //       ? { ...todo, checked: !todo.checked }
    //       : todo
    //   );
    // });

    dispatch({
      type: "TOGGLE",
      id,
    });
  }, []);
  
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList 
        todos={todos} 
        onRemove={onRemove} 
        onToggle={onToggle}
      />
    </TodoTemplate>
  );
};

export default App;