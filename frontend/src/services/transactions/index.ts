import axios from "axios";
import { API_GATEWAY_URL } from "../../constants";

export const GetAllTransactionsByUserId = async (userId: number, token: string) => {
  try {
    const response = await axios.get(
      API_GATEWAY_URL + "/portfolio/transactions?userId=" + userId, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
    );
    return response;
  } catch (error) {
    console.log("error geting transactions data", error);
    throw error;
  }
};

export const GetTransactionsByUserAndCoinIds = async (coinId: number, userId: number, token: string) => {
  try {
    const response = await axios.get(
      API_GATEWAY_URL +
        "/portfolio/transactions?cryptoCurrencyId=" +
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

    return response;
  } catch (error) {
    console.log("error geting transactions data", error);
    throw error;
  }
};

export default GetAllTransactionsByUserId;
