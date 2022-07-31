import { useRoutes } from "react-router-dom";
import MainLayout from "@layouts/MainLayout";
import Home from "@views/Home";
import NewsContainer from "@/containers/NewsContainer/NewsContainer";

/** @type { import("react-router-dom").RouteObject[] } */
export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: ":category",
        element: <NewsContainer />,
      },
    ],
  },
];

const MainRouter = () => {
  return useRoutes(routes);
};

export default MainRouter;