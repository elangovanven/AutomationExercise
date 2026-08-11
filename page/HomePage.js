
import { expect } from 'allure-playwright'
import BaseClass from './BaseClass'
import Logger from '../utils/Logger'
import logger from '../utils/Logger'
export default class HomePage extends BaseClass {

    constructor(page) {

        super(page)

        this.signupLoginButton = "[href*='login']"
        this.homeLink = ".fa-home"
        this.products = "[href='/products']"
        this.viewCart = "li [href='/view_cart']"
        this.loggedInAs = "a .fa-user"
        this.deleteAccountButton = "a[href*='delete_account']"
        this.logout = "[href*='logout']"

    }

    async getHomePageTitle() {
        logger.info("Getting Homepage Title")
        return await this.getTitle()
    }

    async verifyHomePageTitle(value) {
        await expect(this.page).toHaveTitle(value)
    }

    async clickSignupLoginButton() {
        logger.info("Clicking on Signup Login Button")
        await this.click(this.signupLoginButton);
    }

    async isLoggedInAsVisible() {
        logger.info("Checking Logged in As Visible")
        return await this.isVisible(this.loggedInAs)
    }

    async deleteAccount() {
        logger.info("Deleting the Account")
        await this.click(this.deleteAccountButton)
    }

    async logoutApplication() {
        logger.info("Logging out from the application")
        await this.click(this.logout)
    }





}