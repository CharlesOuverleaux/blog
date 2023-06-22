import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Blinkist Blog</title>
        <meta name="description" content="Blinkist blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-7xl">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
