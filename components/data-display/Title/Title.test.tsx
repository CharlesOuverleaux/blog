import { render } from "@testing-library/react";
import Title from "./Title";

describe("Title component", () => {
  it("should render with a headline", async () => {
    // given
    const { findByText } = render(<Title title="Test title" />);
    // when
    const title = await findByText("Test title");
    // then
    expect(title).toBeVisible();
  });
});
