import { element, by } from 'protractor';

export class WebElementLocator {

    static async  getOptions() {
        return element.all(by.tagName('option'));
    }
    static async getDropDownByID(id, text) {

        await element(by.id(id)).all(by.cssContainingText('option', text)).click();

    }
    static  selectByValue(value) {
        return element.all(by.css('option[value="' + value + '"]')).click();
    }

    static async getSelectedOptions() {
        
        return element.all(by.css('option[selected="selected"]'));
    }

    static async selectByPartialText(text) {
        return element.all(by.cssContainingText('option', text)).click();
    }

    static async selectByText(text) {
        return element.all(by.xpath('option[.="' + text + '"]')).click();
    }

    static async ngclick(method:string)
    {
      await  element(by.css('[ng-click="'+method+'"]')).click();
    }

}