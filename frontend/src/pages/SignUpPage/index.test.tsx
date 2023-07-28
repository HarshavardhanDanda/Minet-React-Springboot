import React from "react";
import { render } from "@testing-library/react";
import SignUpPage from "./index";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import mockStore from "../../mocks/mockStore/store";
import axios from "axios";
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;
describe("SignUpPage", () => {
  it("renders without errors", () => {
    mockedAxios.get.mockResolvedValue({ data: [] });
    mockedAxios.post.mockResolvedValue({});
    render(
      <BrowserRouter>
        <Provider store={mockStore}>
          <SignUpPage />
        </Provider>
      </BrowserRouter>
    );
  });
});
