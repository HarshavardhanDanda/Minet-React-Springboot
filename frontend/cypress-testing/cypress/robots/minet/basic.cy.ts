import { data } from "cypress/types/jquery";
import { BaseDependencies, BaseEyes, BaseHands } from "../BaseRobots";

export class Dependencies extends BaseDependencies {
  signIn() {
    cy.fixture("user-data.json").then((data) => {
      cy.get('[placeholder="you@company.com"]').type(data.email);
      cy.get('input[type="password"]').type(data.password);
      cy.get('[data-testid="password-toggle-button"]').click();
    });
  }
  wait() {
    cy.wait(3000);
  }
}
export class RobotEyes extends BaseEyes {
  checkLength() {
    cy.get('input[type="text"]').should("have.length", 5);
  }
}
export class RobotHands extends BaseHands {
  clickOnStar() {
    cy.get(
      ":nth-child(3) > .css-ynw041-MuiStack-root > .MuiButtonBase-root > .PrivateSwitchBase-input"
    ).click();
  }
  scrollToView() {
    cy.get(
      '.css-xl7huo-MuiButtonBase-root-MuiTab-root > [data-testid="Hello"]'
    ).scrollIntoView();
  }
  clickOnCard() {
    cy.get(":nth-child(3) > .css-ynw041-MuiStack-root").click();
  }
  clickOnAddToWatchlist() {
    cy.get(
      '.css-7ogmzc-MuiStack-root > [data-testid="button"] > [data-testid="Hello"]'
    ).click();
  }

  clickOnDashboard() {
    cy.get(
      '[data-testid="Trade"] > div > [data-testid="iconComponent"]'
    ).click();
  }
  clickOnText(text: string) {
    cy.contains(text).click({ force: true });
  }
  searchByPlaceholderText(placeholder: string, text: string) {
    cy.get(`[placeholder="${placeholder}"]`).type(text);
  }
  clearSearchByText(text: string) {
    cy.get('[placeholder="Search all assets"]').type(text).clear();
  }
  clickOnTradeTab(id: string) {
    cy.contains('[data-testid="typography-component"]', `${id}`).click();
  }
  ClickOnButton(text: string) {
    cy.contains("button", `${text}`).click();
  }
  moveBuySlider() {
    cy.get('[data-testid="upperField"]')
      .clear()
      .type("$1020")
      .trigger("change");
  }
  moveSellSlider() {
    cy.get('[data-testid="lowerField"]')
      .clear()
      .type("$1150")
      .trigger("change");
  }
  ClickOnSideNavIcon(id: number) {
    cy.get(
      `:nth-child(${id}) > .MuiButtonBase-root > .MuiListItemIcon-root > div > [data-testid="iconComponent"]`
    ).click();
  }
  clickOnSellButton() {
    cy.get(
      '.css-1995vhn-MuiGrid-root > :nth-child(1) > [data-testid="button"]'
    ).click();
  }
  scrollIntoViewSlider() {
    cy.get(".MuiSlider-root").scrollIntoView();
  }
  changeValueSlider() {
    cy.get(".MuiSlider-root").as("slider"); // slider

    cy.get("@slider")
      .click("bottomRight", { force: true })
      .invoke("val", 10)
      .trigger("change");
  }
  clickOnFirstWatchlist() {
    cy.get(".css-y0k7va > :nth-child(1)").click();
  }
  clickOnSellNow() {
    cy.get('.css-vcowme-MuiStack-root > [data-testid="button"]').click();
  }
  clickOnBuyNow() {
    cy.get(
      '.css-vcowme-MuiStack-root > [data-testid="button"] > [data-testid="Hello"]'
    ).click();
  }
  clickOnBuyButton() {
    cy.get(
      ':nth-child(2) > [data-testid="button"] > [data-testid="Hello"]'
    ).click();
  }
  clickOnGoToUSDCoin() {
    cy.get(
      '.css-174yg7y > .MuiButton-contained > [data-testid="Hello"]'
    ).click();
  }

  clickOnWalletTab() {
    cy.get('[tabindex="-1"] > [data-testid="Hello"]').click();
  }
  clickOnLogoutButton() {
    cy.get(':nth-child(6) > div > [data-testid="iconComponent"]').click();
  }
  enterEmail() {
    cy.get("[placeholder='you@company.com']").type("JhonDoe1996@gmail.com");
  }
  enterPassword() {
    cy.get('input#\\:rd\\:[type="password"]').type("Minet1@password.com");
  }
  reEnterPassword() {
    cy.get('input#\\:rf\\:[type="text"]').type("Minet1@password.com");
  }
  clickResetPasswordButton() {
    cy.get('[data-testid="button"]').click();
  }
  clickGoToLoginButton() {
    cy.get('[data-testid="button"]').click();
  }
  reEnterFalsePassword() {
    cy.get('input#\\:rf\\:[type="text"]').type("Minet8@password.com");
  }
  sendResetLink() {
    cy.get('[data-testid="button"]').click();
  }
  enterResetCode() {
    cy.get("[placeholder='8 digit code']").type("12345678");
  }
  enterResetPasswordButton() {
    cy.get('[data-testid="button"]').click();
  }
}
