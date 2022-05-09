import { 
  useState,
  useCallback,
  useContext,
  useEffect,
} from "react";

import { DiaryStateContext } from "../App";

import MyHeader from "../components/MyHeader/MyHeader";
import MyButton from "../components/MyButton/MyButton";
import DiaryList from "../components/DiaryList/DiaryList";

const Home = () => {
  const diaryList = useContext(DiaryStateContext);
  const [data, setData] = useState([]);
  
  const [curDate, setCurDate] = useState(new Date());

  useEffect(() => {
    if (diaryList.length < 1) return;
    
    const firstDate = new Date(
      curDate.getFullYear(),
      curDate.getMonth(),
      1
    ).getTime();

    const lastDate = new Date(
      curDate.getFullYear(),
      curDate.getMonth() + 1,
      1
    ).getTime();

    setData(diaryList.filter(({ date }) => {
      return date >= firstDate && date < lastDate;
    }));
  }, [diaryList, curDate]);

  const _increaseMonth = () => {
    setCurDate(curDate => new Date(
      curDate.getFullYear(),
      curDate.getMonth() + 1,
      1
    ));
  };
  const increaseMonth = useCallback(_increaseMonth, []);

  const _decreaseMonth = () => {
    setCurDate(curDate => new Date(
      curDate.getFullYear(),
      curDate.getMonth() - 1,
      1
    ));
  };
  const decreaseMonth = useCallback(_decreaseMonth, []);

  useEffect(() => {
    const $title = document.getElementsByTagName("title")?.[0];

    if (!$title) return;

    $title.innerHTML = "감정 일기장";
  }, []);

  return (
    <div>
      <MyHeader
        leftChild={
          <MyButton onClick={decreaseMonth}>〈</MyButton>
        }
        rightChild={
          <MyButton onClick={increaseMonth}>〉</MyButton>
        }
      >
        {`${curDate.getFullYear()}년 ${curDate.getMonth() + 1}월`}
      </MyHeader>

      <DiaryList diaryList={data} />
    </div>
  );
};

export default Home;