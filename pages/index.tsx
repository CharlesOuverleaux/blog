import { NextPage } from "next";
import Head from "next/head";
import Title from "../components/data-display/Title/Title";
import BlogImage from "../components/data-display/BlogImage/BlogImage";
import Content from "../components/data-display/Content/Content";
import Button from "../components/input-and-actions/Button/Button";
import { trackEvent, trackPageview } from "../helpers/analytics-api";
import { useCookies } from "react-cookie";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const title = "Check out the Blinkist app";
const image = {
  src: "/hero.jpeg",
  alt: "Blinkist app",
};

const content =
  "Meet the app that revolutionized reading. Meet the app that has 18 million users. Thanks a lot for reading the article!";

const Home: NextPage = () => {
  const router = useRouter();
  const { variation } = router.query;
  const [isTrackingDone, setIsTrackingDone] = useState(false);
  const [cookie, setCookie] = useCookies(["isSignedUp", "ABTest"]);
  const [isSignedUp, setIsSignedUp] = useState(false);

  useEffect(() => {
    if (!isTrackingDone && variation) {
      if (!cookie["isSignedUp"]) {
        setCookie("isSignedUp", false);
      }

      if (!cookie["ABTest"]) {
        setCookie("ABTest", variation);
      }

      setIsSignedUp(cookie["isSignedUp"] === "true");

      trackPageview(
        JSON.stringify({
          page: "/",
          variation: variation,
        })
      );
      setIsTrackingDone(true);
    }
  }, [variation, isTrackingDone]);

  const signUp = () => {
    setCookie("isSignedUp", true);
    setIsSignedUp(true);
    trackEvent(
      JSON.stringify({
        page: "/",
        variation: variation,
        event: "sign-up",
      })
    );
  };

  const testContent = {
    "variation-A": "Sign up now",
    "variation-B": "Sign up for free",
    default: "Sign up",
  };

  const ctaText = isSignedUp
    ? "Thank you for signing up"
    : testContent[variation as string] || testContent["default"];

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
        <Button ctaText={ctaText} onClick={signUp} disabled={isSignedUp} />
      </main>
    </div>
  );
};

export default Home;
