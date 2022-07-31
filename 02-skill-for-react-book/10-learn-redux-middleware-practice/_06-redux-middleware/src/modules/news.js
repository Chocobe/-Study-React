import { createAction, handleActions } from "redux-actions";

const GET_NEWS = "news/GET_NEWS";
const GET_NEWS_SUCCESS = `${GET_NEWS}_SUCCESS`;
const GET_NEWS_FAIL = `${GET_NEWS}_FAIL`;

export const getNews = createAction(GET_NEWS, category => category);
export const getNewsSuccess = createAction(GET_NEWS_SUCCESS, news => news);

const initialState = {
  items: [
    { id: 0, title: "초기값 제목", body: "초기값 바디" },
  ],
};

const news = handleActions({
  [GET_NEWS_SUCCESS]: (state, newItems) => {
    return {
      ...state,
      items: newItems,
    };
  },
}, initialState);

export default news;