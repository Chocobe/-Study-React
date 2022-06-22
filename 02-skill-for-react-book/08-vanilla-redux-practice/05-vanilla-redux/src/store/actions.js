import { ACTION_TYPE } from "./types";

export const ACTION_GENERATOR = {
  [ACTION_TYPE.TOGGLE]: () => ({
    type: ACTION_TYPE.TOGGLE,
  }),

  [ACTION_TYPE.INCREASE]: (difference = 1) => ({
    type: ACTION_TYPE.INCREASE,
    difference,
  }),

  [ACTION_TYPE.DECREASE]: (difference = 1) => ({
    type: ACTION_TYPE.DECREASE,
    difference,
  }),
};