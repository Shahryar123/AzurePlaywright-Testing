import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


//INTEGRATE AZURE SDK WITH PLAYWRIGHT

const { fetchResources } = require('../azure-sdk/app');

test('Verify Azure Resources', async ({}) => {
  const subscriptionId = '<YOUR_SUBSCRIPTION_ID>';
  
  // Fetch Azure resources
  const resources = await fetchResources(subscriptionId);
  console.log('Fetched Resources:', resources);

  // Example assertion: Check that at least one resource exists
  expect(resources.length).toBeGreaterThan(0);

  // Optional: Test specific properties of a resource
  const firstResource = resources[0];
  expect(firstResource).toHaveProperty('id');
  expect(firstResource).toHaveProperty('name');
});
