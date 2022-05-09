import React from "react";

import {
  useNavigate
} from "react-router-dom";

import MyButton from "../MyButton/MyButton";

import "./DiaryItem.css";

const DiaryItem = ({
  id, emotion, date, children, className,
}) => {
  const localeDate = new Date(parseInt(date)).toLocaleDateString();

  const navigate = useNavigate();

  const goToDetail = () => navigate(`/diary/${id}`);
  
  const goToEdit = () => navigate(`/edit/${id}`);
  
  return (
    <div
      className={[
        "DiaryItem",
        className,
      ].join(" ")}
    >
      <div 
        onClick={goToDetail}
        className={[
          "DiaryItem-emotion",
          `DiaryItem-emotion-${emotion}`
        ].join(" ")}
      >
        <img
          className="DiaryItem-emotion-img"
          alt="EmotionImage"
          src={`
            ${process.env.PUBLIC_URL}/assets/emotion${emotion}.png
          `}
        />
      </div>

      <div 
        onClick={goToDetail}
        className="DiaryItem-info"
      >
        <div className="DiaryItem-info-date">
          {localeDate}
        </div>

        <div className="DiaryItem-info-preview">
          {children.slice(0, 25)}
        </div>
      </div>

      <div className="DiaryItem-actions">
        <MyButton
          onClick={goToEdit}
          className="DiaryItem-actions-button"
        >
          수정하기
        </MyButton>
      </div>
    </div>
  );
};

export default React.memo(DiaryItem);