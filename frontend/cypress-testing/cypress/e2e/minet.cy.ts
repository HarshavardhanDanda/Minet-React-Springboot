/// <reference types="cypress" />
import { Dependencies } from "../robots/minet/basic.cy";
import { LoginInPageEyes, LoginPageHands } from "../robots/minet/LoginPage";
import { TradePageEyes, TradePageHands } from "../robots/minet/TradePage";
import { SellScreenHands } from "../robots/minet/SellScreen";
import {
  DashBoardPageEyes,
  DashBoardPageHands,
} from "../robots/minet/Dashboard";
import { DetailPageHands } from "../robots/minet/DetailPage";
import { TransactionSuccessHands } from "../robots/minet/TransactionSuccessScreen";
import { PurchaseScreenHands } from "../robots/minet/PurchaseScreen";

const dependencies = new Dependencies();
const loginPageEyes = new LoginInPageEyes();
const loginPageHands = new LoginPageHands();
const dashBoardPageEyes = new DashBoardPageEyes();
const dashBoardPageHands = new DashBoardPageHands();
const tradePageEyes = new TradePageEyes();
const tradePageHands = new TradePageHands();
const detailPageHands = new DetailPageHands();
const sellScreenHands = new SellScreenHands();
const transactionSuccessHands = new TransactionSuccessHands();
const purchaseScreenHands = new PurchaseScreenHands();

describe("example to-do app", () => {
  beforeEach(() => {
    dependencies.homeUrl();
  });

  it("Minet Application Flow", () => {
    loginPageEyes.LoginTitle();
    loginPageEyes.EmailTextField();
    loginPageEyes.PasswordTextField();
    dependencies.login();
    loginPageHands.Wait();
    dashBoardPageEyes.AssertDashboardPageTitle();
    dashBoardPageHands.ClickOnDiscoverAsserts();
    dependencies.wait();
    tradePageEyes.AssertTradeTitle();
    tradePageHands.ClickOnstar();
    dependencies.wait();
    tradePageHands.SrollToViewWatchlistTab();
    tradePageHands.ClickOnWatchlist();
    dependencies.wait();
    tradePageHands.ClickOnAllAssets();
    dependencies.wait();
    tradePageHands.ClickOnFirstCard();
    dependencies.wait();
    detailPageHands.ClickOnAddToWatchlistButton();
    dependencies.wait();
    tradePageHands.ClickOnDashBoardButton();
    dependencies.wait();
    dashBoardPageHands.ClickOnFirstWatchlist();
    dependencies.wait();
    detailPageHands.ClickOnWalletTab();
    dependencies.wait();
    detailPageHands.ClickOnSellButton();
    dependencies.wait();
    sellScreenHands.ScrollIntoViewSlider();
    dependencies.wait();
    dependencies.wait();
    sellScreenHands.ChangeValueSlider();
    dependencies.wait();
    sellScreenHands.ClickOnSellNow();
    dependencies.wait();
    transactionSuccessHands.ClickOnGoToUSDCoin();
    dependencies.wait();
    tradePageHands.ClickOnDashBoardButton();
    dependencies.wait();
    dashBoardPageHands.ClickOnFirstWatchlist();
    dependencies.wait();
    detailPageHands.ClickOnWalletTab();
    dependencies.wait();
    detailPageHands.ClickOnBuyButton();
    dependencies.wait();
    purchaseScreenHands.ScrollIntoViewSlider();
    dependencies.wait();
    dependencies.wait();
    purchaseScreenHands.ChangeValueSlider();
    dependencies.wait();
    purchaseScreenHands.ClickOnBuyNow();
    dependencies.wait();
    transactionSuccessHands.ClickOnGoToUSDCoin();
    dependencies.wait();
    tradePageHands.ClickOnDashBoardButton();
    dependencies.wait();
    dashBoardPageHands.ClickOnFirstWatchlist();
    dependencies.wait();
    detailPageHands.ClickOnWalletTab();
    dependencies.wait();
    dashBoardPageHands.ClickOnLogoutButton();
    dependencies.wait();
  });

  it("Minet Authentication Pages Flow", () => {
    dependencies.falseLogIn();
    dependencies.wait();
    cy.reload();
    dependencies.login();
    dependencies.wait();
    dashBoardPageHands.ClickOnLogoutButton();
    dependencies.wait();
    loginPageHands.ClickOnForgetPassword();
    loginPageHands.EnterEmail();
    loginPageHands.SendResetLink();
    loginPageHands.EnterResetCode();
    loginPageHands.EnterResetPasswordButton();
    loginPageHands.EnterPassword();
    loginPageHands.ReEnterPassword();
    dependencies.wait();
    loginPageHands.ClickResetPasswordButton();
    dependencies.wait();
    loginPageHands.ClickGoToLoginButton();

    dependencies.wait();
    loginPageHands.ClickOnSignUp();
    dependencies.falseSignIn();
    dependencies.wait();
    cy.reload();
  });
});
