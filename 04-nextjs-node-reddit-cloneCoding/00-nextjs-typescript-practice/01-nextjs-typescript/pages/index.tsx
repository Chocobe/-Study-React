import { 
  NextPage,
  GetStaticProps,
} from 'next'
import Head from 'next/head'
import Link from "next/link";
import { ReactjsLinkData } from '../utils/reactjsData';

import { getReactjsLinkData } from '../utils/reactjsData';

export const getStaticProps: GetStaticProps = async () => {
  const reactjsLinkData = getReactjsLinkData();

  return {
    props: {
      reactjsLinkData,
    },
  };
}

export type HomeProps = {
  reactjsLinkData: ReactjsLinkData[],
};

const Home: NextPage<HomeProps> = (props) => {
  const { reactjsLinkData } = props;
  
  return (
    <div>
      <Head>
        <title>Nextjs-Typescript</title>
      </Head>

      <nav>
        <ul>
          {reactjsLinkData.map(linkData => {
            const { id, title, author, date } = linkData;

            return (
              <li key={id}>
                <h3>
                  <Link href={`/reactjs/${id}`}>
                    {title}
                  </Link>
                </h3>
                <div>
                  <span>
                    작성자: {author}
                  </span>
                  <span>
                    등록일: {date}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </nav>

      <main>
        <h1>Nextjs-Typescript 연습 01</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Possimus hic omnis, quaerat voluptatem libero illum? Dignissimos, 
          maxime vitae! Id eum voluptatem corrupti quis consectetur earum fugiat 
          delectus unde deleniti quidem non velit amet eveniet consequatur architecto obcaecati, 
          voluptates pariatur. Numquam ratione incidunt eum rem cumque corporis odio quae 
          necessitatibus enim ut repellat assumenda quis, nulla esse magnam, illum unde dolorum quia dicta. 
          Odit aperiam ratione provident fugit numquam! Magni sit possimus, tenetur fuga, labore ab molestias 
          itaque vero eligendi, at necessitatibus eius fugiat et dolor sed dolorem in nobis distinctio 
          suscipit explicabo dolorum asperiores? Veritatis reiciendis libero adipisci quaerat cum.
        </p>
      </main>
    </div>
  );
};

export default Home;
