import React, {
  useEffect,
} from "react";
import News from "@views/News";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { clearNews, getNews } from "@store/news";

const NewsContainer = ({
  clearNews,
  newsList,
  getNews,
  loading,
}) => {
  const routerParams = useParams();
  
  useEffect(() => {
    clearNews();
    
    const category = routerParams.category;
    getNews(category);
  }, [clearNews, getNews, routerParams]);
  
  return (
    <News newsList={newsList} loading={loading} />
  );
};

export default connect(
  state => ({
    newsList: state.news.newsList,
    loading: state.loading,
  }),

  dispatch => ({
    clearNews: () => dispatch(clearNews()),
    getNews: category => dispatch(getNews(category)),
  })
)(NewsContainer);
