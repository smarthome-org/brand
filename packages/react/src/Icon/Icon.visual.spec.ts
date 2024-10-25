/*
 * Do not modify this file directly.
 * This file was generated by: playwright.generate-tests.ts.
 * Regenerate using: npm run test:visual:generate
 */
import {test, expect} from '@playwright/test'

// eslint-disable-next-line i18n-text/no-en
test.describe('Visual Comparison: Icon', () => {
  test('Icon / Playground', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-icon--playground&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot({fullPage: true})).toMatchSnapshot()
  })

  test('Icon / With Background', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-icon-features--with-background&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot({fullPage: true})).toMatchSnapshot()
  })

  test('Icon / Colors', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-icon-features--colors&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot({fullPage: true})).toMatchSnapshot()
  })

  test('Icon / Sizes', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-icon-features--sizes&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot({fullPage: true})).toMatchSnapshot()
  })
})
