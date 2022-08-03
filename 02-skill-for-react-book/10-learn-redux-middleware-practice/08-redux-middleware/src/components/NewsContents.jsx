import React from "react";

import "./NewsContents.scss";

const NewsContents = ({
  urlToImage, title, publishedAt, description,
}) => {
  return (
    <div className="NewsContents">
      <figure className="thumbnail">
        <img 
          className="thumbnail-img" 
          src={urlToImage}
          alt="썸네일"
        />
      </figure>

      <div className="info">
        <div className="info-header">
          <div className="info-header-title">
            {title}
          </div>

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

export default NewsContents;