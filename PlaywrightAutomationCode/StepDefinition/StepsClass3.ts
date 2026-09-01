import { Given, Then, When } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, firefox, Page } from "playwright";

// Interface: Browser, BrowserContext, Page
// let browser:Browser;
// let context:BrowserContext;
// let page:Page; //undefined->page

let browser: Browser, context: BrowserContext, page: Page;

Given("I launch the chrome broswer", async () => {
  //1. Launch chrome/firefox/webkit browser -> browser: default in headless (true)
  browser = await chromium.launch({
    headless: false,
    args: ["--start-maximized"],
  });
  //2. Choose incognito window
  context = await browser.newContext({ viewport: null });
  //3. Launch the webpage
  //page = await browser.newPage(); //via browser
  page = await context.newPage(); //via incognito window
});

When("I launch the Instagram website in it", async () => {
  await page.goto("https://www.instagram.com/");
});

Then("I close the webpage", async () => {
  await page.close();
});

When("I launch the facebook website", async function () {
  // Write code
  await page.goto("https://www.facebook.com/");
});

Given("I launch the firefox broswer", async function () {
  // Write code
  //1. Launch chrome/firefox/webkit browser -> browser: default in headless (true)
  browser = await firefox.launch({
    headless: false,
    args: ["--start-maximized"],
  });
  //2. Choose incognito window
  context = await browser.newContext({ viewport: null });
  //3. Launch the webpage
  //page = await browser.newPage(); //via browser
  page = await context.newPage(); //via incognito window
});

When("I launch the test automation website", async function () {
  // Write code
  await page.goto("https://testautomationpractice.blogspot.com/");
});

Then("I enter the name", async function () {
  // Write code placeholder="Enter Name"
  //locate the element
  let nameElement = await page.getByPlaceholder("Enter Name");
  await nameElement.fill("Test");
  await nameElement.type("Atul");
});

Then("I enter the email", async function () {
  // Write code here placeholder="Enter EMail"
  let emailEle = await page.getByPlaceholder("Enter EMail");
  await emailEle.type("test@123.com");
  await emailEle.type("viki");
});

Then("I clear the name", async function () {
  // Write code here
  //locate the element
  let nameElement = await page.getByPlaceholder("Enter Name");
  await nameElement.clear();
});

Then("I update the email", async function () {
  // Write code here
  let emailEle = await page.getByPlaceholder("Enter EMail");
  await emailEle.fill("test@sample.com");
});

Then("I reload the webpage", async () => {
  await page.reload();
});
