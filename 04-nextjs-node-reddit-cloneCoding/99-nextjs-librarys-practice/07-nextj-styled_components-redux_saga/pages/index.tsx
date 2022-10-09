import Head from "next/head";
import HelloWorld from "@/components/HelloWorld";

function Home() {
  return (
    <div>
      <Head>
        <title>My NextJS Project</title>
      </Head>

      <h1>
        <HelloWorld />
      </h1>
    </div>
  );
}

export default Home;