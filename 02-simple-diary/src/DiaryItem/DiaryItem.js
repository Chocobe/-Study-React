import "./DiaryItem.css";

const DiaryItem = ({ 
  id,
  author,
  content,
  emotion,
  createDate,
  onDelete,
}) => {
  const onClickDelete = id => {
    if (window.confirm(`${id} 번째 일기를 정말로 삭제 하시겠습니까?`)) {
      onDelete(id);
    }
  }
  
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

      <button onClick={() => onClickDelete(id)}>
        삭제하기
      </button>
    </div>
  );
};

export default DiaryItem;