import React from "react";

import "./NewsItem.scss";

const NewsItem = ({
  title, publishedAt, description, urlToImage,
}) => {
  return (
    <div className="NewsItem">
      <figure className="thumbnail">
        <img className="thumbnail-img" src={urlToImage} alt="썸네일" />
      </figure>

      <div className="info">
        <div className="info-header">
          <h3 className="info-header-title">
            {title}
          </h3>

          <small className="info-header-publishedAt">
            {publishedAt}
          </small>
        </div>

        <div className="info-contents">
          {description}
        </div>
      </div>
    </div>
  );
};

export default NewsItem;