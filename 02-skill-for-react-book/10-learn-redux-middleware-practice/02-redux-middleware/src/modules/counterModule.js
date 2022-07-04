import { createAction, handleActions } from "redux-actions";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

export const increase = createAction(
  INCREASE, 
  difference => difference
);

export const decrease = createAction(
  DECREASE,
  difference => difference,
);

const initialState = {
  counter: 0,
};

const counterModule = handleActions({
  [INCREASE]: (state, { payload: difference }) => ({
    ...state,
    counter: state.counter + difference,
  }),

  [DECREASE]: (state, { payload: difference }) => ({
    ...state,
    counter: state.counter - difference,
  }),
}, initialState);

export default counterModule;