import { test, expect } from '../fixtures/Fixture'
import { Titles } from '../constants/Titles'
import { Messages } from '../constants/Messages'
import TestData from '../testData/users.json'

test("TC06-Contact Us Form", async ({ page, homePage, contactUsPage }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' })
    expect(await homePage.getHomePageTitle()).toBe(Titles.HomePageTitle)
    await homePage.clickContactUsButton()
    expect(await contactUsPage.getContactUsPageTitle()).toBe(Titles.ContactUsPageTitle)
    await contactUsPage.fillContactUsForm(TestData.contactUsForm.name, TestData.contactUsForm.email,
        TestData.contactUsForm.subject, TestData.contactUsForm.message, "testData\\uploadDocument.txt")
    await contactUsPage.handlingDialog("accept", "")


})