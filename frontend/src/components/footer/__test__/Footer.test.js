import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("header", () => {
  it("should display my name", () => {
    render(<Footer />);
    let myName = screen.getByText("Benson");
    expect(myName).toBeInTheDocument();
    expect(myName).toBeVisible();
  });

  it("should display current year", () => {
    render(<Footer />);
    let year = screen.getByText(new Date().getFullYear());
    expect(year).toBeInTheDocument();
    expect(year).toBeVisible();
  });
});
