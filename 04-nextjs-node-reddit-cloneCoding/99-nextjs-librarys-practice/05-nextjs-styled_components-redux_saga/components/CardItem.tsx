import Image from "next/image";
import styled from "styled-components";

const CardItemRoot = styled.div`
  padding: 16px 20px;
  width: 100%;
  height: 212px;
  
  display: flex;
  gap: 20px;

  background-color: ${({ theme }) => theme.colors.gray03};
`;

const ImageWrapper = styled.figure`
  width: 40%;
  height: 100%;
  
  display: flex;

  & > * {
    width: 100%;
    height: 100%;
    
    border-radius: 4px;
    box-shadow: 1px 3px 20px rgba(255, 255, 255, 0.25);
    object-fit: cover;
    object-position: center;
  }
`;

const CardBody = styled.div`
  width: 100%;
  flex: 1;
`

const Title = styled.h3`
  padding: 0 12px;
  font-size: 16px;
  font-weight: 600;

  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
`;

const Boundary = styled.div`
  margin: 8px 0;
  height: 4px;
  background-color: ${({ theme }) => theme.colors.blue01};
`;

const Content = styled.div`
  padding: 0 12px;
  color: ${({ theme }) => theme.colors.gray01};

  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
`;

export type CardItemProps = {
  title: string;
  description: string;
  imageUrl: string;
};

function CardItem(props: CardItemProps) {
  const {
    title,
    description,
    imageUrl,
  } = props;

  return (
    <CardItemRoot>
      <ImageWrapper>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt="Thumbnail"
        />
      </ImageWrapper>

      <CardBody>
        <Title>
          {title}
        </Title>

        <Boundary />

        <Content>
          {description}
        </Content>
      </CardBody>
    </CardItemRoot>
  );
}

export default CardItem;