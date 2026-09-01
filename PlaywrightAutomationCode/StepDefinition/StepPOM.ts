// import { Then, When } from "@cucumber/cucumber";
// import {PageFixture} from "../Utils/PageFixture";

// When("I launch the test automation website using POM", async function () {
//   // Write code
//   await PageFixture.page.goto("https://testautomationpractice.blogspot.com/");
// });

// Then("I enter the name using POM", async function () {
//   // Write code placeholder="Enter Name"
//   //locate the element
//   let nameElement = await PageFixture.page.getByPlaceholder("Enter Name");
//   await nameElement.fill("Test");
//   await nameElement.type("Atul");
// });

// Then("I enter the email using POM", async function () {
//   // Write code here placeholder="Enter EMail"
//   let emailEle = await PageFixture.page.getByPlaceholder("Enter EMail");
//   await emailEle.type("test@123.com");
//   await emailEle.type("viki");
// });

// Then("I clear the name using POM", async function () {
//   // Write code here
//   //locate the element
//   let nameElement = await PageFixture.page.getByPlaceholder("Enter Name");
//   await nameElement.clear();
// });

// Then("I update the email using POM", async function () {
//   // Write code here
//   let emailEle = await PageFixture.page.getByPlaceholder("Enter EMail");
//   await emailEle.fill("test@sample.com");
// });

// Then("I reload the webpage using POM", async () => {
//   await PageFixture.page.reload();
// });