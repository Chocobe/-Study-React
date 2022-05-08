import {
  useContext,
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import { DiaryStateContext } from "../App";

import DiaryEditor from "../components/DiaryEditor/DiaryEditor";

const Edit = () => {
  const diaryList = useContext(DiaryStateContext);
  
  const { id } = useParams();

  const [originData, setOriginData] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    if (diaryList.length < 1) return;

    const targetDiary = diaryList.find(diary => {
      return parseInt(diary.id) === parseInt(id);
    });

    if (!targetDiary) {
      navigate("/", { replace: true });
      return;
    }

    setOriginData(targetDiary);
  }, [id, diaryList]);

  return (
    <div className="Edit">
      {originData && <DiaryEditor 
        isEdit={true}
        originData={originData}
      />}
    </div>
  );
};

export default Edit;