import { PageFixture } from "../Utils/PageFixture"
export default class lambdatest_login {

    private loginDetails = {
        "firstName": "//input[@name='firstname']",
        "lastName": "//input[@name='lastname']",
        "mailID": "//input[@name='email']",
        "number": "//input[@name='telephone']",
        "createPassword": "//input[@name='password']",
        "confirmPassword": "//input[@name='confirm']",
        "checkBox": "label.custom-control-label[for='input-agree']",
        "continue": "//input[@value='Continue']"
    }

    async pageURL(url: string) {
        await PageFixture.page.goto(url);
    }

    async enterFirstName(firstName: string) {
        await PageFixture.page.locator(this.loginDetails.firstName).fill(firstName);
    }

    async enterLastName(lastName: string) {
        await PageFixture.page.locator(this.loginDetails.lastName).fill(lastName);
    }

    async enterMailID(mailID: string) {
        await PageFixture.page.locator(this.loginDetails.mailID).fill(mailID);
    }

    async enterNumber(number: string) {
        await PageFixture.page.locator(this.loginDetails.number).pressSequentially(number);
    }

    async enterCreatePassword(createPassword: string) {
        await PageFixture.page.locator(this.loginDetails.createPassword).fill(createPassword);
    }

    async enterConfirmPassword(confirmPassword: string) {
        await PageFixture.page.locator(this.loginDetails.confirmPassword).fill(confirmPassword);
    }
    async clickCheckBox() {
        await PageFixture.page.check(this.loginDetails.checkBox);
    }

    async clickContinue() {
        await PageFixture.page.click(this.loginDetails.continue);
    }
}