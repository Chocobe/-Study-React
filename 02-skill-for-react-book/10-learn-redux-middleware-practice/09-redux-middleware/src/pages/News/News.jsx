import React, {
  useEffect,
} from "react";
import { useParams } from "react-router-dom";

const News = () => {
  const routerParams = useParams();
  
  return (
    <div className="News">
      {routerParams.category}
    </div>
  );
};

export default News;