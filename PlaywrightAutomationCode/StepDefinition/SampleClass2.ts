import { Given, Then, When } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, Page } from "playwright";

// Interface: Browser
// let browser:Browser;
// let context:BrowserContext;
// let page:Page; //undefined->page

let browser: Browser, context: BrowserContext, page: Page;

Given("I launch the broswer for Insta", async () => {
  //1. Browser launch: chrome/firefox/webkit(safari)
  //({}) -> fixture
  browser = await chromium.launch({
    headless: false,
    args: ["--start-maximized"],
  });
  //2. BrowserContext: Incognito window - to avoid cookies
  context = await browser.newContext({ viewport: null });
  //3. WebPage launch
  page = await context.newPage();
});

When("I launch the Instagram website in it", async () => {
  await page.goto("https://www.instagram.com/");
});
//Then I close the instagram page
Then("I close the instagram page", async () => {
  await page.close();
});
