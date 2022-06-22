import React, {
  useCallback,
  useEffect,
  useRef,
} from "react";
import store from "../store/store";
import cn from "classnames";
import { ACTION_TYPE_MAPPER } from "../store/types";
import { ACTION_GENERATOR_MAPPER } from "../store/actions";

import "./MyToggle.scss";

const MyToggle = () => {
  const $toggle = useRef(null);
  const unsubscribe = useRef(null);
  
  const onClick = useCallback(() => {
    store.dispatch(
      ACTION_GENERATOR_MAPPER[
        ACTION_TYPE_MAPPER.TOGGLE
      ]()
    );
  }, []);

  const changeToggle = useCallback(toggle => {
    toggle
      ? $toggle.current.classList.add("active")
      : $toggle.current.classList.remove("active");
  }, []);

  useEffect(() => {
    changeToggle(
      store.getState().toggle
    );
    
    unsubscribe.current = store.subscribe(() => {
      const { toggle } = store.getState();

      changeToggle(toggle);
      
      // toggle
      //   ? $toggle.current.classList.add("active")
      //   : $toggle.current.classList.remove("active");

      return unsubscribe.current;
    })
  }, [changeToggle]);

  return (
    <div className="MyToggle">
      <h2 className="MyToggle-title">
        Toggle Practice
      </h2>

      <div 
        className={cn(
          "MyToggle-toggle", 
          // { activel: state.toggle }
        )}
        onClick={onClick}
        ref={$toggle}
      />
    </div>
  );
};

export default MyToggle;