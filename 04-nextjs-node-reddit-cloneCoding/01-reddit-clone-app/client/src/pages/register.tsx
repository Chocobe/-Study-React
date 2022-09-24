import React, {
  useState,
  FormEvent,
} from "react";
import {
  useRouter,
} from "next/router";
import axios from "axios";
import Link from "next/link";
import InputGroup from "../components/InputGroup";

import { useAuthState } from "../context/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<any>({});

  const router = useRouter();

  const { authenticated } = useAuthState();
  if (authenticated) {
    router.push("/");
    return;
  }
  
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    console.log("axios.defaults.baseUrl: ", axios.defaults.baseURL);

    try {
      const response = await axios.post("auth/register", {
        email,
        username,
        password,
      });

      console.log("response: ", response);

      router.push("/login");
    } catch (error: any) {
      console.log("error: ", error);
      setErrors(error?.response?.data || {});
    }
  };
  
  return (
    <div className="bg-white">
      <div className="flex flex-col justify-center items-center h-screen p-6">
        <div className="w-10/12 mx-auto md:w-96">
          <h1 className="mb-2 text-lg font-medium">회원가입</h1>

          <form onSubmit={handleSubmit}>
            <InputGroup 
              placeholder="Email"
              error={errors.email}
              value={email}
              setValue={setEmail}
            />

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
              회원 가입
            </button>
          </form>

          <small>
            이미 회원가입 하셨나요?
            <Link href="/login">
              <a className="ml-1 text-blue-500 uppercase">로그인</a>
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Register;