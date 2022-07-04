import React, {
  useEffect,
} from "react";
import NewsList from "@/components/NewsList";
import { connect } from "react-redux";

import * as api from "../modules/hackerNews";

const CATEGORY_API_NAME = {
  NEWS: "getNews",
  NEWEST: "getNewest",
  ASK: "getAsk",
  SHOW: "getShow",
  JOBS: "getJobs",
};

const NewsListContainer = ({
  number,
  category,
  news,
  api,
}) => {
  useEffect(() => {
    console.log(api[CATEGORY_API_NAME[category]])
    
    api[CATEGORY_API_NAME[category]]?.(number);
  }, [api, number, category]);

  return (
    <NewsList
      news={news}
    />
  );
};

export default connect(
  state => ({
    news: state.hackerNews.news,
  }),
  dispatch => ({
    api: {
      getNews: id => dispatch(api.asyncNews(id)),
      getNewest: id => dispatch(api.asyncNewest(id)),
      getAsk: id => dispatch(api.asyncAsk(id)),
      getShow: id => dispatch(api.asyncShow(id)),
      getJobs: id => dispatch(api.asyncJobs(id)),
    },
  }),
)(NewsListContainer);