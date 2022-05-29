import {
  useState,
  useMemo,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import ControlMenu from "../ControlMenu/ControlMenu";
import MyButton from "../MyButton/MyButton";
import DiaryItem from "../DiaryItem/DiaryItem";

import "./DiaryList.css";

const sortOptionList = [
  {
    value: "latest",
    text: "최신순",
  },
  {
    value: "oldest",
    text: "오래된 순",
  },
];

const filterOptionList = [
  {
    value: "all",
    text: "전부다",
  },
  {
    value: "good",
    text: "좋은 감정만",
  },
  {
    value: "bad",
    text: "나쁜 감정만",
  },
];

const DiaryList = ({ diaryList, className }) => {
  const navigate = useNavigate();
  
  const [sortType, setSortType] = useState("latest");
  const [filterType, setFilterType] = useState("all");

  const getProcessedDiaryList = useMemo(() => {
    const copiedDiaryList = JSON.parse(JSON.stringify(diaryList))
      .filter(diary => {
        if (filterType === "all") return true;

        if (filterType === "good") return parseInt(diary.emotion) < 4;
        else return parseInt(diary.emotion) > 3;
      });
    
    const compareDiary = (a, b) => {
      return sortType === "latest"
        ? parseInt(b.date) - parseInt(a.date)
        : parseInt(a.date) - parseInt(b.date);
    };
    
    copiedDiaryList.sort(compareDiary);

    return copiedDiaryList;
  }, [sortType, filterType, diaryList]);
  
  return (
    <div className={[
      "DiaryList",
      className,
    ]}>
      <div className="DiaryList-menuWrapper">
        <div className="DiaryList-menuWrapper-lhs">
          <ControlMenu
            value={sortType}
            onChange={setSortType}
            optionList={sortOptionList}
            className="DiaryList-menuWrapper-lhs-controller"
          />

          <ControlMenu
            value={filterType}
            onChange={setFilterType}
            optionList={filterOptionList}
            className="DiaryList-menuWrapper-lhs-controller"
          />
        </div>

        <div className="DiaryList-menuWrapper-rhs">
          <MyButton
            type="positive"
            onClick={() => navigate("/new")}
            className="DiaryList-menuWrapper-rhs-button"
          >
            새 일기쓰기
          </MyButton>
        </div>
      </div>

      {
        getProcessedDiaryList.map(item => {
          return (
            <DiaryItem
              {...item}
              key={item.id}
            >
              {item.content}
            </DiaryItem>
          )
        })
      }
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;