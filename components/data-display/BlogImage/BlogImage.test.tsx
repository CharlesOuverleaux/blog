import React from "react";
import { render } from "@testing-library/react";
import BlogImage from "./BlogImage";

describe("BlogImage component", () => {
  it("should render an image with an alt text", async () => {
    // given
    const image = {
      src: "/hero.jpeg",
      alt: "Test image",
    };
    // when
    const { findByAltText } = render(<BlogImage image={image} />);
    // then
    const img = await findByAltText("Test image");
    expect(img).toBeVisible();
  });
});
