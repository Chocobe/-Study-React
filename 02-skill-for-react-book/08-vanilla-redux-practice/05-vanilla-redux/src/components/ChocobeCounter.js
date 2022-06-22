import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
} from "react";
import store from "../store/store";
import { ACTION_TYPE } from "../store/types";
import { ACTION_GENERATOR } from "../store/actions";
import cn from "classnames";

import "./ChocobeCounter.scss";

const ChocobeCounter = () => {
  const [counter, setCounter] = useState(
    store.getState().counter
  );

  const [toggle, setToggle] = useState(
    store.getState().toggle
  );

  const unsubscribe = useRef(null);

  const onClick = useCallback(e => {
    const { target: { name } } = e;

    store.dispatch(
      ACTION_GENERATOR[
        ACTION_TYPE[name]
      ](3)
    );
  }, []);

  useEffect(() => {
    unsubscribe.current = store.subscribe(() => {
      const { counter, toggle } = store.getState();
      setCounter(counter);
      setToggle(toggle);
    });

    return unsubscribe.current;
  }, []);
  
  return (
    <div className="ChocobeCounter">
      <h2 className="title">
        Chocobe Counter
      </h2>

      <div className="counterWrapper">
        Counter:
        <span className="counterWrapper-counter">
          {counter}
        </span>
      </div>

      <div className="actions">
        <button
          name={ACTION_TYPE.INCREASE}
          onClick={onClick}
          className={cn(
            "actions-button",
            { active: toggle },
          )}
        >
          Increase
        </button>

        <button
          name={ACTION_TYPE.DECREASE}
          onClick={onClick}
          className={cn(
            "actions-button",
            { active: toggle },
          )}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default ChocobeCounter;