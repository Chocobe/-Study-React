import { Dispatch } from "redux";
import * as types from "./types";
import { Reducer } from "redux";

import * as newsApi from "@/api/news";

const NAMESPACE = "news";

const GET_NEWS = `${NAMESPACE}/GET_NEWS`;
const GET_NEWS_SUCCESS = `${NAMESPACE}/GET_NEWS_SUCCESS`;
const GET_NEWS_FAILURE = `${NAMESPACE}/GET_NEWS_FAILURE`;

export const getNews = (category: string) =>
  async (dispatch: Dispatch) => {
    try {
      const { data } = await newsApi.getNews(category);
      dispatch(getNewsSuccess(data.articles));
    } catch (error) {
      dispatch(getNewsFailure(error));
    }
  };

export const getNewsSuccess = (newsItems: any) => ({
  type: GET_NEWS_SUCCESS,
  payload: newsItems,
});

export const getNewsFailure = (error: any) => ({
  type: GET_NEWS_FAILURE,
  payload: error,
});

const initialState: types.NewsModule = {
  newsItems: [],
};

const newsModule: Reducer<types.NewsModule> = (
  state=initialState, action
) => {
  const { type } = action;

  switch (type) {
    case GET_NEWS_SUCCESS: {
      return {
        ...state,
        newsItems: action.payload,
      };
    }

    case GET_NEWS_FAILURE: {
      return {
        ...state,
        newsItems: [],
        error: action.error,
      };
    }

    default: {
      return state;
    }
  }
}

export default newsModule;