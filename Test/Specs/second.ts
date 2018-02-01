import { browser, Config, element, by, $$, $ } from 'protractor';
import { AccountPage } from '../Pages/AccountPage';
import { config } from '../config';
import { WebElement } from 'selenium-webdriver';
import { WebElementLocator } from '../Utilities/WebElementLocator';

describe("check Protractor locators", async () => {

    const exp = async () => {
        var a = 12;
        await expect(a).toBe(a);
    }

    afterAll(function (done) {
        process.nextTick(done);
    });
    var login = new AccountPage();
    it('Login Into Account', async () => {
        await browser.get(config.baseUrl);
        await element(by.buttonText('Customer Login')).click();
        await WebElementLocator.getDropDownByID('userSelect','Harry Potter');
        await exp();
        browser.sleep(3000);
    });

});