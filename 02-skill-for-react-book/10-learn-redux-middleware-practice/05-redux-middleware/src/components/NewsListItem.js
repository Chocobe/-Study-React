import React from "react";

import "./NewsListItem.scss";

const NewsListItem = ({
  title, text, img,
}) => {
  return (
    <div className="NewsListItem">
      <img
        className="thumbnail"
        src={img}
        alt={title}
      />

      <div className="contents">
        <h3 className="contents-title">
          {title}
        </h3>

        <hr className="contents-bar" />

        <div className="contents-text">
          {text}
        </div>
      </div>
    </div>
  );
};

export default NewsListItem;