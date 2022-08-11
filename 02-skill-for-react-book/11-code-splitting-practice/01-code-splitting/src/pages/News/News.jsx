import React from "react";
import NewsItem from "@components/News/NewsItem/NewsItem";

import "./News.scss";

const News = ({
  newsItems, error,
}) => {
  return (
    <div className="News">
      {error
        ? <div>에러가 발생하였습니다.</div>
        : newsItems.map((item, idx) => (
          <div className="News-item" key={idx}>
            <NewsItem {...item} />
          </div>
        ))
      }
    </div>
  );
};

export default React.memo(News);