import {
  useMemo,
} from "react";
import styled from "styled-components";
import Image from "next/image";

const NewsCardRoot = styled.div`
  padding: 16px 20px;
  
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 180px;
  gap: 20px;

  background-color: ${({ theme }) => theme.colors.customGray03};

  & > :first-child {
    border-radius: 4px;
    box-shadow: 1px 3px 20px rgba(255, 255, 255, 0.25);
  }
`;

const NewsCardThumbnail = styled(Image)`
  object-fit: cover;
  object-position: end;
`;

const Title = styled.h3`
  padding: 0 12px;

  font-weight: 600;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

const Boundary = styled.div`
  margin: 8px 0;
  height: 4px;

  background-color: ${({ theme }) => theme.colors.customBlue01};
`;

const Content = styled.p`
  padding: 0 12px;
  
  color: #BDBDBD;
  font-size: 14px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 7;
`;

export type NewsCardProps = {
  thumbnailUrl: string;
  title: string;
  content: string;
};

function NewsCard(props: NewsCardProps) {
  const {
    thumbnailUrl,
    title,
    content,
  } = props;
  
  const isValidThumbnailUrl = useMemo(() => {
    return !!thumbnailUrl?.match(/^https?:\/\/\w+/)
  }, [thumbnailUrl]);

  return (
    <NewsCardRoot>
      {isValidThumbnailUrl
        ? (
        <NewsCardThumbnail 
          src={thumbnailUrl} 
          alt="Thumbnail"
          width="100%"
          height="100%" />
        ) 
        : <div />
      }

      <div>
        <Title>{title}</Title>
        <Boundary />
        <Content>{content}</Content>
      </div>
    </NewsCardRoot>
  );
}

export default NewsCard;