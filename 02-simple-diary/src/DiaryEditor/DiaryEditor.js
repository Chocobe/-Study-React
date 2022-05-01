import React, { 
  useState, 
  useRef,
  useEffect,
} from "react";

import "./DiaryEditor.css";

const DiaryEditor = ({ onCreate }) => {
  const $authorInput = useRef();
  const $contentInput = useRef();
  
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChangeState = e => {
    const { target: { name, value } } = e;

    setState({
      ...state,
      [name]: value,
    });
  }

  const handleSubmit = () => {
    if (state.author.length < 1) {
      $authorInput.current.focus();
      return;
    }

    if (state.content.length < 5) {
      $contentInput.current.focus();
      return;
    }

    onCreate(
      state.author,
      state.content,
      state.emotion,
    );

    initState();
  }

  const initState = () => {
    setState({
      author: "",
      content: "",
      emotion: 1,
    });
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>

      <div>
        <input 
          ref={$authorInput}
          name="author"
          value={state.author}
          onChange={e => handleChangeState(e)}
        />
      </div>

      <div>
        <textarea
          ref={$contentInput}
          name="content"
          value={state.content}
          onChange={e => handleChangeState(e)}
        />
      </div>

      <div>
        <h1>Author: {state.author}</h1>
        <h1>Content: {state.content}</h1>
      </div>

      <div>
        <label htmlFor="emotion">
          오늘의 감정점수
        </label>
        
        <select
          name="emotion"
          id="emotion"
          value={state.emotionValue}
          onChange={e => handleChangeState(e)}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>

      <div>
        <button
          onClick={() => handleSubmit()}
        >
          일기 저장하기
        </button>
      </div>
    </div>
  );
};

DiaryEditor.defaultProps = {
  onCreate: () => {},
};

export default React.memo(DiaryEditor);