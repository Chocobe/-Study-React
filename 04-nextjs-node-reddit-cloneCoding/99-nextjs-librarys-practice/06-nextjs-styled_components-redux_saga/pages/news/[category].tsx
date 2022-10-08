import React, {
  useMemo,
  useEffect,
} from "react";
import NewsItem from "@/components/news/NewsItem";
import { useRouter } from "next/router";
import useAppSelector from "@/hooks/useAppSelector";
import useAppDispatch from "@/hooks/useAppDispatch";

import {
  retrieveNewsRequest,
} from "@/redux/slices/newsSlice";
import { NewsItemData } from "@/network/news";

function News() {
  const router = useRouter();

  const category = router.query.category as string;
  
  const newsItems = useAppSelector(({ news }) => news.newsItems) as NewsItemData[];

  const appDispatch = useAppDispatch();

  useEffect(() => {
    const retrieveNews = async () => {
      try {
        appDispatch(retrieveNewsRequest(category));
      } catch (error) {
        //
      }
    };

    retrieveNews();
  }, [category, appDispatch]);
  
  return (
    <div>
      {newsItems.map((news, idx) => {
        const {
          title,
          description,
          urlToImage,
        } = news;

        return (
          <NewsItem
            key={idx}
            thumbnailUrl={urlToImage}
            title={title}
            content={description}
          />
        )
      })}
    </div>
  );
}

export default News;