import { NextPage } from "next";
import Head from "next/head";
import Title from "../components/data-display/Title/Title";
import BlogImage from "../components/data-display/BlogImage/BlogImage";
import Content from "../components/data-display/Content/Content";
import Button from "../components/input-and-actions/Button/Button";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Blinkist Blog</title>
        <meta name="description" content="Blinkist blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Title />
        <BlogImage />
        <Content />
        <Button />
      </main>
    </div>
  );
};

export default Home;
