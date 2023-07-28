import { combineReducers, configureStore } from "@reduxjs/toolkit";
import User from "./user";
import JWTToken from "../../store/JWT";

const reduserCombined = combineReducers({
  user: User.reducer,
  token: JWTToken.reducer
});

const mockStore = configureStore({
  reducer: reduserCombined,
});

export default mockStore;
