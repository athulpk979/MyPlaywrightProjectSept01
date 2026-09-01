import test from "playwright/test";

test ('I axcess the web table headingh', async({ page })=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    let heading = await page.locator("//table[@name='BookTable']//child::tbody//child::tr//th").allInnerTexts();
    for (let AllHeading of heading){
         console.log(AllHeading);
    }
   
})

test ('I axcess the web table first row', async({ page })=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    let heading = await page.locator("//table[@name='BookTable']//child::tbody//child::tr[2]//td").allInnerTexts();
    for (let AllHeading of heading){
         console.log(AllHeading);
    }
   
})

test ('I axcess the web table second row', async({ page })=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    let heading = await page.locator("//table[@name='BookTable']//child::tbody//child::tr[3]//td").allInnerTexts();
    for (let AllHeading of heading){
         console.log(AllHeading);
    }
   
})