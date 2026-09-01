import { Given, Then, When } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, Page } from "playwright/test";

//what are the keywords used to create/initiate a variable in js/ts?
//What are the datatypes available in js/ts?
let browser: Browser, context: BrowserContext, page: Page;

Given("I launch the browser to test", async function () {
  // Write code
  // 1. browser launch (chrome/firefox/IE/Safari)
  //fixture??? //Chrome browser
  browser = await chromium.launch({
    headless: false,
    args: ["--start-maximized"],
  });
  // 2. context page -> incoginto mode
  context = await browser.newContext({ viewport: null });

  // 3. page -> use webpage from context
  page = await context.newPage();
  // page = await browser.newPage();
});

When("I launch the facebook application to test", async () => {
  await page.goto("https://www.facebook.com/");
});

Then("I close the browser to test", async () => {
  await page.close();
});

When("I launch the instagram application to test", async () => {
  await page.goto("https://www.instagram.com/");
});
