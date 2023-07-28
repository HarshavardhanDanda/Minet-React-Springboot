import axios from "axios";
import { API_GATEWAY_URL } from "../../constants";

export const GetAllCrypto = async (token: string) => {
  try {
    const resolve = await axios.get(
      API_GATEWAY_URL + "/cryptocurrency", {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
    );
    return resolve;
  } catch (error) {
    console.log("error getting cryptoCurrency data", error);
    throw error;
  }
};

export const GetCryptoDataById = async (id: number, token: string) => {
  try {
    const resolve = await axios.get(
      API_GATEWAY_URL + "/cryptocurrency/" + id, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
    );
    return resolve;
  } catch (error) {
    console.log("error getting cryptoCurrency data", error);
    throw error;
  }
};

export default GetCryptoDataById;
