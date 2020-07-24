import { IdentificationType } from '../../Pages/BasePage';
import { BasePage } from '../BasePage';

const Loctors = {

    SignInLnk: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="header"]/div[2]/div/div/nav/div[1]/a'
    },

    TxtEmail: {
        type: IdentificationType[IdentificationType.Id],
        value: 'email'
    }, 
    TxtPassword: {
        type: IdentificationType[IdentificationType.Id],
        value: 'passwd'
    },
    BtnSignIn: {
        type: IdentificationType[IdentificationType.Id],
        value: 'SubmitLogin'
    }
}

export class LoginPage extends BasePage {

    async clickSignInLink() {
        await this.ElementLocator(Loctors.SignInLnk).click();
    }
    async enterEmailAddress(email: string) {
        await this.ElementLocator(Loctors.TxtEmail).sendKeys(email);
    }

    async enterPassword(pass:string)
    {
        await this.ElementLocator(Loctors.TxtPassword).sendKeys(pass);
    }

    async clickSignBtn()
    {
       await this.ElementLocator(Loctors.BtnSignIn).click();
    }

}