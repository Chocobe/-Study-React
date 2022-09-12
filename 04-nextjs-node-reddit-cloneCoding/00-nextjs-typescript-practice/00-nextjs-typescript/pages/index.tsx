import { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { getSortedPostData } from "../utils/posts";
import { getSortedNextjsData } from "../utils/nextjs";

export type PostData = {
  id: string;
  title: string;
  date: string;
};

export type NextjsData = {
  id: string;
  title: string;
  date: string;
};

export type HomeProps = {
  allPostData: PostData[];
  allNextjsData: NextjsData[];
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  // 포스팅 데이터 조회
  const allPostData: PostData[] = getSortedPostData();
  const allNextjsData = getSortedNextjsData();

  return {
    props: {
      allPostData,
      allNextjsData,
    },
  };
};

const Home: NextPage<HomeProps> = ({
  allPostData,
  allNextjsData,
}) => {
  return (
    <div>
      <Head>
        <title>Hello</title>
      </Head>
      <div>
        <h2>Posts</h2>
        <ul>
          {allPostData.map(postData => {
            const { id, title, date } = postData;

            return (
              <li key={id}>
                <h3>
                  <Link href={`/posts/${id}`}>
                    {title}
                  </Link>
                  <small style={{
                    paddingLeft: "20px",
                    color: "#999",
                  }}>{date}</small>
                </h3>
              </li>
            )
          })}
        </ul>
      </div>
      <div>
        <h2>Nextjs</h2>
        <ul>
          {allNextjsData.map(nextjsData => {
            const { id, title, date } = nextjsData;

            return (
              <li key={id}>
                <h3>
                  <Link href={`/nextjs/${id}`}>
                    {title}
                  </Link>
                  <small style={{
                    paddingLeft: "20px",
                    color: "#999",
                  }}>{date}</small>
                </h3>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;