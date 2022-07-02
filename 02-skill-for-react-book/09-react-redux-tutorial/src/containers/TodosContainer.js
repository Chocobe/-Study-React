// 02. useSelector(), useDispatch() 를 사용한 TodosContainer 만들기
import React, {
  useCallback,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import Todos from "../components/Todos";
import { changeInput, insert, toggle, remove } from "../modules/todos";

const TodosContainer = () => {
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }));

  const dispatch = useDispatch();

  const onChangeInput = useCallback(input => {
    dispatch(changeInput(input));
  }, [dispatch]);

  const onInsert = useCallback(text => {
    dispatch(insert(text));
  }, [dispatch]);
  
  const onToggle = useCallback(id => {
    dispatch(toggle(id));
  }, [dispatch]);

  const onRemove = useCallback(id => {
    dispatch(remove(id));
  }, [dispatch]);

  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onToggle={onToggle}
      onInsert={onInsert}
      onRemove={onRemove}
    />
  );
};

export default React.memo(TodosContainer);



// 01. connect() 를 사용한 TodosContainer 만들기
// import React from "react";
// import { connect } from "react-redux";
// import Todos from "../components/Todos";
// import {
//   changeInput,
//   toggle,
//   insert,
//   remove,
// } from "../modules/todos";

// const TodosContainer = ({
//   input,
//   todos,
//   changeInput,
//   toggle,
//   insert,
//   remove,
// }) => {
//   return (
//     <Todos
//       input={input}
//       todos={todos}
//       onChangeInput={changeInput}
//       onToggle={toggle}
//       onInsert={insert}
//       onRemove={remove}
//     />
//   );
// };

// const mapStateToProps = state => ({
//   input: state.todos.input,
//   todos: state.todos.todos,
// });

// const mapDispatchToProps = dispatch => ({
//   changeInput: text => dispatch(changeInput(text)),
//   toggle: id => dispatch(toggle(id)),
//   insert: text => dispatch(insert(text)),
//   remove: id => dispatch(remove(id)),
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(TodosContainer);