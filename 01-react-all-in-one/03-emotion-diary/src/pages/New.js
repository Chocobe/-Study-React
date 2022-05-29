import { useEffect } from "react";

import DiaryEditor from "../components/DiaryEditor/DiaryEditor";

const New = () => {
  useEffect(() => {
    const $title = document.getElementsByTagName("title")?.[0];

    if (!$title) return;

    $title.innerHTML = `감정 일기장 - 새 일기`;
  }, []);
  
  return (
    <div className="New">
      <DiaryEditor />
    </div>
  );
};

export default New;