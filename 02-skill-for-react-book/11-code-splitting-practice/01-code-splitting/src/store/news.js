import { handleActions } from "redux-actions";
// import { newsItems } from "@pages/News/mock";
import * as apiNews from "@api/news";

const NAMESPACE = "news";

const GET_NEWS = `${NAMESPACE}/GET_NEWS`;
const GET_NEWS_SUCCESS = `${NAMESPACE}/GET_NEWS_SUCCESS`;
const GET_NEWS_FAILURE = `${NAMESPACE}/GET_NEWS_FAILURE`;

export const getNews = category => async dispatch => {
  try {
    const response = await apiNews.getNews(category);
    dispatch(getNewsSuccess(response.data.articles));
  } catch (error) {
    dispatch(getNewsFailure(error));
  }
};

export const getNewsSuccess = newsItems => ({
  type: GET_NEWS_SUCCESS,
  payload: newsItems,
});

export const getNewsFailure = error => ({
  type: GET_NEWS_FAILURE,
  payload: error,
});

const initialState = {
  newsItems: [],
  error: null,
};

const news = handleActions({
  [GET_NEWS_SUCCESS]: (state, { payload: newsItems }) => ({
    ...state,
    newsItems,
  }),

  [GET_NEWS_FAILURE]: (state, { payload: error }) => ({
    ...state,
    error,
  }),
}, initialState);

export default news;