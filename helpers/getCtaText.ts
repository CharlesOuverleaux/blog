import blogData from "../data/blogData.json";

/**
 * Get the Call-to-Action (CTA) text based on the sign-up status and variation.
 *
 * @param {boolean} isSignedUp - The sign-up status.
 * @param {string} variation - The variation identifier.
 * @returns {string} The CTA text.
 */
export const getCtaText = (isSignedUp, variation) => {
  const { testContent } = blogData;
  const ctaText = isSignedUp
    ? "Thank you for signing up"
    : testContent[variation as string] || testContent["default"];

  return ctaText;
};
