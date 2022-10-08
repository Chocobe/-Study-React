import React, {
  useMemo,
} from "react";
import styled from "styled-components";
import Image from "next/image";

const NewsItemRoot = styled.div`
  padding: 16px 20px;
  width: 100%;

  display: grid;
  grid-template-columns: 240px 1fr;
  grid-auto-rows: 180px;
  gap: 20px;

  background-color: ${({ theme }) => theme.colors.customGray03};

  & > *:first-child {
    box-shadow: 1px 3px 20px rgba(255, 255, 255, 0.25);
  }
`;

const ThumbnailImage = styled(Image)`
  width: 100%;
  height: 100%;

  border-radius: 4px;
  
  object-fit: cover;
  object-position: center;
`;

const Title = styled.header`
  padding: 0 12px;

  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;

  font-weight: 600;
`;

const Boundary = styled.div`
  margin: 8px 0;
  
  width: 100%;
  height: 4px;

  background-color: ${({ theme }) => theme.colors.customBlue01};
`;

const Content = styled.div`
  padding: 0 12px;

  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 7;

  color: ${({ theme }) => theme.colors.customGray01};
  font-size: 14px;
`;

export type NewsItemProps = {
  thumbnailUrl: string;
  title: string;
  content: string;
};

function NewsItem(props: NewsItemProps) {
  const {
    thumbnailUrl,
    title,
    content,
  } = props;

  const isValidThumbnailUrl = useMemo(() => {
    return !!thumbnailUrl?.match(/^https?:\/\/\w+/);
  }, [thumbnailUrl]);
  
  return (
    <NewsItemRoot>
      <ThumbnailImage
        src={isValidThumbnailUrl ? thumbnailUrl : ""}
        width="100%"
        height="100%"
        alt="Thumbnail" />

      <div>
        <Title>
          {title}
        </Title>

        <Boundary />

        <Content>
          {content}
        </Content>
      </div>
    </NewsItemRoot>
  );
}

export default NewsItem