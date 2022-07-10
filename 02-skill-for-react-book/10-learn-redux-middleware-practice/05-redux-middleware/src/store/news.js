import { handleActions } from "redux-actions";
import * as api from "@/api/api";

const GET_NEWS_SUCCESS = "news/GET_NEWS_SUCCESS";

export const getNews = category => async dispatch => {
  try {
    const response = await api.getNews(category);

    dispatch({
      type: GET_NEWS_SUCCESS,
      payload: response.data.articles,
    });
  } catch(e) {
    throw e;
  }
}

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