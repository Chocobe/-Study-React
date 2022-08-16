import React, {
  useEffect,
} from "react";
import News, {
  NewsProps
} from "@/pages/News/News";
import { connect } from "react-redux";
import { 
  RootState, 
  ThunkAnyDispatch
} from "@/modules/MainStore";
import { getNews } from "@/modules/news";
import { useParams } from "react-router-dom";

export type NewsContainerProps = {
  getNews: (...params: Parameters<typeof getNews>) => void;
} & NewsProps;

const NewsContainer = ({
  newsItems,
  getNews,
}: NewsContainerProps) => {
  const routerParams = useParams();

  useEffect(() => {
    const category = routerParams.category as string;

    getNews(category);
  }, [routerParams]);

  return (
    <News newsItems={newsItems} />
  );
};

export default connect(
  (state: RootState) => ({
    newsItems: state.news.newsItems,
  }),

  (dispatch: ThunkAnyDispatch) => ({
    getNews: (category: string) => dispatch(getNews(category)),
  }),
)(NewsContainer);