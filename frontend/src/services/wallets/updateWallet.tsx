import axios from "axios";
import { API_GATEWAY_URL } from "../../constants";
import { WalletType } from "../../pages/SellScreen";

export const UpdateWallet = async (walletId: number, wallet: WalletType, token: string) => {
  try {
    const resolve = await axios.put(
      API_GATEWAY_URL + "/wallets" + "/" + walletId,
      wallet, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
    );
    return resolve;
  } catch (error) {
    console.log("error updating user wallet", error);
    throw error;
  }
};
