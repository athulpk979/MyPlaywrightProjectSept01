import test, { expect } from "playwright/test";
import UserDetailsOFTutorialsPoint from "../PlaywrightAutomationCode/TestData/UserDetaileOFTutorialsPoint.json"


// test ('I launch the chrome broswer for test', async({context})=>{

//     let Page = await context.newPage();

// });
// test('I navigate to tutorialspoint website for test', async ({page})=>{
//   await page.goto(UserDetailsOFTutorialsPoint.tutorialspointURL);
//   await expect(page).toHaveURL(UserDetailsOFTutorialsPoint.tutorialspointURL);

// });

test ('I Register the user', async ({page})=>{
    
  await page.goto(UserDetailsOFTutorialsPoint.tutorialspointURL);
  await expect(page).toHaveURL(UserDetailsOFTutorialsPoint.tutorialspointURL);

  await page.locator("//div[@id='collapseTwo']//child::div//child::ul//li[3]").click();
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