import {
  lazy, Suspense,
} from "react";
import { RouteObject } from "react-router-dom";

const MainLayout = lazy(() => import("@/layouts/MainLayout"));
const Home = lazy(() => import("@/pages/Home/Home"));
// const News = lazy(() => import("@/pages/News/News"));
const NewsContainer = lazy(() => import("@/containers/NewsContainer/NewsContainer"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Now Loading...</div>}>
        <MainLayout header="News List" />
      </Suspense>
    ),
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<div>Now Page Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: ":category",
        element: (
          <Suspense fallback={<div>Now News Loading...</div>}>
            {/* <News /> */}
            <NewsContainer />
          </Suspense>
        ),
      },
    ],
  },
];

export default routes;