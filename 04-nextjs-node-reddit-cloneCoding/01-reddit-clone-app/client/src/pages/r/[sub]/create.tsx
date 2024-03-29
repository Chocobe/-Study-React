import Reac, {
  useState,
} from "react";
import { GetServerSideProps } from "next";
import axios from "axios";

function PostCreate() {
  const [title, settitle ] = useState("");
  const [body, setBody] = useState("");
  
  return (
    <div className="flex flex-col justify-center pt-16">
      <div className="w-10/12 mx-auto md:w-96">
        <div className="p-4 bg-white rounded">
          <h1 className="mb-3 text-lg">
            포스트 생성하기
          </h1>

          <form>
            <div className="relative mb-2">
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                placeholder="제목"
                maxLength={20}
              />

              <div
                style={{
                  top: 10,
                  right: 10,
                }}
                className="absolute mb-2 text-sm text-gray-400 select-none"
              >
                /20
              </div>
            </div>

            <textarea
              rows={4}
              placeholder="설명"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />

            <div className="flex justify-end">
              <button
                className="px-4 py-1 text-sm font-semibold text-white bg-gray-400 border rounded"
              >
                생성하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostCreate;

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  try {
    const cookie = req.headers.cookie;

    if (!cookie) {
      throw new Error("쿠키가 없습니다.");
    }

    await axios.get("/auth/me", { headers: { cookie } });

    return {
      props: {},
    };
  } catch (error) {
    console.log(error);

    res.writeHead(307, { Location: "/login" }).end();

    return {
      props: {},
    };
  }
};