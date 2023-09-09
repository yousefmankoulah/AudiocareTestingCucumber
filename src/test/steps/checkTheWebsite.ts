import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { pageFixture } from "../../helper/pageFixture";

// Scenario 1 in check it

When("User click on the generate qr code button", async function () {
  await pageFixture.page
    .getByRole("link", { name: "Generate QR (current)" })
    .click();
});

Then("User should enter the sitename", async function () {
  await pageFixture.page
    .getByPlaceholder("Enter the site name")
    .fill("Denver Va");
});

Then("User should enter the serial number", async function () {
  await pageFixture.page
    .getByPlaceholder("Enter the serial number")
    .fill("10035");
});

Then("User should choose the site type", async function () {
  await pageFixture.page.locator("#roll3").selectOption("VA");
});

Then("User should click on the generate qr code button", async function () {
  await pageFixture.page.getByRole("button", { name: "Generate QR" }).click();
});

Then("User should see the qr code image", async function () {
  const qrImage = await pageFixture.page.getByRole("img", { name: "qr code" });
  expect(qrImage).toBeVisible();
  await pageFixture.page.waitForTimeout(5000);
});

// Scenario 2 in check it

Then("User will choose a site from the dashboard", async function () {
  await pageFixture.page.click("(//table[@class='table']//a)[3]");
  await pageFixture.page.waitForTimeout(5000);
});

Then("print the qr code", async function () {
  await pageFixture.page.getByRole("button", { name: "Print QR Code" }).click();
  await pageFixture.page.waitForTimeout(5000);
});

// Scenario 3 in check it

Then("User will search for a site from the dashboard", async function () {
  await pageFixture.page.getByPlaceholder("Search").fill("Denver");
  await pageFixture.page.getByRole("button", { name: "Search" }).click();
});

// Scenario 4 in check it

When("click logout", async function () {
  await pageFixture.page
    .getByRole("link", { name: "logout (current)" })
    .click();
});

Then("User will be redirected to the login page", async function () {
  expect(await pageFixture.page.goto("https://audiocare.pythonanywhere.com/"));
});
