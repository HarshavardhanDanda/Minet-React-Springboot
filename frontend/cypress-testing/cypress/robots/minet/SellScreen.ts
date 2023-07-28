import { BaseHands } from "../BaseRobots";
import { RobotHands } from "./basic.cy";

const baseRobotHands = new RobotHands();

export class SellScreenHands extends BaseHands {
  ScrollIntoViewSlider() {
    baseRobotHands.scrollIntoViewSlider();
  }

  ChangeValueSlider() {
    baseRobotHands.changeValueSlider();
  }

  ClickOnSellNow() {
    baseRobotHands.clickOnSellNow();
  }
}
