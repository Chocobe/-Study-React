import React from "react";

import "./NewsItem.scss";

export type NewsItemProps = {
  title: string;
  publishedAt: string;
  urlToImage: string;
  description: string;
};

const NewsItem = ({
  title, publishedAt, urlToImage, description,
}: NewsItemProps) => {
  return (
    <div className="NewsItem">
      <figure className="thumbnailWrapper">
        <img
          className="thumbnailWrapper-img"
          src={urlToImage}
          alt="썸네일"
        />
      </figure>

      <div className="info">
        <header className="info-header">
          <h3 className="info-header-title">
            {title}
          </h3>

          <small className="info-header-publishedAt">
            {publishedAt}
          </small>
        </header>

        <div className="info-description">
          {description}
        </div>
      </div>
    </div>
  );
};

export default NewsItem;