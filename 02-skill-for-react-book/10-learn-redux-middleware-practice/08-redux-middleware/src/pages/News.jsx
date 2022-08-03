import React from "react";
import NewsContents from "@components/NewsContents";

import "./News.scss";

const News = ({
  newsItems=[],
}) => {
  return (
    <div className="News">
      {newsItems.map((news, idx) => (
        <NewsContents key={idx} {...news} />
      ))}
    </div>
  );
};

export default News;