import React from "react";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import TypographyWithIcon from ".";
import BlueIcon from "../../../../public/assets/Images/BlueEdit.svg";

describe("test for typography with icon component", () => {
  test("should render the text and the icon", () => {
    render(<TypographyWithIcon iconSrc={BlueIcon} label="View Watchlist" />);
    const text = screen.getByText(/view watchlist/i);
    expect(text).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
  test("should render the text and the icon with direction as row reverse and specfied color", () => {
    render(
      <TypographyWithIcon
        iconSrc={BlueIcon}
        label="View Watchlist"
        direction="row-reverse"
        iconHeight="10.5px"
        iconWidth="10.5px"
        typogerphyVariant="body1"
        sxStack={{ width: "140px", height: "16px", cursor: "default" }}
        spacing={1.5}
      />
    );
    const text = screen.getByText(/view watchlist/i);
    expect(text).toBeInTheDocument();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
