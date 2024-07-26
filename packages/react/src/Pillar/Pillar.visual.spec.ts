/*
 * Do not modify this file directly.
 * This file was generated by: playwright.generate-tests.ts.
 * Regenerate using: npm run test:visual:generate
 */
import {test, expect} from '@playwright/test'

// eslint-disable-next-line i18n-text/no-en
test.describe('Visual Comparison: Pillar', () => {
  test('Pillar / Default', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-pillar--default&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Pillar / Playground', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-pillar--playground&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Pillar / Icon', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-pillar-features--icon&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Pillar / Icon Colors', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-pillar-features--icon-colors&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Pillar / Icon (native)', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-pillar-features--with-icon-svg&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Pillar / Link', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-pillar-features--link&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Pillar / Stacked', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-pillar-features--stacked&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Pillar / Stacked Centered', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-pillar-features--stacked-centered&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Pillar / Stacked With Link', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-pillar-features--stacked-with-link&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })
})
