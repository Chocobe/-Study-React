import Link from "next/link";
import { useAuthState, useAuthDispatch } from "../context/auth";

import {
  useEffect,
} from "react";
import axios from "axios";

function NavBar() {
  const { loading, authenticated } = useAuthState();
  const dispatch = useAuthDispatch();
  
  const handleLogout = async () => {
    try {
      const response = await axios.post("/auth/logout");
      dispatch("LOGOUT");
      
      console.log("logout response: ", response);

      window.location.reload();
    } catch(error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
  }, [loading, authenticated]);
  
  return (
    <div className="fixed inset-x-0 top-0 z-10 flex items-center justify-between h-16 px-5 bg-white">
      <span className="text-2xl font-semibold text-gray-400">
        <Link href="/">Community</Link>
      </span>

      <div className="max-w-full px-4">
        <div className="relative flex items-center bg-gray-100 border hover:border-gray-700 hover:bg-white">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 bg-transparent rounded focus:outline-none"
          />
        </div>
      </div>

      <div className="flex">
        {!loading && (
          authenticated
            ? <button
              className="w-20 px-2 mr-2 text-sm text-center text-white bg-gray-400 rounded h-7"
              onClick={handleLogout}
            >
              로그아웃
            </button>
            : <>
              <Link href="/login">
                <a className="w-20 p-2 mr-2 text-center text-blue-500 border border-blue-500 rounded">
                  로그인
                </a>
              </Link>
              <Link href="register">
                <a className="w-20 p-2 text-center text-white bg-gray-400 rounded">
                  회원가입
                </a>
              </Link>
            </>
        )}
      </div>
    </div>
  );
};

export default NavBar;