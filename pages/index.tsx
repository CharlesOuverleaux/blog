import { NextPage } from "next";
import Head from "next/head";
import Title from "../components/data-display/Title/Title";
import BlogImage from "../components/data-display/BlogImage/BlogImage";
import Content from "../components/data-display/Content/Content";
import Button from "../components/input-and-actions/Button/Button";

const title = "Check out the Blinkist app";
const image = {
  src: "/hero.jpeg",
  alt: "Blinkist app",
};

const content =
  "Meet the app that revolutionized reading. Meet the app that has 18 million users. Thanks a lot for reading the article!";

const ctaText = "Sign up";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Blinkist Blog</title>
        <meta name="description" content="Blinkist blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Title title={title} />
        <BlogImage image={image} />
        <Content content={content} />
        <Button ctaText="Sign Up" onClick={() => alert("Clicked")} />
      </main>
    </div>
  );
};

export default Home;
