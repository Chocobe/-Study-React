import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { getSortedPostData } from '../lib/posts'
import homeStyles from '../styles/Home.module.css'

export type HomeProps = {
  allPostData: {
    id: string;
    title: string;
    date: string;
  }[];
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const allPostData = getSortedPostData();
  return {
    props: {
      allPostData,
    },
  };
};

const Home: NextPage<HomeProps> = ({ allPostData }: {
  allPostData: {
    date: string;
    title: string;
    id: string;
  }[];
}) => {
  return (
    <div className={homeStyles.container}>
      <Head>
        <title>Chocobe</title>
      </Head>

      <section className={homeStyles.headingMd}>
        <p>
          [Chocobe Introduction]
        </p>
        <p>
          (This is a Website)
        </p>
      </section>

      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}>Blog</h2>
        <ul className={homeStyles.list}>
          {allPostData.map(({ id, title, date }) => (
            <li className={homeStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={homeStyles.lightText}>
                {date}
              </small>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Home