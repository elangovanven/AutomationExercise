import { test as base, expect } from '@playwright/test'
import HomePage from '../page/HomePage'
import LoginPage from '../page/LoginPage'
import DeleteAccountPage from '../page/DeleteAccountPage'
import ContactUsPage from '../page/ContactsUsPage'


const test = base.extend({

    loginPage: async ({ page }, use) => {

        const loginPage = new LoginPage(page)

        await use(loginPage)
    },

    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page)
        await use(homePage)
    },

     deleteAccountPage: async ({ page }, use) => {
        const deleteAccountPage = new DeleteAccountPage(page)
        await use(deleteAccountPage)
    },

    contactUsPage: async ({ page }, use) => {
        const contactUsPage = new ContactUsPage(page)
        await use(contactUsPage)
    }


})
export {test, expect}