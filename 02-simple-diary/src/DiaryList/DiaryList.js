import DiaryItem from "../DiaryItem/DiaryItem";

import "./DiaryList.css";

const DiaryList = ({ diaryList, onRemove, onEdit }) => {
  return (
    <div className="diaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length} 개의 일기가 있습니다.</h4>

      <div>
        {
          diaryList.map(item => (
            <DiaryItem 
              key={item.id} 
              {...item}
              onRemove={onRemove}
              onEdit={onEdit}
            />
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