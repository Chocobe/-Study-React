import { ACTION_TYPE_MAPPER } from "./types";

const initialState = {
  toggle: true,
  counter: 333,
};

export const reducer = (
  state = initialState, 
  action
) => {
  const { type } = action;

  switch (type) {
    case ACTION_TYPE_MAPPER.TOGGLE: {
      return {
        ...state,
        toggle: !state.toggle,
      };
    }

    case ACTION_TYPE_MAPPER.INCREASE: {
      const { difference } = action;
      const { counter } = state;

      return {
        ...state,
        counter: counter + difference,
      };
    }

    case ACTION_TYPE_MAPPER.DECREASE: {
      const { difference } = action;
      const { counter } = state;

      return {
        ...state,
        counter: counter - difference,
      };
    }
    
    default: {
      return state;
    }
  }
};