import { BasePage, IdentificationType } from "./BasePage";
import { browser } from "protractor";


const Locators = {
    BtnBankLogin: {
        type: IdentificationType[IdentificationType.ButtonText],
        value: 'Bank Manager Login'
    },
    BtnAddCustomer: {
        type: IdentificationType[IdentificationType.ButtonText],
        value: 'Add Customer' 
    },
    TxtFirstName: {
        type: IdentificationType[IdentificationType.Model],
        value: 'fName'
    },
    TxtLastName: {
        type: IdentificationType[IdentificationType.Model],
        value: 'lName'
    },
    TxtPostalCode: {
        type: IdentificationType[IdentificationType.Model],
        value: 'postCd'
    },
    BtnSaveCustomer: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//form/button'
    }
};

export class AccountPage extends BasePage {

    async clickManagerLoginBtn() {
        await this.ElementLocator(Locators.BtnBankLogin).click();
    }

    async clickAddCutomerBtn() {
        await this.ElementLocator(Locators.BtnAddCustomer).click();
    }
    async EnterFirstName(name: string) {
        await this.ElementLocator(Locators.TxtFirstName).sendKeys(name);
    }
    async EnterLastName(lastName: string) {
        await this.ElementLocator(Locators.TxtLastName).sendKeys(lastName);
    }
    async EnterPostalCode(code: string) {
        await this.ElementLocator(Locators.TxtPostalCode).sendKeys(code);
    }

    async clickSaveCustomer() {
        await this.ElementLocator(Locators.BtnSaveCustomer).click();
        var alert = browser.switchTo().alert();
       await  alert.accept();
    }
}