import { 
  useState, 
  useRef, 
  useContext,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";

import { DiaryDispatchContext } from "../../App";

import MyHeader from "../MyHeader/MyHeader";
import MyButton from "../MyButton/MyButton";
import EmotionItem from "../EmotionItem/EmotionItem";

import "./DiaryEditor.css";

const emotionList = [
  {
    emotionId: 1,
    emotionImg: `${process.env.PUBLIC_URL}/assets/emotion1.png`,
    emotionDescription: "완전 좋음",
  },
  {
    emotionId: 2,
    emotionImg: `${process.env.PUBLIC_URL}/assets/emotion2.png`,
    emotionDescription: "좋음",
  },
  {
    emotionId: 3,
    emotionImg: `${process.env.PUBLIC_URL}/assets/emotion3.png`,
    emotionDescription: "그럭저럭",
  },
  {
    emotionId: 4,
    emotionImg: `${process.env.PUBLIC_URL}/assets/emotion4.png`,
    emotionDescription: "나쁨",
  },
  {
    emotionId: 5,
    emotionImg: `${process.env.PUBLIC_URL}/assets/emotion5.png`,
    emotionDescription: "끔찍함",
  },
];

/** @param { Date } date */
const getStringDate = date => {
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  if (month < 10) {
    month = `0${month}`;
  }

  if (day < 10) {
    day = `0${day}`;
  }

  return `${year}-${month}-${day}`;
};

const DiaryEditor = ({
  isEdit, originData,
}) => {
  const { onCreate, onEdit } = useContext(DiaryDispatchContext);
  
  const navigate = useNavigate();
  
  // 날짜
  const [date, setDate] = useState(
    getStringDate(new Date())
  );

  // 감정
  const [emotion, setEmotion] = useState(3);

  const onClickEmotion = emotion => {
    setEmotion(emotion);
  };

  // 컨텐츠
  const [content, setContent] = useState("");
  const contentRef = useRef();

  // 컨트롤박스
  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }

    if (window.confirm(isEdit
      ? "일기를 수정 하시겠습니까?"
      : "새로운 일기를 등록 하시겠습니까?"
    )) {
      isEdit
        ? onEdit(originData.id, date, content, emotion)
        : onCreate(date, content, emotion);
    }
    
    // isEdit
    //   ? onEdit(date, content, emotion)
    //   : onCreate(date, content, emotion);
    navigate("/", { replace: true });
  }

  // 수정용 처리
  useEffect(() => {
    if (!isEdit) return;

    const { date, content, emotion } = originData;
    
    setDate(getStringDate(new Date(
      parseInt(date)
    )));
    setContent(content);
    setEmotion(emotion);
  }, [isEdit, originData]);
  
  return (
    <div className="DiaryEditor">
      <MyHeader
        leftChild={
          <MyButton
            onClick={() => navigate(-1)}
          >
            〈 뒤로가기
          </MyButton>
        }
        className="DiaryEditor-header"
      >
        {isEdit ? "일기 수정하기" : "새 일기쓰기"}
      </MyHeader>

      <div className="DiaryEditor-content">
        <section className="DiaryEditor-content-section">
          <h4
            className="DiaryEditor-content-section-title"
          >
            오늘은 언제인가요?
          </h4>

          <div className="DiaryEditor-content-section-inputWrapper">
            <input
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
              className="DiaryEditor-content-section-inputWrapper-date"
            />
          </div>
        </section>

        <section className="DiaryEditor-content-section">
          <h4 className="DiaryEditor-content-section-title">
            오늘의 감정
          </h4>

          <div className="DiaryEditor-content-section-inputWrapper emotionListWrapper">
            {emotionList.map(curEmotion => (
              <EmotionItem 
                onClick={onClickEmotion}
                isSelected={curEmotion.emotionId === emotion}
                key={curEmotion.emotionId} 
                {...curEmotion} 
              />
            ))}
          </div>
        </section>

        <section className="DiaryEditor-content-section">
          <h4 className="DiaryEditor-content-section-title">
            오늘의 일기
          </h4>

          <div className="DiaryEditor-content-section-inputWrapper textWrapper">
            <textarea 
              ref={contentRef}
              value={content}
              onChange={e => setContent(e.target.value)}
              placeholder="오늘은 어땠나요?"
              className="DiaryEditor-content-section-inputWrapper-content"
            />
          </div>
        </section>

        <section className="DiaryEditor-content-section">
          <div className="DiaryEditor-content-section-controlBox">
            <MyButton
              onClick={() => navigate(-1)}
            >
              취소하기
            </MyButton>

            <MyButton
              type="positive"
              onClick={() => handleSubmit()}
            >
              작성완료
            </MyButton>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DiaryEditor;