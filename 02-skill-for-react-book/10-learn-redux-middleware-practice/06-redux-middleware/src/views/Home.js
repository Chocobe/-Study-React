import React from "react";

import "./Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <h1 className="Home-title">여기는 Home 입니다.</h1>

      <div className="Home-description">
        🚀 메뉴에서 원하는 카테고리를 선택해 주세요.
      </div>
    </div>
  );
};

export default Home;