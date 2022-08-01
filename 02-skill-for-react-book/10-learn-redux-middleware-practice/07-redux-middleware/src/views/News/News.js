import React from "react";
import NewsItem from "@components/NewsItem/NewsItem";

import "./News.scss";

const News = ({
  newsList=[],
}) => {
  return (
    <div className="News">
      {newsList.map(({
        title, description, urlToImage, publishedAt,
      }, idx) => (
        <div className="News-item" key={idx}>
          <NewsItem
            title={title}
            description={description}
            urlToImage={urlToImage}
            publishedAt={publishedAt}
          />
        </div>
      ))}
    </div>
  );
};

export default React.memo(News);