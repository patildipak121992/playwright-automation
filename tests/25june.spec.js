const { test, expect } = require('@playwright/test');

test('Amazon Login', async ({ page }) => {

    await page.goto('https://www.amazon.com/');

    await page.locator('#nav-link-accountList').click();

    await page.waitForLoadState('networkidle');

await page.getByRole('textbox', { name: 'Enter mobile number or email' }).fill('+919730242605')
    await page.locator('#continue').click();

});