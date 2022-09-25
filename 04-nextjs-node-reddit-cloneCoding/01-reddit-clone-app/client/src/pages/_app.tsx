import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import axios from "axios";
import { AuthProvider } from "../context/auth";

import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL + "/api";
  axios.defaults.withCredentials = true;

  const router = useRouter();
  const { pathname } = router;
  const authRoutes = ["/register", "/login"];

  const isAuthRoute = authRoutes.includes(pathname);
  
  return (
    <AuthProvider>
      {!isAuthRoute && (
        <NavBar />
      )}
      <div className={isAuthRoute ? "" : "pt-16"}>
        <Component {...pageProps} />
      </div>
    </AuthProvider>
  );
};

export default MyApp;
