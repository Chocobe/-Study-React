import { useRouter } from "next/router";
import CardItem from "@components/CardItem";
import styled from "styled-components";

const mockNews = [
  {
    title: "[단독] 세지는 원전 청구서…한수원 내년 핵연료부담금 2000억원 껑충 - 매일경제",
    description: "내년 사용후핵연료 관리 부담금 8278억 예상 물가 오름세 반영한 단가 재산정시 추가 부담",
    urlToImage: "https://file.mk.co.kr/meet/neds/2022/10/image_readtop_2022_870769_16647710355185008.jpg",
  },
  {
    title: "[자막뉴스] 배달료 인하 경쟁으로 이어지나...시장 개편 조짐 / YTN - YTN",
    description: "[앵커]배달 앱 시장에 대기업들이 속속 출사표를 던지고 있습니다.소비자들은 경쟁자들이 늘어나면서 과도한 배달 앱 수수료가 저렴해지길 기대하고 있습니다.윤해리 기자의 보도입니다.[기자]한 번에 한 집만 빠르게 연결한다는 배달 앱 서비스입니다.배달료는 5천 원입니다.배달료가 비싸다 보...",
    urlToImage: "https://i.ytimg.com/vi/7x4hH7ZH3mQ/hqdefault.jpg",
  },
];

const CategoryPageRoot = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 1px;

  background-color: ${({ theme }) => theme.colors.gray02};
`;

function CategoryPage() {
  const router = useRouter();
  
  return (
    <CategoryPageRoot>
      {mockNews.map((news, index) => {
        const {
          title,
          description,
          urlToImage,
        } = news;

        return (
          <CardItem
            key={index}
            title={title}
            description={description}
            imageUrl={urlToImage}
          />
        )
      })}
    </CategoryPageRoot>
  );
}

export default CategoryPage;
