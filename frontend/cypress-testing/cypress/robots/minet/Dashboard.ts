import { BaseEyes, BaseHands } from "../BaseRobots";
import { RobotEyes, RobotHands } from "./basic.cy";

const baseRobotEyes = new RobotEyes();
const baseRobotHands = new RobotHands();

export class DashBoardPageEyes extends BaseEyes {
  AssertDashboardPageTitle() {
    baseRobotEyes.seesDomContainText("h6", "Dashboard");
  }
}
export class DashBoardPageHands extends BaseHands {
  ClickOnDiscoverAsserts() {
    baseRobotHands.clickOnText("Discover assets");
  }
  ClickOnFirstWatchlist() {
    baseRobotHands.clickOnFirstWatchlist();
  }
  ClickOnLogoutButton() {
    baseRobotHands.clickOnLogoutButton();
  }
}
