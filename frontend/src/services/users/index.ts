import axios from "axios";
import { API_GATEWAY_URL } from "../../constants";

export const getUsers = async (token: string): Promise<any> => {
  try {
    const response = await axios.get(API_GATEWAY_URL + "/users", {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error posting JSON data:", error);
    throw error;
  }
};

export const createUser = async (
  name: string,
  email: string,
  password: string,
  token: string
): Promise<any> => {
  try {
    const response = await axios.post(API_GATEWAY_URL + "/users/save", {
      fullName: name,
      emailId: email,
      password: password,
    },{
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error posting JSON data:", error);
    throw error;
  }
};

export const resetPasswordService = async (
  userId: number,
  newPassword: string,
  token: string
): Promise<any> => {
  try {
    const response = await axios.patch(
      API_GATEWAY_URL + "/users?id=" + userId,
      {
        password: newPassword,
      },{
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error resetting password:", error);
    throw error;
  }
};

export const getUserByEmailId = async (emailId: string, token: string) => {
  try {
    const response = await axios.get(
      API_GATEWAY_URL + "/users?emailId=" + emailId,{
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error posting JSON data:", error);
    throw error;
  }
};
