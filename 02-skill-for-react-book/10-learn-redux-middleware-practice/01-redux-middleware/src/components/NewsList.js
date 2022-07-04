import React from "react";

const NewsList = ({
  news,
}) => {
  return (
    <ul className="NewsList">
      {news.map(curNews => (
        <li
          key={curNews.id}
          className="mb-20"
        >
          <h2>{curNews.title}</h2>
          <p className="pl-20">Domain: {curNews.domain}</p>
          <p className="pl-20">URL: {curNews.url}</p>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;