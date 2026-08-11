import { expect } from 'allure-playwright'
import BaseClass from './BaseClass'
import Logger from '../utils/Logger'

export default class DeleteAccountPage extends BaseClass{

    constructor(page)
    {
        super(page)
        this.accountDeleted = "[data-qa='account-deleted'] b"
    }

    async isAccountDeletedVisible()
    {
        Logger.info("Checking Account Deleted Message")
        return await this.isVisible(this.accountDeleted)
    }
}