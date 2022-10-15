import { test, expect } from '@playwright/test';
test('WSTest', async ({ page }) => {
  // Go to https://beta.takeprofit.com/
  await page.goto('https://beta.takeprofit.com/');

  
//ws1              ('//div[1]/div[1]/div/div[1]/div[2]/div/button/button/div[1]')
/* await page.locator('button:has-text("My workspace 1")').nth(1).click();
await page.locator('button:has-text("Add New Workspace")').nth(1).click();
const wl2 = await page.locator('button:has-text("My workspace 2")').nth(1);
await expect(wl2).toBeVisible();*/
  // Click button:has-text("My workspace 1") >> nth=1
  await page.locator('button:has-text("My workspace 1")').nth(1).click();
  // Click button:has-text("Add New Workspace") >> nth=1
  await page.locator('button:has-text("Add New Workspace")').nth(1).click();
  // Click button:has-text("My workspace 2") >> nth=1
  const secWl = await page.locator('//div[1]/div[1]/div/div[1]/div[2]/div/button/button/div[1]/span');
  await expect(secWl).toBeVisible();


}); 


