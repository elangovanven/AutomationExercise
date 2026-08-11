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
        this.uploadFile = "[name='upload_file']"
        this.submit = "[name='submit']"
    }

    
}