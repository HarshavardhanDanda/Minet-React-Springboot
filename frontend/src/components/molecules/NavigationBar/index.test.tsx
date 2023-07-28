import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SideNavComponent from ".";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import mockStore from "../../../mocks/mockStore/store";

describe("SideNavComponent", () => {
  test("renders the SideNavComponent with active dashboard icon", () => {
    render(
      <BrowserRouter>
        <Provider store={mockStore}>
          <SideNavComponent showCheckIcon={false} />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByTestId("Trade")).toBeInTheDocument();
    const icons = screen.getAllByRole("img");
    fireEvent.click(icons[1]);
  });

  it("renders the SideNavComponent with inactive dashboard icon", () => {
    render(
      <BrowserRouter>
        <Provider store={mockStore}>
          <SideNavComponent showCheckIcon={true} />
        </Provider>
      </BrowserRouter>
    );
    expect(screen.getByTestId("Trade")).toBeInTheDocument();
    const icons = screen.getAllByRole("img");
    fireEvent.click(icons[icons.length - 1]);
  });
});
