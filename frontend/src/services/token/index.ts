import axios from "axios";
import { API_GATEWAY_URL } from "../../constants";

export const GetJWTToken = async (email: string,
    password: string) => {
  try {
    const resolve = await axios.post(
      API_GATEWAY_URL + "/users/login",{
        email: email,
        password: password,
      }
    );
    return resolve;
  } catch (error) {
    console.log("error getting jwt token", error);
    throw error;
  }
};