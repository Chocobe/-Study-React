import {
  useMemo,
  useEffect,
} from "react";
import {
  useAppSelector,
  useAppDispatch,
} from "@/hooks";
import { useRouter } from "next/router";
import { retrieveNewsRequest } from "@/redux/slices/newsSlice";
import NewsCategoryPresenter from "@/presenters/NewsCategory/NewsCategoryPresenter";

import menuItems from "@/layouts/LayoutMenu/constants";

import { NewsCardProps } from "@/presenters/NewsCategory/NewsCard";

function NewsCategory() {
  const router = useRouter();
  
  const newsItems: NewsCardProps[] = useAppSelector(({ news }) => {
    return news.newsItems.map(news => {
      const {
        urlToImage,
        title,
        description,
      } = news;

      return {
        thumbnailUrl: urlToImage,
        title,
        content: description,
      } as NewsCardProps;
    });
  });
  const category = useMemo(() => {
    return router.query.category as string || 
      menuItems[0].name.toLowerCase();
  }, [router]);

  const appDispatch = useAppDispatch();

  useEffect(() => {
    appDispatch(retrieveNewsRequest(category));
  }, [category, appDispatch]);
  
  return (
    <NewsCategoryPresenter newsItems={newsItems}/>
  );
}

export default NewsCategory;