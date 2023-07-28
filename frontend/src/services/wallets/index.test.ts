import axiosMock from "../axiosMock"; // Import the axios mock

// Mock axios to use the axiosMock
jest.mock("axios", () => axiosMock);

// Import the functions you want to test
import {
  GetWalletsByUserId,
  CreateWallet,
  GetWalletByUserAndCoinId,
} from "."; // Update the path accordingly

describe("Wallet API Functions", () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mock calls after each test
  });

  it("should call GetWalletsByUserId and return data", async () => {
    // Mock data
    const userId = 1;
    const token = "test-token";
    const mockResponseData = { data: "mockData" };
    axiosMock.get.mockResolvedValueOnce(mockResponseData);

    // Call the function
    const result = await GetWalletsByUserId(userId, token);

    // Check if axios.get was called with the correct arguments
    expect(axiosMock.get).toHaveBeenCalledWith(
      expect.stringContaining(`/wallets?userId=${userId}`),
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // Check if the function returned the correct data
    expect(result).toEqual(mockResponseData);
  });

  it("should call CreateWallet and return data", async () => {
    // Mock data
    const wallet = { name: "Test Wallet" };
    const token = "test-token";
    const mockResponseData = { data: "mockData" };
    axiosMock.post.mockResolvedValueOnce(mockResponseData);

    // Call the function
    const result = await CreateWallet(wallet, token);

    // Check if axios.post was called with the correct arguments
    expect(axiosMock.post).toHaveBeenCalledWith(
      expect.stringContaining("/wallets"),
      wallet,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // Check if the function returned the correct data
    expect(result).toEqual(mockResponseData);
  });

  it("should call GetWalletByUserAndCoinId and return data", async () => {
    // Mock data
    const coinId = 1;
    const userId = 1;
    const token = "test-token";
    const mockResponseData = { data: "mockData" };
    axiosMock.get.mockResolvedValueOnce(mockResponseData);

    // Call the function
    const result = await GetWalletByUserAndCoinId(coinId, userId, token);

    // Check if axios.get was called with the correct arguments
    expect(axiosMock.get).toHaveBeenCalledWith(
      expect.stringContaining(
        `/wallets?cryptoCurrencyId=${coinId}&userId=${userId}`
      ),
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // Check if the function returned the correct data
    expect(result).toEqual(mockResponseData);
  });
});
