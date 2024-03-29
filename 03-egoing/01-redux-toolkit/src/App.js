import React from "react";
import {
  Provider,
  useSelector,
  useDispatch,
} from "react-redux";
import store from "./modules/store";

import "./App.css";

const App = () => {
  return (
    <div id="container">
      <h1>Root</h1>
      <div id="grid">
        <Provider store={store} >
          <Left1 />
          <Right1 />
        </Provider>
      </div>
    </div>
  );
};

const Left1 = () => {
  return (
    <div>
      <h1>Left1</h1>
      <Left2 />
    </div>
  );
};

const Left2 = () => {
  return (
    <div>
      <h1>Left2</h1>
      <Left3 />
    </div>
  );
};

const Left3 = () => {
  const number = useSelector(state => state.number);
  
  return (
    <div>
      <h1>Left3 : {number}</h1>
    </div>
  );
};

const Right1 = () => {
  return (
    <div>
      <h1>Right</h1>
      <Right2 />
    </div>
  );
};

const Right2 = () => {
  return (
    <div>
      <h1>Right2</h1>
      <Right3 />
    </div>
  );
};

const Right3 = () => {
  const dispatch = useDispatch();

  const onClick = () => dispatch({
    type: "PLUS",
  });
  
  return (
    <div>
      <h1>Right3</h1>
      <button onClick={onClick}>
        +
      </button>
    </div>
  );
};

export default App;