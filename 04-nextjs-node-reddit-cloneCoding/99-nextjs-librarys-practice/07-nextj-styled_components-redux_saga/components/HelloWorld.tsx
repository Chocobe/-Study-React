import styled from "styled-components";

const Title = styled.h1`
  color: #ff1493;
  font-size: 20px;
  font-weight: 900;
`;

function HelloWorld() {
  return (
    <div>
      <Title>Hello World Component</Title>
      <p>Nextjs - styled-components SSR 프로젝트 생성 연습중 입니다.</p>
    </div>
  );
}

export default HelloWorld;