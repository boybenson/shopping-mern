import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("header", () => {
  it("should have the logo with title kfc fast food", () => {
    render(<Header />);
    let logoText = screen.getByText(/kfc fast food/i);
    expect(logoText).toBeInTheDocument();
    expect(logoText).toBeVisible();
  });

  it("should display a signup link", () => {
    render(<Header />);
    let signupLink = screen.getByText("signup");
    expect(signupLink).toBeInTheDocument();
    expect(signupLink).toBeVisible();
  });

  it("should display signin link", () => {
    render(<Header />);
    let signinLink = screen.getByText("signin");
    expect(signinLink).toBeInTheDocument();
    expect(signinLink).toBeVisible();
  });
});
