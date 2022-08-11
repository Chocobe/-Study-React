import React from "react";

import "./NewsItem.scss";

const NewsItem = ({
  urlToImage, title, publishedAt, description,
}) => {
  const parseDate = stringDate => {
    const dateInst = new Date(stringDate);
    const year = dateInst.getFullYear();
    const month = dateInst.getMonth() + 1;
    const date = dateInst.getDate();
    const hour = dateInst.getHours();
    const min = dateInst.getMinutes();

    return `${year}월 ${month}월 ${date}일 ${hour}:${min}`;
  }
  
  return (
    <div className="NewsItem">
      <figure className="imgWrapper">
        <img 
          className="imgWrapper-thumbnail" 
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
            {parseDate(publishedAt)}
          </small>
        </div>

        <div className="info-description">
          {description}
        </div>
      </div>
    </div>
  );
};

export default React.memo(NewsItem);