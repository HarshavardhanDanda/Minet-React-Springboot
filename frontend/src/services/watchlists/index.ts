import axios from "axios";
import { API_GATEWAY_URL } from "../../constants";

export const GetWatchLists = async (userId: number, token: string) => {
  const resolve = await axios.get(
    API_GATEWAY_URL + `/portfolio/watchLists?userId=${userId}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }
  );
  return resolve;
};

export const DeleteWatchlistById = async (watchlistId: number, token: string) => {
  return await axios.delete(
    API_GATEWAY_URL + "/portfolio/watchLists/" + watchlistId, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }
  );
};

export const PostWatchlist = async (watchlistData: any, token: string) => {
  return await axios.post(API_GATEWAY_URL + "/portfolio/watchLists", watchlistData, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  });
};

export default GetWatchLists;
