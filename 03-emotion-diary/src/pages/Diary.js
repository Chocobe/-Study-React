import { useParams } from "react-router-dom";

const Diary = () => {
  const { id } = useParams();

  console.log(`id: ${id}`);
  
  return (
    <div>
      <h1>Diary</h1>
      <p>일기 상세 페이지 입니다. - {id}</p>
    </div>
  );
};

export default Diary;