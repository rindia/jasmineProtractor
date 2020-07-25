import { browser, $ } from "protractor";

describe('first test case', async () => {

    it('open first URL', async () => {
        await browser.manage().window().maximize();
        await browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
        await $('div.center').click();
        await browser.sleep(5000);
        await $('div.center').click();
    });
});