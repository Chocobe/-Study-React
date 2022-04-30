import DiaryItem from "../DiaryItem/DiaryItem";

import "./DiaryList.css";

const DiaryList = ({ diaryList }) => {
  return (
    <div className="diaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length} 개의 일기가 있습니다.</h4>

      <div>
        {
          diaryList.map(item => (
            <DiaryItem key={item.id} {...item} />
          ))
        }
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;