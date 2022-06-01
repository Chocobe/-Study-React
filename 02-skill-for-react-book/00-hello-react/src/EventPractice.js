import { useState } from "react";

const EventPractice = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const handleChangeUsername = e => setUsername(e.target.value);
  const handleChangeMessage = e => setMessage(e.target.value);
  const handleClick = () => {
    alert(`${username}: ${message}`);
    setUsername("");
    setMessage("");
  };
  const handleKeyUp = e => {
    if (e.key === "Enter") handleClick();
  }

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명을 입력해 주세요"
        value={username}
        onChange={handleChangeUsername}
      />
      <input
        type="text"
        name="message"
        placeholder="메시지를 입력해 주세요"
        value={message}
        onChange={handleChangeMessage}
        onKeyUp={handleKeyUp}
      />
      <button
        onClick={handleClick}
      >
        확잊
      </button>
    </div>
  );
};

export default EventPractice;