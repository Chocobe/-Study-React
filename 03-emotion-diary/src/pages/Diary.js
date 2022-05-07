import { useParams } from "react-router-dom";

const Diary = () => {
  const { id, mode, page } = useParams();

  console.log(`id: ${id}`);
  console.log(`mode: ${mode}`);
  console.log(`page: ${page}`);
  
  return (
    <div>
      <h1>Diary</h1>
      <p>일기 상세 페이지 입니다.</p>
    </div>
  );
};

export default Diary;