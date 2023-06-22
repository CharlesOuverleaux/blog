import { render, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  it("should render a button with a cta Text and perform an action", async () => {
    // given
    const mockOnClick = jest.fn();
    const ctaText = "Click me";
    const { getByText } = render(
      <Button ctaText={ctaText} onClick={mockOnClick} />
    );
    // when
    const buttonElement = getByText(ctaText);
    // then
    expect(buttonElement).toBeVisible();
    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
