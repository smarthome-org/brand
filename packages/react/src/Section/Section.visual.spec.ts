/*
 * Do not modify this file directly.
 * This file was generated by: playwright.generate-tests.ts.
 * Regenerate using: npm run test:visual:generate
 */
import {test, expect} from '@playwright/test'

// eslint-disable-next-line i18n-text/no-en
test.describe('Visual Comparison: Section', () => {
  test('Section / Default', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-section--default&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Section / Playground', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-section--playground&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Section / Default Padding', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-section-features--default-padding&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Section / Padding Variants', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-section-features--padding-variants&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Section / Independent Padding', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-section-features--independent-padding&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Section / Responsive Padding', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-section-features--responsive-padding&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Section / With Full Width Container', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-section-features--with-full-width-container&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Section / Background Color', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-section-features--background-color&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Section / Custom Background Color', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-section-features--custom-background-color&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Section / Responsivem Background Color', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-section-features--responsivem-background-color&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Section / Background Image', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-section-features--background-image&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Section / Multiple Background Images', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-section-features--multiple-background-images&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Section / Rounded', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-section-features--rounded&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })
})
