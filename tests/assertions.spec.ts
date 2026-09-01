import {test, expect } from "playwright/test";

test('I launch the browzer', async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");
    await expect(page).toHaveTitle(/Automation Testing/);
    await expect(page).toHaveURL("https://testautomationpractice.blogspot.com/");

    await expect(page.getByText("Data Entry Form")).toBeVisible();

    await expect(page.locator("button.start")).toBeEnabled();
    await page.getByText("START").click();
    await expect(page.locator("button.start")).toHaveAttribute("name", "stop");

    await expect(page.locator("label.form-check-label")).toHaveCount(9);

    await expect(page.getByText("For Selenium, Cypress & Playwright")).toContainText("Cypress & Playwright");
});