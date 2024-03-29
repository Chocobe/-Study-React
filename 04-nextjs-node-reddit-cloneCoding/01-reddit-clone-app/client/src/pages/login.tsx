import React, {
  FormEvent,
  useState,
} from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import InputGroup from "../components/InputGroup";
import axios from "axios";

import { useAuthState } from "../context/auth";
import { useAuthDispatch } from "../context/auth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<any>({});

  const router = useRouter();

  const { authenticated } = useAuthState();
  const authDispatch = useAuthDispatch();

  if (authenticated) {
    router.replace("/");
    return;
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post("/auth/login", {
        username,
        password,
      }, {
        withCredentials: true,
      });

      authDispatch("LOGIN", response.data?.user);
      router.push("/");
    } catch (error: any) {
      console.log(error);
      setErrors(error.response.data || {});
    }
  };
  
  return (
    <div className="bg-white">
      <div className="flex flex-col justify-center items-center h-screen p-6">
        <div className="w-10/12 mx-auto md:w-96">
          <h1 className="mb-2 text-lg font-medium">로그인</h1>

          <form onSubmit={handleSubmit}>
            <InputGroup
              placeholder="Username"
              error={errors.username}
              value={username}
              setValue={setUsername}
            />

            <InputGroup
              placeholder="Password"
              error={errors.password}
              value={password}
              setValue={setPassword}
            />

            <button className="w-full py-2 mb-1 text-xs font-bold text-white bg-gray-400 border-gray-400 rounded">
              로그인
            </button>
          </form>

          <small>
            아직 아이디가 없나요?
            <Link href="/register">
              <a className="ml-1 text-blue-500 uppercase">회원가입</a>
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Login;