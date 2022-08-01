import { createAction, handleActions } from "redux-actions";
import * as api from "@api/api";

const namespace = "news";

const GET_NEWS = `${namespace}/NEWS_GET`;
const GET_NEWS_SUCCESS = `${GET_NEWS}_SUCCESS`;
// const GET_NEWS_FAILURE = `${GET_NEWS}_FAILURE`;

export const getNews = category => async dispatch => {
  try {
    dispatch(getNewsSuccess([]));
    
    const response = await api.getNews(category);
    console.log("API 요청 결과: ", response);

    dispatch(getNewsSuccess(response.data.articles));
  } catch (e) {
    console.warn(e);
  }
};

export const getNewsSuccess = createAction(
  GET_NEWS_SUCCESS,
  newsList => newsList
);

const initialState = {
  newsList: [],
};

const news = handleActions({
  [GET_NEWS_SUCCESS]: (state, { payload: newsList }) => ({
    ...state,
    newsList,
  }),
}, initialState);

export default news;