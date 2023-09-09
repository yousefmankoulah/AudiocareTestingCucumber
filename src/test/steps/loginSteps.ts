import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../helper/pageFixture";

setDefaultTimeout(60 * 1000 * 2);

Given("User navigates to the application", async function () {
  await pageFixture.page.goto("https://audiocare.pythonanywhere.com/");
});

Given("User enter the username as {string}", async function (username) {
  await pageFixture.page.getByLabel("Username*").type(username);
});

Given("User enter the password as {string}", async function (password) {
  await pageFixture.page.getByLabel("Password*").type(password);
});

When("User click on the login button", async function () {
  await pageFixture.page.click("//button[@type='submit']");
  await pageFixture.page.waitForLoadState();
  await pageFixture.page.waitForTimeout(2000);
});

Then("Login should be success", async function () {
  const loginSuccess = await pageFixture.page.getByRole("heading", {
    name: "Device Management Dashboard",
  });
  expect(loginSuccess).toBeVisible();
  await pageFixture.page.waitForTimeout(5000);
});

When("Login should fail", async function () {
  const loginFailed = await pageFixture.page.getByText(
    "Please enter a correct username and password. Note that both fields may be case-"
  );
  expect(loginFailed).toBeVisible();
  await pageFixture.page.waitForTimeout(5000);
});
