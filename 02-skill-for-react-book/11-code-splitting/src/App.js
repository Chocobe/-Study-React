import React, {
  useState,
  Suspense,
  // lazy,
} from "react";
import loadable from "@loadable/component";
import logo from './logo.svg';
import './App.css';

// const SplitMe = lazy(() => import("./components/SplitMe"));
const SplitMe = loadable(() => import("./components/SplitMe"), {
  fallback: <div>Loading...</div>,
});

const App = () => {
  const [visible, setVisible] = useState(false);

  const onMouseOver = () => {
    SplitMe.preload();
  };
  
  const onClick = () => {
    setVisible(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p
          onMouseOver={onMouseOver}
          onClick={onClick}
        >
          Hello World
        </p>

        <Suspense fallback={<div>Loading...</div>}>
          {visible && <SplitMe />}
        </Suspense>
      </header>
    </div>
  );
};

export default App;