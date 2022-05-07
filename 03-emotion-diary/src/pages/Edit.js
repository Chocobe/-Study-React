import { useSearchParams, useNavigate } from "react-router-dom";

const Edit = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");
  const mode = searchParams.get("mode");

  console.log(`id: ${id}`);
  console.log(`mode: ${mode}`);

  const navigate = useNavigate();

  return (
    <div>
      <h1>Edit</h1>
      <p>일기 수정 페이지 입니다.</p>

      <button 
        onClick={() => setSearchParams({ who: "Chocobe" })}
      >
        Query String 바꾸기
      </button>

      <button
        onClick={() => navigate("/home")}
      >
        Home
      </button>

      <button
        onClick={() => navigate(-1)}
      >
        뒤로가기
      </button>
    </div>
  );
};

export default Edit;