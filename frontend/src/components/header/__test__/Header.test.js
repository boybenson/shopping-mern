import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("header", () => {
  it("should have the logo with title kfc fast food", () => {
    render(<Header />);
    let logoText = screen.getByText(/kfc fast food/i);
    expect(logoText).toBeInTheDocument();
    expect(logoText).toBeVisible();
  });
});
