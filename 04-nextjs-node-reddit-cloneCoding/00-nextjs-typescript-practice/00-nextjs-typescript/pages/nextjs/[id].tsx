import { 
  NextPage,
  GetStaticProps,
  GetStaticPaths,
} from "next";
import Head from "next/head";
import { getAllNextjsIds } from "../../utils/nextjs";
import { getNextjsData } from "../../utils/nextjs";

export const getStaticPaths: GetStaticPaths = async () => {
  const allNextjsIds = getAllNextjsIds();
  const paths = allNextjsIds.map(id => ({
    params: { id },
  }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const nextjsData = await getNextjsData(params!.id as string);

  return {
    props: {
      nextjsData,
    },
  };
};

export type NextjsProps = {
  id: string;
  title: string;
  date: string;
  htmlContent: string;
};

const NextJs: NextPage<{
  nextjsData: {
    id: string;
    title: string;
    date: string;
    htmlContent: string;
  }
}> = (props) => {
  const { id, title, date, htmlContent } = props.nextjsData;

  console.log("props: ", props);

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <div>{title}</div>
      <div>{date}</div>
      <div dangerouslySetInnerHTML={{
        __html: htmlContent,
      }} />
    </div>
  )
}

export default NextJs;