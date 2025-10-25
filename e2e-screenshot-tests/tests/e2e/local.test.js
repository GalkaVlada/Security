import { test, expect } from '@playwright/test';

test('Перевірка форми входу', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000');
  await page.fill('#username', 'test_user');
  await page.fill('#password', 'password123');
  await page.click('#loginButton');
  await expect(page.locator('#successMessage')).toBeVisible();
});

test('Перевірка заголовка сторінки', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000');
  await expect(page).toHaveTitle(/Локальна сторінка/);
});

test('Валідація обов’язкових полів форми', async ({ page }) => {
  await page.goto('http://127.0.0.1:3000');
  await page.click('#loginButton');
  const invalid = await page.evaluate(() => document.querySelector(':invalid') !== null);
  expect(invalid).toBe(true);
});
