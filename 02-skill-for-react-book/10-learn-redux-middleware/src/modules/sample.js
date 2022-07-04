import { handleActions } from "redux-actions";
import * as api from "../lib/api";
import createRequestThunk from "../lib/createRequestThunk";

const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = "sample/GET_POST_SUCCESS";
const GET_POST_FAILURE = "sample/GET_POST_FAILURE";

const GET_USERS = "sample/GET_USERS";
const GET_USERS_SUCCESS = "sample/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "sample/GET_USERS_FAILURE";

// 02. Thunk 함수 생성 함수로 리펙토링
export const getPost = createRequestThunk("GET_POST", api.getPost);

export const getUsers = createRequestThunk("GET_USERS", api.getUsers);

// 01. Thunk 함수 (Action 생성 함수)
// export const getPost = id => async dispatch => {
//   dispatch({ type: GET_POST });

//   try {
//     const response = await api.getPost(id);

//     dispatch({
//       type: GET_POST_SUCCESS,
//       payload: response.data,
//     });
//   } catch (e) {
//     dispatch({
//       type: GET_POST_FAILURE,
//       payload: e,
//       error: true,
//     });

//     throw e;
//   }
// };

// export const getUsers = id => async dispatch => {
//   dispatch({ type: GET_USERS });

//   try {
//     const response = await api.getUsers(id);

//     dispatch({
//       type: GET_USERS_SUCCESS,
//       payload: response.data,
//     });
//   } catch (e) {
//     dispatch({
//       type: GET_USERS_FAILURE,
//       payload: e,
//       error: true,
//     });

//     throw e;
//   }
// };

const initialState = {
  loading: {
    GET_POST: false,
    GET_USERS: false,
  },

  post: null,
  users: null,
};

const sample = handleActions({
  [GET_POST]: state => ({
    ...state,
    loading: {
      ...state.loading,
      GET_POST: true,
    },
  }),

  [GET_POST_SUCCESS]: (state, action) => ({
    ...state,
    loading: {
      ...state.loading,
      GET_POST: false,
    },
    post: action.payload,
  }),

  [GET_POST_FAILURE]: (state, action) => ({
    ...state,
    loading: {
      ...state.loading,
      GET_POST: false,
    },
  }),

  [GET_USERS]: state => ({
    ...state,
    loading: {
      ...state.loading,
      GET_USERS: true,
    },
  }),

  [GET_USERS_SUCCESS]: (state, action) => ({
    ...state,
    loading: {
      ...state.loading,
      GET_USERS: false,
    },
    users: action.payload,
  }),

  [GET_USERS_FAILURE]: (state, action) => ({
    ...state,
    loading: {
      ...state.loading,
      GET_USERS: false,
    },
  })
}, initialState);

export default sample;