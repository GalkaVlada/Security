import { test, expect } from '@playwright/test'

test('Example.com page has correct title', async ({ page }) => {
  await page.goto('https://example.com')
  await expect(page).toHaveTitle(/Example Domain/)
})
