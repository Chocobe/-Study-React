import { createAction, handleActions } from "redux-actions";
import * as api from "@api/index";

const NAMESPACE = "news";

const GET_NEWS_SUCCESS = `${NAMESPACE}/GET_NEWS_SUCCESS`;

export const getNews = category => async dispatch => {
  try {
    const response = await api.getNews(category);
    const newsItems = response.data.articles;

    dispatch(getNewsSuccess(newsItems));
  } catch (e) {
    //
  }
}

export const getNewsSuccess = createAction(
  GET_NEWS_SUCCESS,
  newsList => newsList
);

const initialState = {
  newsItems: [],
};

const news = handleActions({
  [GET_NEWS_SUCCESS]: (state, { payload: newsItems }) => ({
    ...state,
    newsItems,
  }),
}, initialState);

export default news;