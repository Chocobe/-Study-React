import React from "react";
import { useParams } from "react-router-dom";

const News = () => {
  const { category } = useParams();

  console.log("category: ", category);
  
  return (
    <div className="News">
      <h1 className="font-sky">
        News Views
      </h1>
    </div>
  );
};

export default News;