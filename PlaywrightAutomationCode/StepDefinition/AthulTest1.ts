import { Given, Then, When } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, Page } from "playwright";
import { expect } from "playwright/test";

let browser: Browser, context:BrowserContext, page:Page;

Given('I launch the chrome', async function () {
  // Write code
    browser = await chromium.launch({
    headless:false,
    args: ["--start-maximized"],
  });
    context = await browser.newContext();
    page = await context.newPage();
  
});

When('I navigate to the page',async()=>{
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.getByText("Upload Files").scrollIntoViewIfNeeded();
});


// input#singleFileInput
// //button[text()='Upload Single File']
Then('I upload a sigle fine in the website', async ()=>{
  // Write code 
  let singleFile = await page.locator("input#singleFileInput");
  await singleFile.setInputFiles("./test-result/Screenshorts1/befor.png")
  await page.click("//button[text()='Upload Single File']");

});

Then('I upload a multiple fine in the website', async ()=>{
  // Write code
  let multipleFile = await page.locator("input#multipleFilesInput");
  await multipleFile.setInputFiles(["./test-result/Screenshorts1/after.png","./test-result/Screenshorts1/befor.png"]);
  await page.click("//button[text()='Upload Multiple Files']");
});

