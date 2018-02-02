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
        await WebElementLocator.getDropDownByID('userSelect', 'Harry Potter');
        await element(by.buttonText('Login')).click();
        await WebElementLocator.getDropDownByID('accountSelect', '1005');
        await element.all(by.xpath('/html/body/div/div/div[2]/div/div[2]/strong[1]')).getText().then((text)=>{
             
            expect(text).toContain("1005");
        });
     
        await element(by.css('[ng-click="deposit()"]')).click();
        await element(by.model('amount')).sendKeys(2000);
        await element(by.xpath('/html/body/div/div/div[2]/div/div[4]/div/form/button')).click();
        await exp();
        
        browser.sleep(3000);
    });

});