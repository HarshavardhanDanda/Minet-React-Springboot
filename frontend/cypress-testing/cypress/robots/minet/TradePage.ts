import { BaseEyes, BaseHands } from "../BaseRobots";
import { RobotEyes, RobotHands } from "./basic.cy";

const baseRobotEyes = new RobotEyes();
const baseRobotHands = new RobotHands();

export class TradePageEyes extends BaseEyes {
  AssertTradeTitle() {
    baseRobotEyes.seesDomContainText("h6", "Trade");
  }
}
export class TradePageHands extends BaseHands {
  ClickOnstar() {
    baseRobotHands.clickOnStar();
  }
  SrollToViewWatchlistTab() {
    baseRobotHands.scrollToView();
  }

  ClickOnFirstCard() {
    baseRobotHands.clickOnCard();
  }

  ClickOnDashBoardButton() {
    baseRobotHands.clickOnDashboard();
  }

  ClickOnWatchlist() {
    baseRobotHands.clickOnText("Watchlist");
  }
  ClickOnstarToUnSelect() {
    baseRobotHands.clickOnStar();
  }
  ClickOnAllAssets() {
    baseRobotHands.clickOnText("All Assets");
  }
  SearchforCurrency() {
    baseRobotHands.searchByPlaceholderText("Search all assets", "Ethereum");
  }
  ClearSearchCurrency() {
    baseRobotHands.clearSearchByText("Ethereum");
  }
  ClickOnBitcoin() {
    baseRobotHands.clickOnTradeTab("Bitcoin");
  }
}
