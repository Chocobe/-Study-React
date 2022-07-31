import React from "react";

import "./NewsItem.scss";

const NewsItem = ({
  title, description, publishedAt, urlToImage,
}) => {
  return (
    <div className="NewsItem">
      <figure className="imgWrapper">
        <img className="img" src={urlToImage} alt="이미지" />
      </figure>

      <div className="contentsWrapper">
        <div className="titleWrapper">
          <h3 className="title">
            {title}
          </h3>

          <div className="publishedAt">
            {publishedAt}
          </div>
        </div>

        <div className="description">
          {description}
        </div>
      </div>
    </div>
  );
};

export default NewsItem;