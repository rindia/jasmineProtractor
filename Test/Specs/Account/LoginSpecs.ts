import { LoginPage } from "../../Pages/Account/LoginPage";
import { browser } from "protractor";
import { config } from '../../config';


const exp = async () => {
    var a = 12;
    await expect(a).toBe(a);
}
afterAll(function (done) {
    process.nextTick(done);
});
describe('check Login functionality is Working', async () => {
    var login = new LoginPage();
    it('When I Open Page and click on SignIn Link', async () => {
        await browser.get(config.baseUrl);
        await login.clickSignInLink();
        await exp();
    });
    it('Then I Enter Email ID',async()=>{
      await login.enterEmailAddress('rohit.saini.uk@gmail.com');
      await exp();
    });
    it('Then I Enter password', async ()=>{
        await login.enterPassword('sainix');
        await exp();
    });
 it('And I Click On Sign In Button',async ()=>{
      await login.clickSignBtn();
      await exp();
      browser.sleep(5000);
 });
});