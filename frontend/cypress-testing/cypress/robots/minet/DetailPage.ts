import { BaseEyes, BaseHands } from "../BaseRobots";
import { RobotEyes, RobotHands } from "./basic.cy";

const baseRobotEyes = new RobotEyes();
const baseRobotHands = new RobotHands();

export class DetailPageEyes extends BaseEyes {
  AssertDashboardPageTitle() {
    baseRobotEyes.seesDomContainText("h6", "Dashboard");
  }
}
export class DetailPageHands extends BaseHands {
  ClickOnAddToWatchlistButton() {
    baseRobotHands.clickOnAddToWatchlist();
  }

  ClickOnSellButton() {
    baseRobotHands.clickOnSellButton();
  }

  ClickOnBuyButton() {
    baseRobotHands.clickOnBuyButton();
  }
  ClickOnWalletTab() {
    baseRobotHands.clickOnWalletTab();
  }
}
