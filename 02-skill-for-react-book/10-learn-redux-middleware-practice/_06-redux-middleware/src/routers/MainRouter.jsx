import React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/views/Home";
import News from "@/views/News";

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
        element: <News />,
      },
    ],
  },
];

const MainRouter = () => {
  const element = useRoutes(routes);

  return (
    <>
      {element}
    </>
  );
};

export default MainRouter;