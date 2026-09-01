import { Given, Then, When } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, Page } from "playwright";
import { expect } from "playwright/test";
import UserDetails from "../TestData/UserDetails.json"
import UserDetailsOFTutorialsPoint from "../TestData/UserDetaileOFTutorialsPoint.json"

let browser: Browser, context:BrowserContext, page:Page;

//case1
Given('I launch the chrome broswer for test', async()=> {
    browser = await chromium.launch({
    headless:false,
   // args: ['--start-maximized'],
});
    context = await browser.newContext();
    page = await context.newPage();
})

When('I navigate to testautomationpractice website for test', async()=>{
 await page.goto('https://testautomationpractice.blogspot.com/');

})

// placeholder="Enter Name"
Then('I enter the username for test', async()=>{
    let usernam = await page.getByPlaceholder("Enter Name");
    await  usernam.fill("athul");

})

// placeholder="Enter EMail"
Then('I enter the password for test', async()=>{
   let newmail=  await page.getByPlaceholder("Enter EMail");
   await newmail.fill("athul.0987");
})


//case 2 pass
When ('I navigate to amazon website for test', async ()=>{
await page.goto('https://www.amazon.in/');

})

Then ('I click the todays deals', async ()=>{
await page.locator("//a[@data-csa-c-slot-id='nav_cs_4']").click();
await page.bringToFront();
await page.locator("//a[contains(@data-csa-c-id,'7rymn-ip1rh6-y8gqqa-g0b3zr')]");
})

//case 3 pass

When('I navigate to practicetestautomation website for LOGIN test', async function () {
  // Write code 
await page.goto('https://practicetestautomation.com/practice-test-login/');
});

 Then('I enter the username for practicetestautomation',async()=>{
 await page.locator("#username").fill("student");
})

 Then('I enter the password for practicetestautomation',async()=>{
await page.locator("//input[@name='password']").fill("Password123")
})


Then('I click submit button for practicetestautomation', async function () {
  // Write code 
  await page.locator(".btn").click();
});

//case4 fail
/*Then ('I click the practice', async()=>{
    await page.locator("//li[@id='menu-item-20']").click();
})
Then ('I click login test',async()=>{
await page.locator("//p[@class='wp-block-paragraph']").click();
})*/

Then('I print the user name and password', async function () {

//   let texta = await page.locator("//ul/li/b[text()='student']").innerHTML();
    let texta = await page.locator("//b[text()='student']//ancestor::ul//child::li//child::b[1]").textContent();
  console.log("User Name : ", texta);

  //let textb = await page.locator("//ul/li/b[text()='Password123']").innerText();
  let textb = await page.locator("//b[text()='student']//ancestor::ul//child::li//child::b[2]").textContent();
  console.log("User Pass : ", textb);
});

Then('click the practicetestautomation logo', async function () {
  // Write code
  await page.locator(".custom-logo").click();

});

//retest
Then ('I handle single selection dropdown', async()=>{
    let singleDrop = await page.locator("//select[@id='country']")
    await singleDrop.scrollIntoViewIfNeeded();
    let allsingledrop = await singleDrop.allInnerTexts();
    for (let i=0; i<allsingledrop.length; i++){
        let countryvalue =  allsingledrop[i].trim();
        console.log(countryvalue);

    // if (countryvalue.includes("Japan")){
    //     await page.selectOption("//select[@id='country']", "japan");
    //     break;
    // }
     if (countryvalue.includes("Brazil")){
        await page.selectOption("//select[@id='country']", {label: "Brazil"});
        break;
    }
    }
});

Then ('I handel multiple select dropdown', async()=>{
    let multColrDropDown = await page.locator("//select[@id='colors']");
    let multClorValue = await multColrDropDown.allTextContents();
    for (let i=0; i<multClorValue.length; i++){
    let clor= multClorValue[i].trim();
    console.log(clor);
    await page.selectOption("//select[@id='colors']", "green"); // single select option
    await page.selectOption("//select[@id='colors']", ["green", "red", "white"]);
    }
});

/*Then ('I handle single selection dropdown test', async()=>{
   let countrys = await page.locator("//select[@id='country']");
   await countrys.scrollIntoViewIfNeeded();
   let allcountrys = await countrys.allInnerTexts();
   for (let i=0; i<allcountrys.length; i++){
    let newallcountrys = allcountrys[i].trim();
    console.log(newallcountrys);
   
   if (newallcountrys.includes("United Kingdom")){
    //await page.selectOption("//select[@id='country']", "uk");
    await page.selectOption("//select[@id='country']", {label: "United Kingdom"});
    break;
    }
}
});

Then ('I handel multiple select dropdown test', async()=>{
   let Color = await page.locator("//select[@id='colors']");
   let allColor= await Color.allTextContents();
   for(let i=0; i<allColor.length; i++){
    let newAllclor = allColor[i];
    console.log(newAllclor);
   // await page.selectOption("//select[@id='colors']", "red");
    await page.selectOption("//select[@id='colors']", ["red", "green", "white"]);
        
    }
});*/

//textarea[@id='APjFqb']
Then ('I enter fifa in google search box', async()=>{
    await page.goto("https://www.google.com/")
    await page.locator("//textarea[@id='APjFqb']").fill("fifa");
    await page.waitForSelector(".wM6W7d");
    console.log("--------athul--------");
    let unorderlist = await page.locator(".wM6W7d").all();
    //let unorderlist = await page.$$(".wM6W7d");
    for (let searchall of unorderlist ){
        let NewValue = await searchall.innerText();
        console.log(NewValue);

      //  if (NewValue.includes(" world cup standings")){
        if (NewValue.indexOf(" world cup standings")){
            await searchall.click();
            break
        }
    }
    
    await page.waitForSelector("//div[@class='recaptcha-checkbox-border']");
    await page.locator("//div[@class='recaptcha-checkbox-border']").check();
})


Then ('I took element level screenshort using playwright', async ()=>{
    let nameEle= await page.getByPlaceholder("Enter Name");
  // ./test-result/screenshorts/apk.png
    await nameEle.screenshot({path:"./test-result/Screenshorts1/befor.png"});
    await nameEle.fill("athul");
    await nameEle.screenshot({path:"./test-result/Screenshorts1/after.png"})

});
Then ('I took screen length screenshort using playwright', async ()=>{
     let nameEle= await page.getByPlaceholder("Enter Name");
    await nameEle.clear();

    //screenlevel
    await page.screenshot({path:"./test-result/Screenshorts1/after2.jpg"});
});


Then ('',async()=>{
await page.screenshot({path: "./athul/test/originAgentCluster.png"})
});

//WindowsHandling
Then('I handle new window', async function () {
  // Write code 
  await page.goto("https://demo.automationtesting.in/Windows.html");
  // new window  div#Tabbed>a>button
  // seperate  div#Seperate>button
  // Multiple div#Multiple>button
  let pages = page.context().pages();
  console.log("No of pages befor click :", pages.length);

//   await page.click("div#Tabbed>a>button");
//   await page.waitForTimeout(3000);

await Promise.all([
    page.waitForEvent("popup", ),
    page.click("div#Tabbed>a>button"),
    page.waitForTimeout(3000),
]);

  pages = page.context().pages();
  console.log("No of pages after click :", pages.length);
for(let p of pages){
    let tittle = await p.title();
    let url = await p.url();
    console.log(tittle + ":" + url);

    if(tittle != "Frames & windows"){
        await p.close();
    }
}
});

Then('I handle new seperate window', async function () {
  // Write code 
    await page.goto("https://demo.automationtesting.in/Windows.html");
    await page.click("//a[contains(text(),'New Seperate')]");
    // new window  div#Tabbed>a>button
  // seperate  div#Seperate>button
  // Multiple div#Multiple>button
  let pages = page.context().pages();
  console.log("No of pages befor click :", pages.length);

//   await page.click("div#Tabbed>a>button");
//   await page.waitForTimeout(3000);

await Promise.all([
    page.waitForEvent("popup", ),
    page.click("div#Seperate>button"),
    page.waitForTimeout(3000),
]);

  pages = page.context().pages();
  console.log("No of pages after click :", pages.length);
for(let p of pages){
    let tittle = await p.title();
    let url = await p.url();
    console.log(tittle + ":" + url);

    if(tittle != "Selenium"){
        await p.close();
    }
}
});

Then('I handle sceperate multiple window', async function () {
  // Write code
    await page.goto("https://demo.automationtesting.in/Windows.html");
    await page.click("//a[contains(text(),'Seperate Multiple')]");
    // new window  div#Tabbed>a>button
  // seperate  div#Seperate>button
  // Multiple div#Multiple>button
  let pages = page.context().pages();
  console.log("No of pages befor click :", pages.length);

//   await page.click("div#Tabbed>a>button");
//   await page.waitForTimeout(3000);

await Promise.all([
    page.waitForEvent("popup", ),
    page.click("div#Multiple>button"),
    page.waitForTimeout(3000),
]);

  pages = page.context().pages();
  console.log("No of pages after click :", pages.length);
for(let p of pages){
    let tittle = await p.title();
    let url = await p.url();
    console.log(tittle + ":" + url);

    if(tittle != "Index"){
        await p.close();
    }
}
});

Then('I navigate to to the Frame Test Page', async function () {
  // Write code 
    await page.goto("https://ui.vision/demo/webtest/frames/");
});

Then('frame types', async function () {
  // Write code 

  //Type 1
    let Type1= await page.frameLocator("//frame[@src='frame_1.html']");
    await Type1?.locator("//input[@name='mytext1']").fill("Test Frame 1");

   //Type 2
   let Type2 = await page.frame({url: "https://ui.vision/demo/webtest/frames/frame_2"});
   await Type2?.fill("//input[@name='mytext2']","test");


});

Then ('I handle nested frame', async()=>{

  let frame3 = await page.frame({url: "https://ui.vision/demo/webtest/frames/frame_3"});
  await frame3?.fill("//input[@name='mytext3']", "Frame 3 test");

  let childFrame3 = await frame3?.childFrames();
  console.log("child frame in frame 3 :", childFrame3?.length);

  if(childFrame3 && childFrame3.length>0 ){
    await childFrame3[0].locator("//span[contains (text(),'UI.Vision IDE')]").click;
    
  }

});

//assertion
Then ('I handle Hard assertion', async()=>{
  await expect(page).toHaveTitle('Automation Testing Practice');
  await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/");

  await expect(page.getByText("Data Entry Form")).toBeVisible();
  await page.getByPlaceholder("Enter Name").fill("playWright");

  await expect(page.locator("button.start")).toBeEnabled();
  await page.locator("button.start").click();

  await expect(page.locator("button.stop")).toHaveAttribute("name", "stop");

  await expect(page.locator("input.form-check-input")).toHaveCount(9);

  await expect(page.getByText("For Selenium, Cypress & Playwright")).toContainText("Cypress & Playwright")
  await expect(page.getByText("Days:")).toHaveText("Days:");

});

Then ('I handle Soft assertion', async()=>{
});

//DropDown
Then ('I handle single dropdown selector', async ()=>{

  let SingleDropDown = await page.locator("//select[@id='country']");
  await SingleDropDown.scrollIntoViewIfNeeded();
  let countrylist = await SingleDropDown.allTextContents();
  for (let i=0; i<countrylist.length; i++){
    let countryTotalValue = countrylist[i].trim();
    console.log(countryTotalValue);

    // if (countryTotalValue.indexOf("Japan")){
    //   await page.selectOption("//select[@id='country']","Japan");
    //   break;

    if (countryTotalValue.indexOf("Brazil")){
    await page.selectOption("//select[@id='country']",{label:"Brazil"});
    break;
    }

    // while(countryTotalValue.indexOf("Japan")){
    //   await page.selectOption("//select[@id='country']",{label:"Japan"});
    // };
  }
  
});

Then ('I handle multiple select dropdown', async ()=>{

     let MultDrop = await page.locator("//select[@id='colors']");
    let MultList = await MultDrop.allInnerTexts();
    for(let i=0; i<MultList.length; i++){
    let NewMultList = MultList[i].trim();
    console.log(NewMultList);

    

    await page.selectOption("//select[@id='colors']",["Green", "Yellow", "White"]);
    break
    }
    
});

Then ('I enter the user name and passwork by fileread feature', async ()=>{

  await page.getByPlaceholder("Enter Name").fill(UserDetails["User 1"].testautomationName);
  await page.getByPlaceholder("Enter EMail").pressSequentially(UserDetails["User 1"].testautomationEmail);
  await page.getByPlaceholder("Enter Phone").pressSequentially(UserDetails["User 1"].testautomationPhone);
  await page.locator("textarea.form-control").fill(UserDetails["User 1"].testautomationAddress);
});

When ('I navigate to tutorialspoint website for test', async ()=>{

  await page.goto(UserDetailsOFTutorialsPoint.tutorialspointURL);
  await expect(page).toHaveURL(UserDetailsOFTutorialsPoint.tutorialspointURL);


});

Then ('I Register the user', async ()=>{

  await page.click("//div[@id='collapseTwo']//child::div//child::ul//li[3]");
  await expect(page).toHaveURL(UserDetailsOFTutorialsPoint.RegisterURL);

  await page.getByPlaceholder("First Name").fill(UserDetailsOFTutorialsPoint["User 1"]["First Name"]);
  await page.getByPlaceholder("lastname").fill(UserDetailsOFTutorialsPoint["User 1"].lastname);
  await page.getByPlaceholder("UserName").fill(UserDetailsOFTutorialsPoint["User 1"].UserName);
  await page.getByPlaceholder("Password").fill(UserDetailsOFTutorialsPoint["User 1"].Password);

  await page.click("//input[@type='submit']");
  await expect(page).toHaveURL(UserDetailsOFTutorialsPoint.AfterRegisterURL);

  await page.screenshot({
    path: "./test-result/Screenshots/Test.jpg",
    fullPage: true,
  });
});


Then ('I axcess the web table and print', async()=>{

  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.getByText("Pagination Web Table").scrollIntoViewIfNeeded();

  console.log("======Colum=========");
  let header = await page.locator("table#productTable>thead>tr>th").all();
  console.log("Column size", header.length);
  for (let H of header){
    let HD = await await H.innerText();
    console.log(HD);
  }

   console.log("======Row1=========");
  //await page.waitForSelector("table#productTable", { timeout: 10000 });
  await page.locator("//ul[@class='pagination']//li[2] ").click();
  let Rows = await page.locator("table#productTable>tbody>tr>td").all();
  console.log("Column size", Rows.length);
  
  //Option: 1 
    for (let i=0; i<Rows.length; i++){
      let NewRow = await Rows[i].allInnerTexts();
      console.log(NewRow + "\n");
    }
  //      console.log("======Row2=========");
  // //Option: 2
  // for (let R of Rows){
  //   let RD1 = await R.locator("td").allInnerTexts();
  //   console.log(RD1+ "\n");
  //   }
  //    console.log("======Row3=========");
  // //Option: 3
  
  //   let RD = await R.locator("td").all();
  //   for (let NewRD of RD){
  //     console.log(await NewRD.innerText());
  //   }

});
