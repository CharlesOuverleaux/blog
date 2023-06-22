import React from "react";
import { render } from "@testing-library/react";
import Content from "./Content";

describe("Content component", () => {
  it("should render a paragraph with content", async () => {
    // given
    const content = "This is a test content";
    // when
    const { findByText } = render(<Content content={content} />);
    // then
    const contentComponent = await findByText("This is a test content");
    expect(contentComponent).toBeVisible();
  });
});
