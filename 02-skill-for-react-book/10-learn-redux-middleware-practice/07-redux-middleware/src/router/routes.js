import MainLayout from "@layouts/MainLayout/MainLayout";
import menuData from "@layouts/MainMenu/menuData";

import Home from "@views/Home/Home";
// import News from "@views/News/News";
import NewsContainer from "@/containers/NewsContainer/NewsContainer";

import { mockNewsList } from "@api/mockApi";

/** @type { import("react-router-dom").RouteObject[] } */
const routes = [
  {
    path: "/",
    element: <MainLayout
      header="News List"
      menuData={menuData}
    />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: ":category",
        // element: <News newsList={mockNewsList} />,
        element: <NewsContainer />,
      },
    ],
  },
];

export default routes;