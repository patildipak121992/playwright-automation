import { test, chromium } from "@playwright/test";

test.describe("ademo", async () => {

  test("launch browser", async () => {

    const websiteToTest = "https://www.saucedemo.com/v1/";

    // launch browser
    const browserObj = await chromium.launch();

    // launch contexts
    const user1Context = await browserObj.newContext();
    const user2Context = await browserObj.newContext();

    // context 1 (user 1)
    const loginPageForUser1 = await user1Context.newPage();
    await loginPageForUser1.goto(websiteToTest);

    // locate elements and perform action
    const userNameLocator =
      loginPageForUser1.locator("[id='user-name']");
    const passwordLocator =
      loginPageForUser1.locator("[id='password']");
    const loginButton =
      loginPageForUser1.locator("[id='login-button']");

    // perform action for user 1
    await loginPageForUser1.pause();
    await userNameLocator.fill("prateek");
    await passwordLocator.fill("123456");
    await loginButton.click();

    // context 2 (user 2)
    const loginPageForUser2 = await user2Context.newPage();
    await loginPageForUser2.goto(websiteToTest);

    // locate elements and perform action
    const userNameLocator2 =
      loginPageForUser2.locator("[id='user-name']");
    const passwordLocator2 =
      loginPageForUser2.locator("[id='password']");
    const loginButton2 =
      loginPageForUser2.locator("[id='login-button']");

    // perform action for user 2
    await userNameLocator2.fill("second name");
    await passwordLocator2.fill("56789");
    await loginPageForUser2.pause();
    await loginButton2.click();

  });

});