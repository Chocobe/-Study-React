import { createAction, handleActions } from "redux-actions";

const NAMESPACE = "loading";

const START_LOADING = `${NAMESPACE}/START_LOADING`;
const END_LOADING = `${NAMESPACE}/END_LOADING`;

export const startLoading = createAction(START_LOADING, () => null);

export const endLoading = createAction(END_LOADING, () => null);

const initialState = false;

const loading = handleActions({
  [START_LOADING]: () => true,

  [END_LOADING]: () => false,
}, initialState);

export default loading;