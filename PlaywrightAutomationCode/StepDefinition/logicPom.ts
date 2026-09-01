import { Given, Then } from "@cucumber/cucumber";
import { PageFixture } from "../Utils/PageFixture";

Given("I navigate to ecommerce website via pom", async () => {
  await PageFixture.page.goto(
    "https://ecommerce-playground.lambdatest.io/index.php?route=account/login",
  );
});

Then("I enter email via pom", async () => {
  await PageFixture.page
    .locator("//input[@id='input-email']")
    .fill("rocky@testing.com");
});
Then("I enter password via pom", async () => {
  await PageFixture.page
    .locator("//input[@id='input-password']")
    .pressSequentially("Gps2345");
});
Then("I click login button via pom", async () => {
  await PageFixture.page.locator("//input[@value='Login']").click();
});
