import { test as base, expect } from '@playwright/test'
import HomePage from '../page/HomePage'
import LoginPage from '../page/LoginPage'
import DeleteAccountPage from '../page/DeleteAccountPage'


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
    }


})
export {test, expect}