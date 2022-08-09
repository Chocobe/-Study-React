import React, {
  useMemo,
  useEffect,
} from "react";
import { useParams } from "react-router-dom";
import News from "@pages/News/News";
import { connect } from "react-redux";
import { getNews } from "@store/news";

const NewsContainer = ({
  newsItems=[],
  loading,
  getNews,
}) => {
  const routerParams = useParams();
  const category = useMemo(() => routerParams.category);

  useEffect(() => {
    getNews(category);
  }, [category]);
  
  return (
    <div>
      <h1 className="text-center py-8 bg-green-700 font-bold">
        Loading: {String(loading)}
      </h1>

      <News newsItems={newsItems} />
    </div>
  );
};

export default connect(
  ({ news, loading }) => ({
    newsItems: news.newsItems,
    loading,
  }),

  dispatch => ({
    getNews: category => dispatch(getNews(category)),
  }),
)(NewsContainer);