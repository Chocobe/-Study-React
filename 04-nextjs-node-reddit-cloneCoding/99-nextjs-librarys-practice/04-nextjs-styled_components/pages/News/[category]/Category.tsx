import {
  useRef,
  useCallback,
  useMemo,
  useEffect,
} from "react";
import {
  useAppSelector,
  useAppDispatch,
} from "hooks";
import {
  retrieveNewsRequest,
} from "redux/slices/newsSlice";
import { useRouter } from "next/router";
import styled from "styled-components";
import NewsHeader from "components/News/NewsHeader";
import NewsNav from "components/News/NewsNav";
import NewsCard from "components/News/NewsCard";

const NewsPageRoot = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: start;
  overflow: hidden;
`;

const NewsWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;

  & > *:not(:first-child) {
    margin-top: 1px;
  }
`;

function NewsCategory() {
  const newsPageRootRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const newsItems = useAppSelector(({ news }) => news.newsItems);
  const isLoading = useAppSelector(({ news }) => news.isLoading);
  const error = useAppSelector(({ news }) => news.error);

  const category = useMemo(() => {
    return router.query.category;
  }, [router]);

  const appDispatch = useAppDispatch();
  
  const onMountedNewsNav = useCallback((width: number) => {
    newsPageRootRef.current!.style.width = `${width}px`;
  }, []);

  useEffect(() => {
    appDispatch(retrieveNewsRequest(category as string));
  }, [category, appDispatch]);

  useEffect(() => {
    if (error) {
      alert("Hello Error");
    }
  }, [error]);
  
  return (
    <NewsPageRoot ref={newsPageRootRef}>
      <NewsHeader>
        News List
      </NewsHeader>

      <NewsNav onMounted={onMountedNewsNav} />

      <NewsWrapper>
        {newsItems.map((news, index) => {
          const {
            title,
            description,
            urlToImage,
            publishedAt,
          } = news;

          return (
            <NewsCard
              key={index}
              title={title}
              description={description}
              thumbnail={urlToImage}
              publishedAt={publishedAt}
            />
          )
        })}
      </NewsWrapper>
    </NewsPageRoot>
  );
}

export default NewsCategory;