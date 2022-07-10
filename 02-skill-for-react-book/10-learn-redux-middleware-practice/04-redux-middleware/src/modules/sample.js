import { handleActions } from "redux-actions";
import * as api from "@api/index";

const GET_POST = "sample/GET_POST";
const GET_POST_SUCCESS = `${GET_POST}_SUCCESS`;
// const GET_POST_FAILURE = `${GET_POST}_FAILURE`;

const GET_PHOTOS = "sample/GET_PHOTOS";
const GET_PHOTOS_SUCCESS = `${GET_PHOTOS}_SUCCESS`;
// const GET_PHOTOS_FAILURE = `${GET_PHOTOS}_FAILURE`;

export const getPost = (id="") => async dispatch => {
  try {
    const response = await api.getPost(id);

    dispatch({
      type: GET_POST_SUCCESS,
      payload: response.data,
    });
  } catch (e) {
    throw e;
  }
};

export const getPhotos = (id="") => async dispatch => {
  try {
    const response = await api.getPhotos(id);

    dispatch({
      type: GET_PHOTOS_SUCCESS,
      payload: response.data,
    })
  } catch (e) {
    throw e;
  }
};

const initialState = {
  post: null,
  photos: null,
}

const sample = handleActions({
  [GET_POST_SUCCESS]: (state, { payload: post }) => ({
    ...state,
    post,
  }),

  [GET_PHOTOS_SUCCESS]: (state, { payload: photos }) => ({
    ...state,
    photos,
  }),
}, initialState);

export default sample;