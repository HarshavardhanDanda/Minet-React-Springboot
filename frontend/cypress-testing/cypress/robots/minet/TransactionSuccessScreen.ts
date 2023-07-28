import { BaseHands } from "../BaseRobots";
import { RobotHands } from "./basic.cy";

const baseRobotHands = new RobotHands();

export class TransactionSuccessHands extends BaseHands {
  ClickOnGoToUSDCoin() {
    baseRobotHands.clickOnGoToUSDCoin();
  }
}
