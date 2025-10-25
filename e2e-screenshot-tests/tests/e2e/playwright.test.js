const { test, expect } = require('@playwright/test');

test('Перевірка заголовка сайту', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/i);
});

test('Перевірка наявності меню навігації', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page.locator('nav')).toBeVisible();
});

test('Перевірка переходу за посиланням', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await page.getByText('Get started', { exact: false }).first().click();
  await expect(page).toHaveURL(/docs\/intro/i);
});
