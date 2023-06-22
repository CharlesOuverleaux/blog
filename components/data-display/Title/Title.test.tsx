import { render } from "@testing-library/react";
import Title from "./Title";

describe("Title", () => {
  it("should render a title with a headline", async () => {
    // given
    const { findByText } = render(<Title title="Test title" />);
    //  When
    const title = await findByText("Test title");
    // then
    expect(title).toBeVisible();
  });
});
