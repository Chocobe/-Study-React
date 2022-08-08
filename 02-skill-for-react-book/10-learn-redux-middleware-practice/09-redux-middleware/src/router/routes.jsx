import { lazy, Suspense } from "react";

const MainLayout = lazy(() => import("@layouts/MainLayout/MainLayout"));
const Home = lazy(() => import("@pages/Home/Home"));
const News = lazy(() => import("@pages/News/News"));

const Loading = () => <div>Now Loading...</div>

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
            <News />
          </Suspense>
        ),
      },
    ],
  },
];