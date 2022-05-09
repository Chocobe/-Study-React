import React, { 
  useState, 
  useRef, 
  useContext,
  useEffect,
  useCallback,
} from "react";
import { useNavigate } from "react-router-dom";

import { DiaryDispatchContext } from "../../App";

import MyHeader from "../MyHeader/MyHeader";
import MyButton from "../MyButton/MyButton";
import EmotionItem from "../EmotionItem/EmotionItem";

import { getStringDate } from "../../utils/date";
import { emotionList } from "../../utils/emotion";

import "./DiaryEditor.css";

const DiaryEditor = ({
  isEdit, originData,
}) => {
  const { onCreate, onEdit, onRemove } = useContext(DiaryDispatchContext);
  
  const navigate = useNavigate();

  // 뒤로가기
  const goToBack = useCallback(() => {
    navigate(-1);
  }, []);

  // 날짜
  const [date, setDate] = useState(
    getStringDate(new Date())
  );

  // 감정
  const [emotion, setEmotion] = useState(3);

  const onClickEmotion = useCallback(emotion => {
    setEmotion(emotion);
  }, []);

  // 컨텐츠
  const [content, setContent] = useState("");
  const contentRef = useRef();

  useEffect(() => {
    console.log(`content 와치`);
    console.log(content);
  });

  // 컨트롤박스
  const handleSubmit = useCallback(() => {
    console.log(`content: ${content}`);
    console.log(content);
    
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

    goToBack();
  }, [date, content, emotion]);

  // 수정 상태에서, 삭제 버튼
  const handleRemove = useCallback(() => {
    if (window.confirm("정말 삭제 하시겠습니까?")) {
      onRemove(originData.id);
      navigate("/", { replace: true });
    }
  }, []);

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
            onClick={goToBack}
          >
            〈 뒤로가기
          </MyButton>
        }
        rightChild={isEdit && (
          <MyButton
            type="negative"
            onClick={handleRemove}
          >
            삭제하기
          </MyButton>
        )}
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
              onChange={e => {
                console.log("onChange() 호출");
                console.log("e.target.value");
                console.log(e.target.value);
                
                setContent(e.target.value)
              }}
              placeholder="오늘은 어땠나요?"
              className="DiaryEditor-content-section-inputWrapper-content"
            />
          </div>
        </section>

        <section className="DiaryEditor-content-section">
          <div className="DiaryEditor-content-section-controlBox">
            <MyButton
              onClick={goToBack}
            >
              취소하기
            </MyButton>

            <MyButton
              type="positive"
              onClick={handleSubmit}
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