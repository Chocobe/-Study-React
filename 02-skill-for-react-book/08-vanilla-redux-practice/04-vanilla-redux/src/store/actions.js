import { ACTION_TYPE_MAPPER } from "./types";

export const ACTION_GENERATOR_MAPPER = {
  [ACTION_TYPE_MAPPER.TOGGLE]: () => ({
    type: ACTION_TYPE_MAPPER.TOGGLE,
  }),

  [ACTION_TYPE_MAPPER.INCREASE]: (difference = 1) => ({
    type: ACTION_TYPE_MAPPER.INCREASE,
    difference,
  }),

  [ACTION_TYPE_MAPPER.DECREASE]: (difference = 1) => ({
    type: ACTION_TYPE_MAPPER.DECREASE,
    difference,
  }),
};