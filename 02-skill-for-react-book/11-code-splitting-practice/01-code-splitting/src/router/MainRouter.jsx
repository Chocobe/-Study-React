import { useRoutes } from "react-router-dom";
import routes from "./routes";

const MainRouter = () => {
  return useRoutes(routes);
};

export default MainRouter;