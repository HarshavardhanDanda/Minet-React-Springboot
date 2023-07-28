import { createSlice } from "@reduxjs/toolkit";

const MockUser = createSlice({
  name: "user",
  initialState: {
    user: {
      id: 1,
      emailId: "JhonDoe1996@gmail.com",
    },
  },
  reducers: {
    loginUser(state, payload) {
      return { ...state, user: payload.payload };
    },
    logoutUser(state) {
      return {
        ...state,
        user: {
          id: 1,
          emailId: "JhonDoe1996@gmail.com",
        },
      };
    },
  },
});

export default MockUser;

export const userActions = MockUser.actions;
