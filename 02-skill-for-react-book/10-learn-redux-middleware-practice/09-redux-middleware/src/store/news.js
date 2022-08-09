import { createAction, handleActions } from "redux-actions";
import * as api from "@api/index";
import { startLoading, endLoading } from "./loading";

const NAMESPACE = "news";

const GET_NEWS = `${NAMESPACE}/GET_NEWS`;
const GET_NEWS_SUCCESS = `${NAMESPACE}/GET_NEWS_SUCCESS`;
const GET_NEWS_FAILURE = `${NAMESPACE}/GET_NEWS_FAILURE`;

export const getNews = category => async dispatch => {
  try {
    dispatch(startLoading());
    
    const { data } = await api.getNews(category);
    dispatch(getNewsSuccess(data.articles));
  } catch (error) {
    dispatch(getNewsFailure(error));
  } finally {
    dispatch(endLoading());
  }
};

export const getNewsSuccess = createAction(
  GET_NEWS_SUCCESS,
  newsItems => newsItems
);

export const getNewsFailure = createAction(
  GET_NEWS_FAILURE,
  error => error
);

const initialState = {
  newsItems: [],
};

const news = handleActions({
  [GET_NEWS_SUCCESS]: (state, { payload: newsItems }) => {
    console.log("payload newsItems: ", newsItems);
    return { ...state, newsItems };
  },

  [GET_NEWS_FAILURE]: (state, { payload: error }) => {
    console.log("에러 발생: ", error);
    return { ...state, newsItems: [] };
  },
}, initialState);

export default news;