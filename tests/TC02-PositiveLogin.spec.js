import { test, expect } from '../fixtures/Fixture'
import { Titles } from '../constants/Titles'
import { Messages } from '../constants/Messages'
import TestData from '../testData/users.json'

test("TC01-PositiveLogin", async ({ page, homePage, loginPage, deleteAccountPage }) => {
    //Launch URL
    await page.goto('/')

    expect(await homePage.getHomePageTitle()).toBe(Titles.HomePageTitle)
    await homePage.clickSignupLoginButton()
    await loginPage.verifyLoginSection(Messages.loginSectionHeading)
    await loginPage.loginToApplication(TestData.positiveData.username, TestData.positiveData.password)
    expect(await homePage.isLoggedInAsVisible()).toBeTruthy()
    await homePage.deleteAccount()
    expect(await deleteAccountPage.isAccountDeletedVisible()).toBeTruthy()
})