import styled from "styled-components";

const Title = styled.h1`
  font-size: 30px;
  color: #ff1493;
`

function HelloWorld() {
  return (
    <div>
      <Title>
        Hello World1
      </Title>
      {/* <h1>Hello World</h1> */}
    </div>
  );
}

export default HelloWorld;