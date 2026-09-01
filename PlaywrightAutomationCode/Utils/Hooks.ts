import { After, Before, setDefaultTimeout } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium } from "playwright";
import {PageFixture} from "./PageFixture";

let broswer: Browser, context: BrowserContext;
Before(async function () {
  // Write code
    broswer = await chromium.launch({
    headless:false,
    args: ["--start-maximized"],
  });
    context = await broswer.newContext({viewport:null});
    PageFixture.page = await context.newPage();
  
});

After(async function() {
setDefaultTimeout(8*1000);
await PageFixture.page.close();
await context.close();
await broswer.close();
});