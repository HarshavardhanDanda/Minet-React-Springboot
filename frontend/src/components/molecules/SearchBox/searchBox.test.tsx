import React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBox from ".";

describe("to test the search box component ", () => {
  test("should render the searchbox", () => {
    render(<SearchBox />);
    const ele = screen.getByRole("textbox");
    expect(ele).toBeInTheDocument();
  });
  test("should fire an on change event", () => {
    const mockedFun = jest.fn(() => {});
    render(<SearchBox onChange={mockedFun} />);
    const ele = screen.getByRole("textbox");
    expect(ele).toBeInTheDocument();
    fireEvent.change(ele, { target: { value: "hello" } });
    expect(mockedFun).toBeCalled();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
  test("should render with placeholder in searchbox", () => {
    const mockedFun = jest.fn(() => {});
    render(<SearchBox value="" onChange={mockedFun} />);
    const ele = screen.getByRole("textbox");
    expect(ele).toBeInTheDocument();
    fireEvent.change(ele, { target: { value: "hello" } });
    expect(mockedFun).toBeCalled();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
  test("should render with hello as value in searchbox", () => {
    const mockedFun = jest.fn(() => {});
    render(<SearchBox value="hello" onChange={mockedFun} />);
    const ele = screen.getByRole("textbox");
    expect(ele).toBeInTheDocument();
    fireEvent.change(ele, { target: { value: "hi" } });
    expect(mockedFun).toBeCalled();
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
