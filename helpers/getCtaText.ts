import blogData from "../data/blogData.json";

export const getCtaText = (isSignedUp, variation) => {
  const { testContent } = blogData;
  const ctaText = isSignedUp
    ? "Thank you for signing up"
    : testContent[variation as string] || testContent["default"];

  return ctaText;
};
