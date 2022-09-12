import React from "react";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import postStyles from "../../styles/Post.module.css";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params!.id as string);
  
  return {
    props: {
      postData,
    },
  };
}

export type PostProps = {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
};

function Post({ postData }: PostProps) {
  return (
    <div className={postStyles.container}>
      <Head>
        <title>
          {postData.title}
        </title>
      </Head>

      <article>
        <h1 className={postStyles.headingXl}>
          {postData.title}
        </h1>
        <div>
          {postData.date}
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </div>
  );
};

export default Post;