import { test, expect } from '../fixtures/Fixture'
import { Titles } from '../constants/Titles'
import { Messages } from '../constants/Messages'
import TestData from '../testData/users.json'

test('TC04-Logout', async({page, homePage, loginPage})=>
{
    await page.goto("/")
    expect(await homePage.getHomePageTitle()).toBe(Titles.HomePageTitle)
    await homePage.clickSignupLoginButton()
    await loginPage.verifyLoginSection(Messages.loginSectionHeading)
    await loginPage.loginToApplication(TestData.alwaysWork.username, TestData.alwaysWork.password)
    expect(await homePage.isLoggedInAsVisible()).toBeTruthy()
    await homePage.logoutApplication()
    expect(await loginPage.getLoginPageTitle()).toBe(Titles.SignupLoginTitle)
})