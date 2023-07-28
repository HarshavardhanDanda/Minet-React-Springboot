import { createSlice } from "@reduxjs/toolkit";

const JWTToken = createSlice({
    name: "token",
    initialState: { token: null },
    reducers: {
      logoutToken(state) {
        return { ...state, token: null };
      },
      saveToken(state, payload){
        return {...state, token: payload.payload}
      }
    },
  });

  
export default JWTToken;

export const tokenActions = JWTToken.actions;