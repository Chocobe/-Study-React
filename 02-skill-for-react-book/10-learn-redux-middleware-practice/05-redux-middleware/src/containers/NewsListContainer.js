import React, {
  useEffect,
} from "react";
import { useParams } from "react-router-dom";
import NewsList from "@/components/NewsList";
import { connect } from "react-redux";
import { getNews } from "@/store/news";

const NewsListContainer = ({
  newsList,
  getNews,
}) => {
  const { category } = useParams();
  
  console.log("category: ", category);
  
  useEffect(() => {
    getNews(category);
  }, [getNews, category]);
  
  return (
    <NewsList
      newsList={newsList}
    />
  );
};

export default connect(
  state => ({
    newsList: state.news.newsList,
  }),

  dispatch => ({
    getNews: category => dispatch(getNews(category)),
  })
)(NewsListContainer);