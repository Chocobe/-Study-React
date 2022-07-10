import { useRoutes } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import Home from "@/views/Home";

/** @type { import("react-router-dom").RouteObject[] } */
const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: ":category",
        element: <Home />
      },
      {
        path: "about",
        element: <div className="About">여기는 About</div>
      }
    ],
  },
];

const Router = () => {
  const routeElement = useRoutes(routes);

  return (
    <>
      {routeElement}
    </>
  );
};

export default Router;