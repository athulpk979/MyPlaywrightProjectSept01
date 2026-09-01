import { Given, Then, When} from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, Page } from "playwright/test";

let browser: Browser, context: BrowserContext, page: Page;

Given('Ilaunch the browser', async ()=>{
  // Write code here that turns the phrase above into concrete actions
  browser = await chromium.launch({
    headless: false,
    args: ["--start-maximized"],
  });

  page= await browser.newPage();
  
  
});
 
When('I launch the FB web page', async ()=> {
  // Write code here that turns the phrase above into concrete actions
  await page.goto('http://www.facebook.com/');
});

Then('I close the page', async ()=> {
  // Write code here that turns the phrase above into concrete actions
  await page.close();
});
