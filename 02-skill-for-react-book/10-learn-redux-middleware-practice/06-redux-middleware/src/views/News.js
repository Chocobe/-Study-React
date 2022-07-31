import React from "react";
import NewsItem from "@components/NewsItem/NewsItem";

import "./News.scss";

const News = ({
  newsList,
  loading,
}) => {
  const renderLoading = () => (
    <h1 className="loading">Now Loading...</h1>
  )

  const renderNewsItems = () => (
    <>
      {newsList.map(({
        title, description, publishedAt, urlToImage,
      }, idx) => (
        <NewsItem
          key={idx}
          title={title}
          description={description}
          publishedAt={publishedAt}
          urlToImage={urlToImage}
        />
      ))}
    </>
  )
  
  return (
    <div className="News">
      {loading
        ? renderLoading()
        : renderNewsItems()
      }
      {/* {newsList.map(({
        title, description, publishedAt, urlToImage,
      }, idx) => (
        <NewsItem
          key={idx}
          title={title}
          description={description}
          publishedAt={publishedAt}
          urlToImage={urlToImage}
        />
      ))} */}
    </div>
  );
};

export default News;