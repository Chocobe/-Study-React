import React from "react";
import { NEWS_API_COUNTRY, NEWS_API_CATEGORY } from "@api/newsApi";

import "./NewsList.scss";

const NewsList = ({
  news,
  country,
  category,
  onCountry,
  onCategory,
  on
}) => {
  return (
    <div className="NewsList">
      <div className="info">
        <h2 className="info-item">Country: {country}</h2>
        <h2 className="info-item">Category: {category}</h2>
      </div>
      
      <div className="actions">
        <div className="actions-label">
          Countrh: 
        </div>

        <div className="actions-buttons">
          {Object.values(NEWS_API_COUNTRY).map(country => (
            <button
              key={country}
              onClick={() => onCountry(country)}
              className="actions-buttons-button"
            >
              {country}
            </button>
          ))}
        </div>
      </div>

      <div className="actions">
        <div className="actions-label">
          Category:
        </div>

        <div className="actions-buttons">
          {Object.values(NEWS_API_CATEGORY).map(category => (
            <button
              key={category}
              onClick={() => onCategory(category)}
              className="actions-buttons-button"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <ul className="list">
        {news.map((curNews, idx) => (
          <li
            key={idx}
            className="list-item"
          >
            <h1>{curNews.title}</h1>
            <h2>{curNews.author}</h2>
            <a 
              href={curNews.url} 
              target="_blank" 
              rel="noreferrer"
            >
              보기
            </a>
            <img src={curNews.urlToImage} alt={curNews.title} />
            <p>{curNews.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;