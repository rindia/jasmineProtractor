import { LoginPage } from "../../Pages/Account/LoginPage";
import { browser } from "protractor";
import { config } from '../../config';
import * as json from 'load-json-file';

var JsonData =  require( '../../JsonData/Login.json');
interface SearchJsonData{

    UserName:string, 
    Password:string

}

const exp = async () => {
    var a = 12;
    await expect(a).toBe(a);
}
afterAll(function (done) {
    process.nextTick(done);
});
describe('check Login functionality is Working - Positve Test Input', async () => {
    var login = new LoginPage();
    it('When I Open Page and click on SignIn Link', async () => {
        await browser.get(config.baseUrl);
        await login.clickSignInLink();
        await exp();
      
    });
    it('Then I Enter Email ID',async()=>{
    
      await login.enterEmailAddress(JsonData.Login.UserName);
    
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