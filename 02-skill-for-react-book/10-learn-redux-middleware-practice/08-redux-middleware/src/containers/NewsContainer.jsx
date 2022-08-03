import React, {
  useEffect,
} from "react";
import News from "@pages/News";
import { connect } from "react-redux";
import { getNews } from "@store/news";
import { useParams } from "react-router-dom";

const mockNewsItems = [
  {
    title: "'극심한 고통' 신장결석 예방하려면 '이런 식단'으로 (연구) - 코메디닷컴",
    description: "신장결석은 극심한 통증을 유발한다. 신장결석이 생긴 적이 있다면 5년 이내에 또 생길 가능성은 30%에 이른다. 신장결석 재발을 막기 위해 보통 식생활에 변화를 줄 것을 권장한다.최근 미 메이오클리닉 연구진은 칼슘과 칼륨이 풍부한 식품으로 식단을 짜면 증후성 신장결석의 재발을 예방할 수 있음을 보여주는 연구 결과를 발표했다.연구진은 처음으로 신장결석을 경험한 환자 411명과 대조군 384명을 대상으로 식생활에 관한 설문조사를 실시했다. 그 결과",
    url: "https://kormedi.com/1412078/%ea%b7%b9%ec%8b%ac%ed%95%9c-%ea%b3%a0%ed%86%b5-%ec%8b%a0%ec%9e%a5%ec%97%90-%eb%8f%8c-%ec%98%88%eb%b0%a9%ed%95%98%eb%a0%a4%eb%a9%b4-%ec%9d%b4%eb%9f%b0-%ec%8b%9d%eb%8b%a8%ec%9c%bc%eb%a1%9c/",
    urlToImage: "https://kormedi.com/wp-content/uploads/2022/08/ec8ba0ec9ea5eab2b0ec849d-580x387.jpg",
    publishedAt: "2022-08-03T11:50:38Z",
  },
];

const NewsContainer = ({
  newsItems, getNews,
}) => {
  const routerParams = useParams();
  
  useEffect(() => {
    const category = routerParams.category;
    getNews(category);
  }, [routerParams]);
  
  return (
    <News newsItems={newsItems} />
  );
};

export default connect(
  state => ({
    newsItems: state.news.newsItems,
  }),

  dispatch => ({
    getNews: category => dispatch(getNews(category)),
  }),
)(NewsContainer);