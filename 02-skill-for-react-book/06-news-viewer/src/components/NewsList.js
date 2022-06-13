import React, {
  useState,
  useEffect,
} from "react";
import axios from "axios";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import usePromise from "../lib/usePromise";

const NewsListBlock = styled.div`
  box-sizing: border-box;

  margin: 0 auto;
  margin-top: 2rem;
  padding-bottom: 3rem;

  width: 768px;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  // const [articles, setArticles] = useState(null);
  // const [loading, setLoading] = useState(false);

  const [loading, response, error] = usePromise(() => {
    const params = {
      apiKey: process.env.REACT_APP_NEWS_API_KEY,
      country: "kr",
      category: category !== "all" ? category : undefined,
    };

    return axios.get(
      process.env.REACT_APP_ENDPOINT,
      { params }
    )
  }, [category]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     // setLoading(true);

  //     try {
  //       const response = await axios.get(
  //         process.env.REACT_APP_ENDPOINT,
  //         {
  //           params: {
  //             apiKey: process.env.REACT_APP_NEWS_API_KEY,
  //             country: "kr",
  //             category: category !== "all" ? category : undefined,
  //           },
  //         }
  //       );

  //       // setArticles(response.data.articles);
  //     } catch (e) {
  //       console.warn(e);
  //     } finally {
  //       // setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [category]);

  if (loading) {
    return (
      <NewsListBlock>대기중</NewsListBlock>
    );
  }

  // 아직 response 값이 설정되지 않았을 때
  // if (!articles) return null;
  if (!response) return null;

  // 에러가 발생했을 때
  if (error) {
    return <NewsListBlock>에러 발생</NewsListBlock>
  }

  // response 값이 유효할 때
  const { articles } = response.data;

  return (
    <NewsListBlock>
      {
        articles.map(article => (
          <NewsItem key={article.url} article={article} />
        ))
      }
    </NewsListBlock>
  );
};

export default NewsList;