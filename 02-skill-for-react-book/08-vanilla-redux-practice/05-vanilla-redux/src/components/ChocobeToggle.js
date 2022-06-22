import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
} from "react";
import cn from "classnames";
import store from "../store/store";
import { ACTION_TYPE } from "../store/types";
import { ACTION_GENERATOR } from "../store/actions";

import "./ChocobeToggle.scss";

const ChocobeToggle = () => {
  const unsubscribe = useRef(null);
  const [toggle, setToggle] = useState(
    store.getState().toggle,
  );
  const [counter, setCounter] = useState(
    store.getState().counter
  );

  const onToggle = useCallback(() => {
    store.dispatch(
      ACTION_GENERATOR[
        ACTION_TYPE.TOGGLE
      ]()
    );
  }, []);

  useEffect(() => {
    unsubscribe.current = store.subscribe(() => {
      const { toggle, counter } = store.getState();

      setToggle(toggle);
      setCounter(counter);
    });

    return unsubscribe.current;
  }, []);
  
  return (
    <div className="ChocobeToggle">
      <h2 className="title">
        Chocobe Toggle ({counter})
      </h2>

      <div
        className={cn(
          "toggle", 
          { active: toggle }
        )}
        onClick={onToggle}
      />
    </div>
  );
};

export default ChocobeToggle;