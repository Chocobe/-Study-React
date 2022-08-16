import React from "react";
import { NewsItemType } from "@/modules/types";
import NewsItem from "@/components/NewsItem/NewsItem";

import "./News.scss";

export type NewsProps = {
  newsItems: NewsItemType[];
};

const News = ({
  newsItems
}: NewsProps) => {
  return (
    <div className="News">
      {newsItems.map(({
        title, publishedAt, urlToImage, description,
      }, idx) => (
        <NewsItem
          key={idx}
          title={title}
          publishedAt={publishedAt}
          urlToImage={urlToImage}
          description={description}
        />
      ))}
    </div>
  );
};

export default News;