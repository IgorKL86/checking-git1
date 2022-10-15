import { test, expect } from '@playwright/test';
test('TFtest', async ({ page }) => {
  // Go to https://beta.takeprofit.com/
  await page.goto('https://beta.takeprofit.com/');
  // 1 MIN CHART
  const minute = await page.locator('//div[1]/div[1]/div/div[2]/div/div[3]/div/div/div[1]/div[2]/div[1]/div/div[1]/ul/li[1]/button/span').click();
  //30 min
  const halfofhour = await page.locator('//div[1]/div[1]/div/div[2]/div/div[3]/div/div/div[1]/div[2]/div[1]/div/div[1]/ul/li[3]/button/span');
  await expect(halfofhour).toContainText('30m');
  // 1 hour
  const onehour = await page.locator('//div[1]/div[1]/div/div[2]/div/div[3]/div/div/div[1]/div[2]/div[1]/div/div[1]/ul/li[4]/button/span');
  await expect(onehour).toContainText('1h');
  //1day
  const oneday = await page.locator('//div[1]/div[1]/div/div[2]/div/div[3]/div/div/div[1]/div[2]/div[1]/div/div[1]/ul/li[5]/button/span');
  await expect(oneday).toBeVisible();
  //Week
  await page.locator('//div[1]/div[1]/div/div[2]/div/div[3]/div/div/div[1]/div[2]/div[1]/div/div[1]/ul/li[7]/button/button/span').click();
  await page.locator('text = Month').click();

  //Month
  await page.locator('//div[1]/div[1]/div/div[2]/div/div[3]/div/div/div[1]/div[2]/div[1]/div/div[1]/ul/li[7]/button/button/span').click();
  await page.locator('text = Month').click();

  // dd timeframe and 2 hour
  await page.locator('//div[1]/div[1]/div/div[2]/div/div[3]/div/div/div[1]/div[2]/div[1]/div/div[1]/ul/li[7]/button/button/span').click();
  const ddtf = page.locator('text = 1 minute');
  await expect(ddtf).toBeVisible();
   await page.locator('//div[1]/div[5]/div[4]/button[8]/span[1]').click();











}); 
