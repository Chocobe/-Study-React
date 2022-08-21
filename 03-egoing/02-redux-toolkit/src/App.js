import React from "react";
import { 
  Provider,
  useSelector,
  useDispatch,
} from "react-redux";
import store from "./modules/store";
import { counterActions } from "./modules/counter";

const Counter = () => {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  const onClick = () => dispatch(counterActions.up(300));

  return (
    <div>
      <button onClick={onClick}>+</button>
      {count}
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Hello Redux Toolkit</h1>
        <Counter />
      </div>
    </Provider>
  );
};

export default App;