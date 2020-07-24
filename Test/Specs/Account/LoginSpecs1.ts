import { LoginPage } from "../../Pages/Account/LoginPage";
import { browser } from "protractor";
import { config } from '../../config';
import { fail } from "assert";



const exp = async () => {
    var a = 12;
    await expect(a).toBe(a);
}

describe('check Login functionality is Working - Positve Test Input', async () => {
    var login = new LoginPage();
    it('When I Open Page and click on SignIn Link', async () => {
        await browser.get(config.baseUrl);
        await login.clickSignInLink();
        await browser.manage().timeouts().implicitlyWait(4000)


    });
    it('Then I Enter Email ID', async () => {

        await login.enterEmailAddress('runable.om@gmail.com');

        await exp();
    });
    it('Then I Enter password', async () => {
        await login.enterPassword('sainix');
        await exp();
    });
    it('And I Click On Sign In Button', async () => {
        await login.clickSignBtn();
         fail('hardcode failes', 'failing'); 
        await exp(); 

    });
});