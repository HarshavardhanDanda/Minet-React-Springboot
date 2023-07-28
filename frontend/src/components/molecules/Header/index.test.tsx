import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./index";
import "@testing-library/jest-dom/extend-expect";

describe("Header", () => {
  test("renders the page name correctly", () => {
    const pageName = "Home";
    render(<Header pageName={pageName} displayButtons={false} />);
    const pageNameElement = screen.getByText(pageName);
    expect(pageNameElement).toBeInTheDocument();
  });

  test("should renders the button when displayButtons is true", () => {
    const displayButtons = true;
    render(<Header displayButtons={displayButtons} pageName={""} />);
    const button = screen.getByRole("button", { name: /sell/i });
    expect(button).toBeInTheDocument();
  });
});
