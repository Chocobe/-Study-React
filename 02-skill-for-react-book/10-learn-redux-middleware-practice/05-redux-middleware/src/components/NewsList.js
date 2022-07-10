import React from "react";
import NewsListItem from "./NewsListItem";

const NewsList = ({
  newsList,
}) => {
  return (
    <div className="NewsList">
      {newsList.map((news, idx) => (
        <NewsListItem
          key={idx}
          title={news.title}
          text={news.description}
          img={news.urlToImage}
        />
      ))}
    </div>
  );
};

export default NewsList;