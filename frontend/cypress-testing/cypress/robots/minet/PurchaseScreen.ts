import { BaseEyes, BaseHands } from "../BaseRobots";
import { RobotEyes, RobotHands } from "./basic.cy";

const baseRobotHands = new RobotHands();

export class PurchaseScreenHands extends BaseHands {
  ScrollIntoViewSlider() {
    baseRobotHands.scrollIntoViewSlider();
  }

  ChangeValueSlider() {
    baseRobotHands.changeValueSlider();
  }

  ClickOnBuyNow() {
    baseRobotHands.clickOnBuyNow();
  }
}
