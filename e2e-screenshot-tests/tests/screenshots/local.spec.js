import { test, expect } from '@playwright/test';

// повний скриншот сторінки
test('Перевірка змін сторінки за скриншотом', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000');
  expect(await page.screenshot({ fullPage: true }))
    .toMatchSnapshot('screenshots/local-page/index-page.png');
});

// скриншот окремого елемента h1
test('Порівняння скриншота елемента', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000');
  const element = page.locator('h1');
  expect(await element.screenshot())
    .toMatchSnapshot('screenshots/local-page/index-page-element-h1.png');
});
