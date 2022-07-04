import React, {
  useEffect,
} from "react";
import NewsList from "@components/NewsList/NewsList";
import { connect } from "react-redux";
import { country, category, newsAsync } from "@modules/newsModule";

const NewsListContainer = ({
  news,
  country,
  category,

  onCountry,
  onCategory,
  fetchNews,
}) => {
  useEffect(() => {
    fetchNews({ country, category });
  }, [country, category, fetchNews]);
  
  return (
    <NewsList
      news={news}
      country={country}
      category={category}
      onCountry={onCountry}
      onCategory={onCategory}
    />
  );
};

export default connect(
  ({ news }) => ({
    news: news.news,
    country: news.country,
    category: news.category,
  }),
  dispatch => ({
    onCountry: newCountry => dispatch(country(newCountry)),
    onCategory: newCategory => dispatch(category(newCategory)),
    fetchNews: params => dispatch(newsAsync(params)),
  }),
)(NewsListContainer);