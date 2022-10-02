import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const Title = styled.h1`
  margin-top: 20px;
  color: #fff;
  text-align: center;
  font-size: 24px;
`;

function Home() {
  return (
    <div>
      <Head>
        <title>
          Hello Next API with redux-saga
        </title>
      </Head>

      <Title>
        Hello Next API with redux-saga
      </Title>
    </div>
  );
}

export default Home;