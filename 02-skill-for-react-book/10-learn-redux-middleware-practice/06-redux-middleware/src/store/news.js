import { createAction, handleActions } from "redux-actions";
import * as api from "@api";
import { loadingStart, loadingEnd } from "./loading";

const NEWS_GET = "news/NEWS_GET";
const NEWS_GET_SUCCESS = `${NEWS_GET}_SUCCESS`;
const NEWS_GET_FAILURE = `${NEWS_GET}_FAILURE`;

export const clearNews = createAction(
  NEWS_GET_SUCCESS,
  () => [],
);

export const getNews = category => async dispatch => {
  try {
    dispatch(loadingStart());
    
    const response = await api.getNews(category);
    const news = response.data.articles;
    const result = news.map(({
      title, description, publishedAt, urlToImage,
    }) => ({
      title, description, publishedAt, urlToImage,
    }));

    dispatch(getNewsSuccess(result));
  } catch (e) {
    console.log(e);
  } finally {
    dispatch(loadingEnd());
  }
};

export const getNewsSuccess = createAction(
  NEWS_GET_SUCCESS,
  newsList => newsList
);

export const getNewsFailure = createAction(
  NEWS_GET_FAILURE,
  error => error
);

const initialState = {
  newsList: [],
};

const news = handleActions({
  [NEWS_GET_SUCCESS]: (state, { payload: newsList }) => ({
    ...state,
    newsList,
  }),
}, initialState);

export default news;