import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],

  use: {
    baseURL: 'http://127.0.0.1:3000',
    headless: true,
    trace: 'on-first-retry',
  },

  webServer: undefined,

  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
});
