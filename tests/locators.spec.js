const { test, expect } = require('@playwright/test');

test('OrangeHRM Login', async ({ page }) => {
      test.setTimeout(60000);

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.getByPlaceholder('Username').fill('Admin');

  await page.getByPlaceholder('Password').fill('admin123');

  await page.getByRole('button', { name: 'Login' }).click();

});