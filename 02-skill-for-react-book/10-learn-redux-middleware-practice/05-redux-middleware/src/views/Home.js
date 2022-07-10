import React from "react";
import { useParams } from "react-router-dom";
// import NewsList from "@/components/NewsList";
import NewsListContainer from "@/containers/NewsListContainer";

const Home = () => {
  const { category } = useParams();

  console.log(category);

  return (
    <div className="Home">
      {/* <NewsList /> */}
      <NewsListContainer />
    </div>
  );
};

export default Home;