import { Before, After, BeforeAll, AfterAll, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium } from "@playwright/test";
import { pageFixture } from "./pageFixture";
const fs = require("fs-extra");

let browser: Browser;
let context: BrowserContext;

BeforeAll(async () => {
  browser = await chromium.launch({ headless: false });
});

Before(async function () {
  context = await browser.newContext();
  const page = await context.newPage();
  pageFixture.page = page;
});

After(async function () {
  // let img: Buffer;
  // //screenshot
  // if (result?.status == Status.FAILED) {
  //   img = await pageFixture.page.screenshot({
  //     path: `./test-results/screenshots/${pickle.name}.png`,
  //     type: "png",
  //   });

  //   await this.attach(img, "image/png");
  // }

  await pageFixture.page.close();
  await context.close();
});

AfterAll(async function () {
  await browser.close();
});
