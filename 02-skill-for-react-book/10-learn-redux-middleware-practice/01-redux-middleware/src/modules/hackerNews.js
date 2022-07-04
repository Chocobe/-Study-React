import { createAction, handleActions } from "redux-actions";
import * as api from "@/api/hackerNews";
import * as actions from "@/modules/hackerNews";

const NAMESPACE = "hackerNews";
const NEWS = `${NAMESPACE}/NEWS`;

const createAsyncAction = request => params =>
  async dispatch => {
    try {
      const response = await request(params);

      dispatch(
        actions.news(response.data)
      );

      console.log("조회 결과: ", response.data);
    } catch (e) {
      dispatch(actions.news([]));
      throw e;
    }
  };

export const news = createAction(NEWS, news => news);

export const asyncNews = createAsyncAction(api.getNews);
export const asyncNewest = createAsyncAction(api.getNewest);
export const asyncAsk = createAsyncAction(api.getAsk);
export const asyncShow = createAsyncAction(api.getAsk);
export const asyncJobs = createAsyncAction(api.getJobs);

// export const asyncNews = id => async dispatch => {
//   try {
//     const response = await api.getNews(id);
//     dispatch(
//       actions.news(response.data)
//     )

//     console.log("NEWS 조회 완료: ", response.data);
//   } catch (e) {
//     throw e;
//   }
// };

const initialState = {
  news: [],
};

const hackerNews = handleActions({
  [NEWS]: (state, { payload: news }) => ({
    ...state,
    news,
  }),
}, initialState);

export default hackerNews;

// const hackerNews = (state = initialState, { payload: news }) => {
//   switch (state.type) {
//     case NEWS: {
//       return {
//         ...state,
//         news,
//       }
//     }

//     default: {
//       return state;
//     }
//   }
// };

// export default hackerNews;