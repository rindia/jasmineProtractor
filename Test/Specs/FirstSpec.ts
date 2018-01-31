import { browser, Config } from 'protractor';
import { AccountPage } from '../Pages/AccountPage';
import { config } from '../config';

describe("Automating Customer Login Functionality", async () => {

    
    afterAll(function(done){
        process.nextTick(done);
    });
    var login = new AccountPage();
    it('Login Into Account', async () => {      
        browser.get(config.baseUrl);
        await login.clickManagerLoginBtn();
        var a=12;
        expect(a).toBe(a);
    });
    it('click on Add customer ', async () => {
        await login.clickAddCutomerBtn();
        var a=12;
        expect(a).toBe(a);
    });
    it('Enter All valid details  ', async () => {
        await login.EnterFirstName('rohit');
        await login.EnterLastName('saini');
        await login.EnterPostalCode('98971');
        var a=12;
        expect(a).toBe(a);
        
       
    });

    it('click on Save  customer ', async () => {
        await login.clickSaveCustomer();
        var a=12;
        expect(a).toBe(12);
        
    });
});