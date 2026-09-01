import { Given, Then } from "@cucumber/cucumber";
import { PageFixture } from "../Utils/PageFixture";
import lambdatest_Login from "../PageObjectModel/lambdatest_Login";
import lambdatestLoginData from "../TestData/lambdatestLoginData.json";

let ld = new lambdatest_Login()


Given("When I navigate to page", async ()=>{
    await ld.pageURL(lambdatestLoginData.URL);
});

Then("enter first name and last name", async ()=> {
    await ld.enterFirstName(lambdatestLoginData.FirstName);
    await ld.enterLastName(lambdatestLoginData.lastname);
});

Then("enter mail ID", async ()=> {
    await ld.enterMailID(lambdatestLoginData.Mail);
});

Then("enter number", async ()=> {
    await ld.enterNumber(lambdatestLoginData.Telephone);
});

Then("create your password", async ()=> {
    await ld.enterCreatePassword(lambdatestLoginData.Password);
});

Then("confirm the password", async ()=> {
    await ld.enterConfirmPassword(lambdatestLoginData.PasswordConfirm);
});

Then("I have checked the check box", async ()=> {
    await ld.clickCheckBox();
});

Then("click continue", async ()=> {
    await ld.clickContinue();
});
