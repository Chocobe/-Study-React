import React from "react";

import "./NewsItem.scss";

const NewsItem = ({
  title, description, publishedAt, urlToImage,
}) => {
  const parseTimeFormat = strTime => {
    const time = new Date(strTime);
    const year = time.getFullYear();
    const month = time.getMonth() + 1;
    const date = time.getDate();

    return `${year}년 ${month}월 ${date}일`;
  }
  
  return (
    <div className="NewsItem">
      <figure className="thumbnail">
        <img
          className="thumbnail-img"
          src={urlToImage}
          alt="썸네일"
        />
      </figure>

      <div className="info">
        <div className="info-header">
          <h3 className="info-header-title">
            {title}
          </h3>

          <small className="info-header-publishedAt">
            {parseTimeFormat(publishedAt)}
          </small>
        </div>

        <div className="info-contents">
          {description}
        </div>
      </div>
    </div>
  );
};

export default React.memo(NewsItem);