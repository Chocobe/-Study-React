import { useRoutes } from "react-router-dom";
import routes from "./routes";

const MainRouter = () => {
  const MainRoutes = useRoutes(routes);

  return MainRoutes;
};

export default MainRouter;