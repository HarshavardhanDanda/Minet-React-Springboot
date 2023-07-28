import axios from "axios";
import { TransactionType } from "../../pages/SellScreen";
import { API_GATEWAY_URL } from "../../constants";

export const CreateTransaction = async (transaction: TransactionType, token: string) => {
  try {
    const resolve = await axios.post(
      API_GATEWAY_URL + "/portfolio/transactions",
      transaction, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
    );
    return resolve.data;
  } catch (error) {
    console.log("error posting transaction data", error);
    throw error;
  }
};
