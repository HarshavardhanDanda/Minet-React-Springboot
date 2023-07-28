import { BaseHands, BaseEyes } from "../BaseRobots";
import { RobotHands, RobotEyes } from "./basic.cy";

const baseRobotHands = new RobotHands();
const baseRobotEyes = new RobotEyes();

export class LoginPageHands extends BaseHands {
  ClickOnSignUp() {
    baseRobotHands.clickOnText("Signup");
  }
  ClickOnLogin() {
    baseRobotHands.clickOnText("Login");
  }
  ClickOnForgetPassword() {
    baseRobotHands.clickOnText("Forgot Password");
  }
  EnterEmail() {
    baseRobotHands.enterEmail();
  }
  SendResetLink() {
    baseRobotHands.sendResetLink();
  }
  EnterResetCode() {
    baseRobotHands.enterResetCode();
  }
  EnterResetPasswordButton() {
    baseRobotHands.enterResetPasswordButton();
  }
  EnterPassword() {
    baseRobotHands.enterPassword();
  }
  ReEnterPassword() {
    baseRobotHands.reEnterPassword();
  }
  ClickResetPasswordButton() {
    baseRobotHands.clickResetPasswordButton();
  }
  ReEnterFalsePassword() {
    baseRobotHands.reEnterFalsePassword();
  }
  ClickGoToLoginButton() {
    baseRobotHands.clickGoToLoginButton();
  }

  Wait() {
    cy.wait(5000);
  }
}

export class LoginInPageEyes extends BaseEyes {
  LoginTitle() {
    baseRobotEyes.seesTextWithTextLabel("Login to Minet");
  }

  EmailTextField() {
    baseRobotEyes.seesDomVisibleWithCustomMatcher(
      "placeholder",
      "'you@company.com'"
    );
  }

  PasswordTextField() {
    baseRobotEyes.seesDomVisibleWithCustomMatcher(
      "placeholder",
      "'Enter Password'"
    );
  }

  SignInButtonEnable() {
    // baseRobotEyes.seesDomEnabled()
  }

  ClickOnLogin() {
    baseRobotHands.clickOnText("Login");
  }
  ClickOnForgetPassword() {
    baseRobotHands.clickOnText("Forget Password");
  }
  Wait() {
    cy.wait(5000);
  }
}
