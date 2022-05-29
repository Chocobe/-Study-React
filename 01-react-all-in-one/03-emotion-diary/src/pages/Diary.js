import { 
  useContext,
  useEffect,
  useState,
} from "react";

import { 
  useParams,
  useNavigate,
} from "react-router-dom";

import { DiaryStateContext } from "../App";

import MyHeader from "../components/MyHeader/MyHeader";
import MyButton from "../components/MyButton/MyButton";

import { getStringDate } from "../utils/date";
import { emotionList } from "../utils/emotion";

import "./Diary.css";

const Diary = () => {
  const { id } = useParams();

  const diaryList = useContext(DiaryStateContext);

  const navigate = useNavigate();

  const [data, setData] = useState();

  const curEmotionData = emotionList.find(curEmotion => {
    return parseInt(curEmotion.emotionId) === parseInt(data?.emotion);
  });

  useEffect(() => {
    if (diaryList.length < 1) return;

    const targetDiary = diaryList.find(diary => {
      return parseInt(diary.id) === parseInt(id);
    });

    if (!targetDiary) {
      alert("존재하지 않는 일기 입니다.");
      navigate("/", { replace: true });
      return;
    }

    setData(targetDiary);
  }, [diaryList, id]);

  // 브라우저 상태창의 제목 바꾸기
  useEffect(() => {
    const $title = document.getElementsByTagName("title")?.[0];

    if (!$title) return;

    $title.innerHTML = `감정 일기장 - ${id}번 일기`;
  }, []);

  if (!data) return (
    <div className="Diary">
      로딩 중 입니다...
    </div>
  );

  return (
    <div className="Diary">
      <MyHeader
        leftChild={
          <MyButton onClick={() => navigate(-1)}>
            〈 뒤로가기
          </MyButton>
        }
        rightChild={
          <MyButton onClick={() => navigate(`/edit/${data.id}`)}>
            수정하기
          </MyButton>
        }
      >
        {getStringDate(new Date(parseInt(data.date)))} 기록
      </MyHeader>

      <article className="Diary-article">
        <section className="Diary-article-section">
          <h4 className="Diary-article-section-title">
            오늘의 감정
          </h4>

          <div className={[
            "Diary-article-section-imgWrapper",
            `Diary-article-section-imgWrapper_emotion${curEmotionData.emotionId}`
            ].join(" ")}>
            <img
              className="Diary-article-section-imgWrapper-img"
              src={curEmotionData.emotionImg}
              alt={curEmotionData.emotionDescription}
            />
            
            <div className="Diary-article-section-imgWrapper-description">
              {curEmotionData.emotionDescription}
            </div>
          </div>
        </section>

        <section className="Diary-article-section">
          <h4 className="Diary-article-section-title">
            오늘의 일기
          </h4>

          <div className="Diary-article-section-contentWrapper">
            <p className="Diary-article-section-contentWrapper-content">
              {data.content}
            </p>
          </div>
        </section>
      </article>
    </div>
  );
};

export default Diary;