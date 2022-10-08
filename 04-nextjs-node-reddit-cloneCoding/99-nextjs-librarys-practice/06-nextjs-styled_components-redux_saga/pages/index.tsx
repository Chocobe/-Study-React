import React from "react";
import styled from "styled-components";

const HomeRoot = styled.div`
  padding: 20px;

  color: #fff;
  font-size: 20px;
  font-weight: 700;
  text-align: end;

  background-color: ${({ theme }) => theme.colors.customGray03};
`

function Home() {
  return (
    <HomeRoot>
      Choose news you want
    </HomeRoot>
  );
}

export default Home;