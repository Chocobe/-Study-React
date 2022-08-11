import React, {
  useMemo,
  useEffect,
} from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getNews } from "@store/news";
import News from "@pages/News/News";

const NewsContainer = ({
  getNews, newsItems, error,
}) => {
  const routerParams = useParams();

  const category = useMemo(() => routerParams.category);

  useEffect(() => {
    getNews(category);
  }, [category]);

  return (
    <News newsItems={newsItems} error={error} />
  );
};

export default React.memo(connect(
  ({ news }) => ({
    newsItems: news.newsItems,
    error: news.error,
  }),

  dispatch => ({
    getNews: category => dispatch(getNews(category)),
  }),
)(NewsContainer));