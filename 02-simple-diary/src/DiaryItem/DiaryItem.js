import "./DiaryItem.css";

const DiaryItem = ({ id, author, content, emotion, createDate }) => {
  return (
    <div className="diaryItem">
      <div className="info">
        <span>
          작성자: {author} | 감정점수: {emotion}
        </span>

        <br />

        <span className="date">
          작성일: {new Date(createDate).toLocaleDateString()}
        </span>
      </div>

      <div className="content">
        내용: {content}
      </div>
    </div>
  );
};

export default DiaryItem;