import { test, expect } from '@playwright/test';

test.describe('Home page', () => {
  test('carica con il titolo corretto', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle('New React Router App');
  });

  test('mostra il logo React Router', async ({ page }) => {
    await page.goto('/');
    const logos = page.getByRole('img', { name: 'React Router' });
    await expect(logos.first()).toBeVisible();
  });

  test('mostra la sezione navigazione', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText("What's next?")).toBeVisible();
    await expect(page.getByRole('link', { name: 'React Router Docs' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Join Discord' })).toBeVisible();
  });

  test('risponde HTTP 200', async ({ request }) => {
    const response = await request.get('/');
    expect(response.status()).toBe(200);
  });
});
