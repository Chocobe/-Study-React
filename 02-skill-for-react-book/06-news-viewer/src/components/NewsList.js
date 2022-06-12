import React, {
  useState,
  useEffect,
} from "react";
import axios from "axios";
import styled from "styled-components";
import NewsItem from "./NewsItem";

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

const sampleArticle = {
  title: "제목",
  description: "내용",
  url: "https://google.com",
  urlToImage: "https://via.placeholder.com/160",
};

const NewsList = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const response = await axios.get(
          process.env.REACT_APP_ENDPOINT,
          {
            params: {
              apiKey: process.env.REACT_APP_NEWS_API_KEY,
              country: "kr"
            },
          }
        );

        setArticles(response.data.articles);
      } catch (e) {
        console.warn(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <NewsListBlock>대기중</NewsListBlock>
    );
  }

  if (!articles) return null;

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