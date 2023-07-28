import { combineReducers, configureStore } from "@reduxjs/toolkit";
import User from "./user";
import storage from "redux-persist/lib/storage";
import { persistStore } from "redux-persist";
import persistReducer from "redux-persist/es/persistReducer";
import JWTToken from "./JWT";

export const reduserCombined = combineReducers({
  user: User.reducer,
  token: JWTToken.reducer
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reduserCombined);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

export default store;
