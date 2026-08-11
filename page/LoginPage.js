import { expect } from 'allure-playwright'
import BaseClass from './BaseClass'
import logger from '../utils/Logger'
//import { Titles } from '../constants/Titles'

export default class LoginPage extends BaseClass {

    constructor(page) {
        super(page)

        this.loginEmailAddress = "[data-qa='login-email']"
        this.loginPassword = "[data-qa='login-password']"
        this.loginButton = "[data-qa='login-button']"
        this.loginSectionHeading = ".login-form h2"
        this.loginError = "Your email or password is incorrect!"
    }

    async getLoginPageTitle()
    {
        logger.info("Getting Page Title")
       return await this.getTitle()
    }

    async verifyLoginPageTitle(value) {
        await expect(await this.getTitle()).toBe(value)
    }

    async loginToApplication(userName, password)
    {
        logger.info(`Entering Username : ${userName}`)
        await this.fill(this.loginEmailAddress, userName)
        logger.info(`Entering Password : ${password}`)
        await this.fill(this.loginPassword, password)
        logger.info("Clicking on Login Button")
        await this.click(this.loginButton)
    }
    async verifyLoginSection(value)
    {
        logger.info(`Verify the Login Section Heading : ${value}`)
        await expect(await this.getText(this.loginSectionHeading)).toBe(value)
    }

    async isLoginErrorVisible()
    {
        logger.info("Checking Login page error")
       return await this.isTextVisible(this.loginError)
    }


}