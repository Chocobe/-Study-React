import * as api from "@api/newsApi";
import { createAction, handleActions } from "redux-actions";
import { NEWS_API_COUNTRY, NEWS_API_CATEGORY } from "@api/newsApi";

const NEWS = "news/NEWS";
const COUNTRY = "news/COUNTRY";
const CATEGORY = "news/CATEGORY";

export const news = createAction(
  NEWS,
  news => news,
);

export const country = createAction(
  COUNTRY,
  country => country,
);

export const category = createAction(
  CATEGORY,
  category => category,
);

export const newsAsync = ({ country, category }) => async dispatch => {
  try {
    const response = await api.get({ country, category });

    console.log("조회 완료: ", response);

    dispatch(news(response.data.articles));
  } catch (e) {
    throw e;
  }
}

const initialState = {
  news: [],
  country: NEWS_API_COUNTRY.KR,
  category: NEWS_API_CATEGORY.TECHNOLOGY,
};

const newsModule = handleActions({
  [NEWS]: (state, { payload: news }) => ({
    ...state,
    news,
  }),

  [COUNTRY]: (state, { payload: country }) => ({
    ...state,
    country,
  }),

  [CATEGORY]: (state, { payload: category }) => ({
    ...state,
    category,
  }),
}, initialState);

export default newsModule;