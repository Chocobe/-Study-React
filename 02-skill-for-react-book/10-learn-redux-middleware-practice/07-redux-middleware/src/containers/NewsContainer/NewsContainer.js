import React, {
  useEffect,
  useRef,
} from "react";
import { useParams } from "react-router-dom";
import News from "@views/News/News";
import { connect } from "react-redux";
import { getNews } from "@/store/news";

const NewsContainer = ({
  newsList, getNews,
}) => {
  const routerParams = useParams();
  const prevCategory = useRef('');

  useEffect(() => {
    const category = routerParams.category;

    if (category === prevCategory.current) return;

    prevCategory.current = category;
    getNews(category);
  }, [routerParams, getNews]);
  
  return (
    <News newsList={newsList} />
  );
};

export default connect(
  state => ({
    newsList: state.news.newsList,
  }),

  dispatch => ({
    getNews: category => dispatch(getNews(category)),
  })
)(NewsContainer);