import styled from "styled-components";
import dayjs from "dayjs";

const NewsCardRoot = styled.div`
  padding: 16px 20px;

  width: 100%;
  height: 212px;

  display: grid;
  grid-template-columns: 40% 1fr;
  gap: 20px;

  background-color: ${({ theme }) => theme.colors.gray03};
`;

const NewsThumbnail = styled.figure`
  width: 100%;
  height: 100%;

  background-color: #383841;
  overflow: hidden;
`;

const NewsThumbnailImage = styled.img`
  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: center;

  border-radius: 4px;
  box-shadow: 1px 3px 20px rgba(255, 255, 255, 0.25);
`;

const NewsBody = styled.div`
  width: 100%;
  flex: 1;

  color: #fff;
`;

const NewsHeader = styled.div`
  padding: 0 12px;

  font-weight: 600;

  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

const PublishedAt = styled.small`
  display: block;
  color: #999;
  text-align: end;
  font-size: 12px;
`

const Boundary = styled.div`
  margin: 8px 0;
  border-bottom: 4px solid ${({ theme }) => theme.colors.blue01};
`

const NewsContent = styled.div`
  padding: 0 12px;

  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 7;

  font-size: 14px;
`;

export type NewsCardProps = {
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
}

function NewsCard(props: NewsCardProps) {
  const {
    title,
    description,
    thumbnail,
    publishedAt,
  } = props;
  
  return (
    <NewsCardRoot>
      <NewsThumbnail>
        <NewsThumbnailImage 
          src={thumbnail}
        />
      </NewsThumbnail>

      <NewsBody>
        <NewsHeader>
          {title}
        </NewsHeader>

        <PublishedAt>
          {dayjs(publishedAt).format("YY년 MM월 DD일")}
        </PublishedAt>

        <Boundary />

        <NewsContent>
          {description}
        </NewsContent>
      </NewsBody>
    </NewsCardRoot>
  );
}

export default NewsCard;