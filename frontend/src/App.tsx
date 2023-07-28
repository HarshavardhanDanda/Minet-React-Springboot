import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import PageNotFound from "./pages/NotFound";
import SignUpPage from "./pages/SignUpPage";
import ForgotPasswordPage from "./pages/ForgetPassword";
import ResetCodePage from "./pages/ResetCodePage";
import HomePage from "./pages/HomePage";
import TradeScreen from "./pages/TradeScreen";
import DetailsPage from "./pages/DetailsPage";
import WalletPage from "./pages/WalletPage";
import SellScreenPage from "./pages/SellScreen";
import PurchaseScreenPage from "./pages/PurchaseScreen";
import PaidScreen from "./pages/PaidScreen";
import Authenticate from "./utils/Authenticate";
import ResetPasswordPage from "./pages/ResetPasswordPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="signup" element={<SignUpPage />} />
      <Route path="forgotPassword" element={<ForgotPasswordPage />} />
      <Route path="resetcode/:id" element={<ResetCodePage />} />
      <Route
        path="dashboard"
        element={
          <Authenticate>
            <HomePage />
          </Authenticate>
        }
      />
      <Route
        path="trade/:screen"
        element={
          <Authenticate>
            <TradeScreen />
          </Authenticate>
        }
      />
      <Route
        path="details/:screen/:coinId"
        element={
          <Authenticate>
            <DetailsPage />
          </Authenticate>
        }
      />
      <Route
        path="wallet"
        element={
          <Authenticate>
            <WalletPage />
          </Authenticate>
        }
      />
      <Route
        path="sell/:coinId"
        element={
          <Authenticate>
            <SellScreenPage />
          </Authenticate>
        }
      />
      <Route
        path="purchase/:coinId"
        element={
          <Authenticate>
            <PurchaseScreenPage />
          </Authenticate>
        }
      />
      <Route
        path="payment/:type/:price"
        element={
          <Authenticate>
            <PaidScreen />
          </Authenticate>
        }
      />
      <Route path="resetPassword/:id" element={<ResetPasswordPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
