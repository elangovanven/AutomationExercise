

export default class BasePage {

    constructor(page) {
        this.page = page
    }

    async click(locator) {
        await this.page.locator(locator).click()
    }

    async fill(locator, text) {
        await this.page.locator(locator).fill(text)
    }
    async pressSequentially(locator, value) {
        await this.page.locator(locator).pressSequentially(value)
    }

    async getTitle() {
        return await this.page.title()
    }

    async waitForElement(locator) {
        await this.page.locator(locator).waitFor()

    }
    async getText(locator) {
        return await this.page.locator(locator).textContent()
    }

    async selectDropdown(locator, option) {
        await this.page.locator(locator).selectOption(option)
    }

    async check(locator) {
        await this.page.locator(locator).check()
    }
    async doubleClick(locator) {
        await this.page.locator(locator).dblclick()
    }

    async focus(locator) {
        await this.page.locator(locator).focus()
    }
    async getAttribute(locator, name) {
        return await this.page.locator(locator).getAttribute(name)

    }
    async hover(locator) {
        await this.page.locator(locator).hover()
    }
    async inputValue(locator) {
        return await this.page.locator(locator).inputValue();
    }

    async isChecked(locator) {
        return await this.page.locator(locator).isChecked()
    }

    async isDisabled(locator) {
        return await this.page.locator(locator).isDisabled()
    }
    async isEditable(locator) {
        return await this.page.locator(locator).isEditable()
    }
    async isEnabled(locator) {
        return await this.page.locator(locator).isEnabled()
    }
    async isHidden(locator) {
        return await this.page.locator(locator).isHidden()
    }
    async isVisible(locator) {
        return await this.page.locator(locator).isVisible()
    }

    async isTextVisible(text) {
        return await this.page.getByText(text).isVisible()
    }
    async dragAndDrop(sourceLocator, targetLocator) {
        await this.page.dragAndDrop(sourceLocator, targetLocator)
    }
    async screenshot(fileName) {
        await this.page.screenshot({ path: fileName })
    }
    async locatorScreenshot(locator, fileName) {
        await this.page.locator(locator).screenshot({ path: fileName })
    }
    async uncheck(locator) {
        await this.page.locator(locator).uncheck();
    }

    async waitForPageLoad() {
        await this.page.waitForLoadState('networkidle')

    }

    async uploadFile(locator, filePath) {
        await this.page.locator(locator).setInputFiles(filePath);
    }

    async handleDialog(action = 'accept', promptText = '') {

        this.page.once('dialog', async dialog => {

            console.log('Dialog type:', dialog.type());
            console.log('Dialog message:', dialog.message());

            if (action === 'accept') {
                await dialog.accept();
            }
            else if (action === 'dismiss') {
                await dialog.dismiss();
            }
            else if (action === 'prompt') {
                await dialog.accept(promptText);
            }
        });
    }
}