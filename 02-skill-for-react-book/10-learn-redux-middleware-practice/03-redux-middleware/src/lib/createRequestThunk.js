import { startLoading, finishLoading } from "../modules/loading";

const createRequestThunk = (type, request) => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  
  return payload => async dispatch => {
    dispatch({ type });
    dispatch(startLoading(type));
    
    try {
      const response = await request(payload);

      dispatch({
        type: SUCCESS,
        payload: response.data,
      });
      dispatch(finishLoading(type));
    } catch(e) {
      dispatch({
        type: FAILURE,
        payload: e,
        error: true,
      });
      dispatch(finishLoading(type));
      throw e;
    }
  }
}

export default createRequestThunk;