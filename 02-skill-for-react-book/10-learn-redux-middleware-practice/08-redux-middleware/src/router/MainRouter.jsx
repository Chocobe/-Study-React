import { useRoutes } from "react-router-dom";
import MainLayout from "@layouts/MainLayout";
import Home from "@pages/Home";
import NewsContainer from "@containers/NewsContainer";

const menuItems = [
  {
    name: "Business",
    path: "business",
  },
  {
    name: "Entertainment",
    path: "entertainment",
  },
  {
    name: "Health",
    path: "health",
  },
  {
    name: "Science",
    path: "science",
  },
  {
    name: "Sports",
    path: "sports",
  },
  {
    name: "Technology",
    path: "technology",
  },
];

/** @type { import("react-router-dom").RouteObject[] } */
const routes = [
  {
    path: "/",
    element: (
      <MainLayout
       header="News List"
       menuItems={menuItems}
      />
    ),
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: ":category",
        element: <NewsContainer />
      },
    ],
  },
];

const MainRouter = () => {
  const element = useRoutes(routes);

  return element;
};

export default MainRouter;