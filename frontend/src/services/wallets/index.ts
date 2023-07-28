import axios from "axios";
import { API_GATEWAY_URL } from "../../constants";

export const GetWalletsByUserId = async (userId: number, token: string) => {
  try {
    const resolve = await axios.get(
      API_GATEWAY_URL + "/wallets?userId=" + userId, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
    );
    return resolve;
  } catch (error) {
    console.log("error getting user wallet", error);
    throw error;
  }
};

export const CreateWallet = async (wallet: any, token: string) => {
  try {
    const resolve = await axios.post(API_GATEWAY_URL + "/wallets", wallet, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    return resolve;
  } catch (error) {
    console.log("error getting user wallet", error);
    throw error;
  }
};

export const GetWalletByUserAndCoinId = async (
  coinId: number,
  userId: number,
  token: string
) => {
  try {
    const resolve = await axios.get(
      API_GATEWAY_URL +
        "/wallets?cryptoCurrencyId=" +
        coinId +
        "&userId=" +
        userId, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        }
    );
    return resolve;
  } catch (error) {
    console.log("error getting user wallet", error);
    throw error;
  }
};

export default GetWalletsByUserId;
