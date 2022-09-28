import styled from "styled-components";

const HomeRoot = styled.div`
  padding: 20px 40px;
  border: 1px solid #777;
  border-radius: 8px;
  background-color: #333;
`

const Title = styled.h1`
  color: #fff;
  font-size: 24px;
  font-weight: 900;
`;

const Content = styled.div`
  margin-top: 20px;
  color: #ff1493;
`;

function Home(_props: any) {
  return (
    <HomeRoot>
      <Title>
        Hello Styled Components
      </Title>

      <Content>
        NextJS 와 styled-components 연동 테스트 중 입니다.
      </Content>
    </HomeRoot>
  );
}

export default Home;