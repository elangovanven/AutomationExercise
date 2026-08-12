import logger from '../utils/Logger'
import BaseClass from './BaseClass'

export default class ContactUsPage extends BaseClass{

    constructor(page)
    {
        super(page)
        this.getInTouch = "Get In Touch"
        this.name = "[data-qa='name']"
        this.email = "[data-qa='email']"
        this.subject = "[data-qa='subject']"
        this.message = "[data-qa='message']"
        this.uploadFileButton = "[name='upload_file']"
        this.submit = "[name='submit']"

    }

    async uploadDocument(filePath)
    {
        logger.info("Uploading Document")
        await this.uploadFile(this.uploadFileButton, filePath)
    }

    async isGetintouchVisible()
    {
        logger.info("Verifying Get in Touch")
        await this.page.getByText(this.getInTouch)
    }
    async getContactUsPageTitle()
    {
        logger.info("Verifying Contacts Us Page title")
        return await this.getTitle()
    }
    async fillContactUsForm(name, email, subject, message, filePath)
    {

        logger.info("Submitting Contact us Form")
        await this.fill(this.name,name)
        await this.fill(this.email,email)
        await this.fill(this.subject,subject)
        await this.fill(this.message,message)
        await this.uploadFile(this.uploadFileButton, filePath)
        await this.click(this.submit)
    }

    async handlingDialog(action, promptText)
    {
        logger.info("Handling the dialog box")
        await this.handleDialog(action,promptText)
    }
}