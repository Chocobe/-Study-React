import { 
  NextPage,
  GetStaticPaths,
  GetStaticProps,
} from "next";
import { 
  getReactjsLinkData,
  getReactjsData,
} from "../../utils/reactjsData";

export const getStaticPaths: GetStaticPaths = async () => {
  const reactjsLinkData = getReactjsLinkData();
  const paths = reactjsLinkData.map(({ id }) => {
    return {
      params: {
        id,
      },
    };
  });
  
  console.log("paths: ", paths);

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params!.id as string;
  
  const props = await getReactjsData(id);
  
  return {
    props,
  };
};

export type ReactjsProps = {
  id: string;
  title: string;
  date: string;
  author: string;
  htmlContent: string;
};

const Reactjs: NextPage<ReactjsProps> = (props) => {
  const {
    title,
    date,
    author,
    htmlContent,
  } = props;
  
  return (
    <div>
      <header>
        <h1>
          {title}
        </h1>
        <div>
          <span>{author}</span>
          <small>{date}</small>
        </div>
      </header>

      <main>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </main>
    </div>
  );
};

export default Reactjs;