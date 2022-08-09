import React, {
  useEffect,
} from "react";
import NewsItem from "@/components/NewsItem/NewsItem";

import { useParams } from "react-router-dom";

import "./News.scss";

const News = ({
  newsItems,
}) => {
  return (
    <div className="News">
      {newsItems.map((news, idx) => (
        <NewsItem
          key={idx}
          { ...news }
        />
      ))}
    </div>
  );
};

export default News;