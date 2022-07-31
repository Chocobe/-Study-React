import { createAction, handleActions } from "redux-actions";

const LOADING = "loading";
const LOADING_START = `${LOADING}/START`;
const LOADING_END = `${LOADING}/END`;

export const loadingStart = createAction(LOADING_START);

export const loadingEnd = createAction(LOADING_END);

const initialState = false;

const loading = handleActions({
  [LOADING_START]: () => true,

  [LOADING_END]: () => false,
}, initialState);

export default loading;