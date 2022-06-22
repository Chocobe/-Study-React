import React, {
  useEffect,
  useRef,
  useCallback,
} from "react";
import store from "../store/store";
import { ACTION_TYPE_MAPPER } from "../store/types";
import { ACTION_GENERATOR_MAPPER } from "../store/actions";

import "./MyCounter.scss";

const MyCounter = () => {
  const $counter = useRef(null);
  const unsubscribe = useRef(null);

  useEffect(() => {
    $counter.current.innerText = store.getState().counter;

    unsubscribe.current = store.subscribe(() => {
      const { counter } = store.getState();

      $counter.current.innerText = counter;
    });

    return unsubscribe.current;
  }, []);

  const onIncrease = useCallback(() => {
    store.dispatch(
      ACTION_GENERATOR_MAPPER[
        ACTION_TYPE_MAPPER.INCREASE
      ](3)
    );
  }, []);

  const onDecrease = useCallback(() => {
    store.dispatch(
      ACTION_GENERATOR_MAPPER[
        ACTION_TYPE_MAPPER.DECREASE
      ](3)
    );
  }, []);
  
  return (
    <div className="MyCounter">
      <h2 className="title">
        Counter Practice
      </h2>

      <div className="counterWrapper">
        Counter:
        <span 
          className="counterWrapper-counter"
          ref={$counter}
        >
          0
        </span>
      </div>

      <div className="actions">
        <button
          className="actions-button increase"
          onClick={onIncrease}
        >
          Increase
        </button>

        <button
          className="actions-button decrease"
          onClick={onDecrease}
        >
          Decrease
        </button>
      </div>
    </div>
  );
};

export default MyCounter;