import {
  useState,
  FormEvent,
} from "react";
import {
  GetServerSideProps,
} from "next";
import { useRouter } from "next/router";
import InputGroup from "../../components/InputGroup";
import axios from "axios";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  try {
    const cookie = req.headers.cookie;

    // Cookie 가 없다면, 에러
    if (!cookie) {
      console.log("/subs/create 에서 cookie 가 없음", cookie);
      throw new Error("Missing Auth Token Cookie");
    }

    // Cookie 를 사용하여, Server 에 인증처리 요청
    await axios.get("/auth/me", {
      headers: {
        cookie,
      },
    });

    return {
      props: {},
    };
  } catch (error) {
    // Server 의 인증처리에서 에러 발생 시, Client 의 /login 페이지로 이동
    // res.writeHead(307, { Location: "/login" });

    console.log("페이지 여는데 에러 발생: ", error);

    return {
      redirect: {
        statusCode: 307,
        destination: "/login",
      },
    };
  }
}

function SubCreate() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState<any>({});
  
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("/subs", {
        name,
        title,
        description,
      });

      console.log("response: ", response);

      router.push(`/r/${response.data.name}`);
    } catch (error: any) {
      console.log(error);
      setErrors(error.response.data);
    }
  };
  
  return (
    <div className="flex flex-col justify-center items-center pt-16">
      <div className="w-10/12 mx-auth md:w-96">
        <h1 className="mb-2 text-lg font-medium">
          커뮤니티 만들기
        </h1>

        <hr />

        <form>
          <div className="my-6">
            <p className="font-medium">
              Name
            </p>
            <p className="mb-2 text-xs text-gray-400">
              커뮤니티 이름은 변경할 수 없습니다.
            </p>
            <InputGroup
              placeholder="이름"
              value={name}
              setValue={setName}
              error={errors.name}
            />
          </div>

          <div className="my-6">
            <p className="font-medium">
              Title
            </p>
            <p className="mb-2 text-xs text-gray-400">
              주제를 나타냅니다. 언제든지 변경할 수 있습니다.
            </p>
            <InputGroup
              placeholder="이름"
              value={title}
              setValue={setTitle}
              error={errors.title}
            />
          </div>

          <div className="my-6">
            <p className="font-medium">
              Description
            </p>
            <p className="mb-2 text-xs text-gray-400">
              해당 커뮤니티에 대한 설명 입니다.
            </p>
            <InputGroup
              placeholder="이름"
              value={description}
              setValue={setDescription}
              error={errors.description}
            />
          </div>

          <div className="flex justify-end">
            <button
              className="px-4 py-1 text-sm font-semibold rounded text-white bg-gray-400 border"
              onClick={handleSubmit}
            >
              제출하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubCreate;