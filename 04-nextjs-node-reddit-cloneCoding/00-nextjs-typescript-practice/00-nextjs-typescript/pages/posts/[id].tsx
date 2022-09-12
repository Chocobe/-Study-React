import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { getAllPostIds } from "../../utils/posts";
import { getPostData } from "../../utils/posts";

export type PostData = {
  id: string;
  title: string;
  date: string;
  htmlContent: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPostIds = getAllPostIds();
  const paths = allPostIds.map(id => ({
    params: { id },
  }));

  console.log("paths: ", paths);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ postData: PostData }> = async ({ params }) => {
  const postData = await getPostData(params!.id as string);

  return {
    props: {
      postData,
    },
  };
};

const Posts: NextPage<{ postData: PostData }> = (props) => {
  console.log("props: ", props);
  const {
    title,
    date,
    htmlContent,
  } = props.postData;

  return (
    <div>
      <div>
        <h1>
          {title}
        </h1>
        <small>
          {date}
        </small>
        <div style={{
          paddingLeft: "20px",
          color: "#03a9f4",
          fontSize: "20px",
        }}>
          <Link href="/">[Home]</Link>
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default Posts;