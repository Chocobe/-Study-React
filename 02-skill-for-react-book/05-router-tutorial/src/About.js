import React from "react";
import {
  useSearchParams,
} from "react-router-dom";

const About = () => {
  const [searchParams] = useSearchParams();

  const isShowDetail = searchParams.get("detail") === "true";
  
  return (
    <div className="About">
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트 입니다.</p>
      {isShowDetail && (
        <p>detail 값을 true 로 설정하셨군요!!</p>
      )}
    </div>
  );
};

export default About;