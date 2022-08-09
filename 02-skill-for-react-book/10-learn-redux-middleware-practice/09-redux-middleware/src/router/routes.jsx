import { lazy, Suspense } from "react";
import Loading from "@components/Loading/Loading";

const MainLayout = lazy(() => import("@layouts/MainLayout/MainLayout"));
const Home = lazy(() => import("@pages/Home/Home"));
const NewsContainer = lazy(() => import("@containers/NewsContainer/NewsContainer"));

import { menuItems } from "./menuItems";

/** @type { import("react-router-dom").RouteObject[] } */
export const routes = [
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <MainLayout 
          header="News List" 
          menuItems={menuItems}
        />
      </Suspense>
    ),
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: ":category",
        element: (
          <Suspense fallback={<Loading />}>
            <NewsContainer />
          </Suspense>
        ),
      },
    ],
  },
];