import { createAction, handleActions } from "redux-actions";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

export const increase = (diff = 1) => ({
  type: INCREASE,
  payload: diff,
});

export const decrease = createAction(
  DECREASE,
  (diff=1) => diff,
);

const initialState = 0;

const counter = handleActions({
  [INCREASE]: (counter, action) => counter + (+action.payload),
  [DECREASE]: (counter, { payload: diff }) => counter - (+diff),
}, initialState);

export default counter;