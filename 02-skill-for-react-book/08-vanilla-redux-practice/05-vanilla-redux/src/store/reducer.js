import { ACTION_TYPE } from "./types";

const initialState = {
  toggle: false,
  counter: -3,
};

export const reducer = (
  state = initialState,
  action,
) => {
  const { type } = action;

  switch (type) {
    case ACTION_TYPE.TOGGLE: {
      return {
        ...state,
        toggle: !state.toggle,
      };
    }

    case ACTION_TYPE.INCREASE: {
      const { counter } = state;
      const { difference } = action;

      return {
        ...state,
        counter: counter + difference,
      };
    }

    case ACTION_TYPE.DECREASE: {
      const { counter } = state;
      const { difference } = action;

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