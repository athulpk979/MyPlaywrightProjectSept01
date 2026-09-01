// import { After, Before, setDefaultTimeout } from "@cucumber/cucumber";
// import { Browser, BrowserContext, chromium } from "playwright";
// import { PageFixture } from "./PageFixture";

// let browser: Browser, context: BrowserContext

// Before(async function (){

//     browser = await chromium.launch({
//         headless: false,
//         args: ["--start-maximized"],
//     });
//     context = await browser.newContext();
//     PageFixture.page = await context.newPage();
// });

// After ( async function () {
//     setDefaultTimeout(10*1000);
// await PageFixture.page.close();
// await context.close();
// await browser.close();

// });