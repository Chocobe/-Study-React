import React from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

const MainRouter = () => {
  const element = useRoutes(routes);

  return element;
};

export default MainRouter;