import { element, by } from 'protractor';


export  enum IdentificationType {

    Xpath,
    Css,
    Id,
    Name,
    PartialLinkText,
    ButtonText,
    Model,
    ClassName,
    Binding,
    LinkText
}

export class BasePage {
    
   
  protected  ElementLocator(obj:any) {
        switch (obj.type) {
            case IdentificationType[IdentificationType.Css]:
                return element(by.css(obj.value));
            case IdentificationType[IdentificationType.Xpath]:
                return element(by.xpath(obj.value));
                case IdentificationType[IdentificationType.Id]:
                return element(by.id(obj.value));
                case IdentificationType[IdentificationType.Name]:
                return element(by.name(obj.value));
                case IdentificationType[IdentificationType.ButtonText]:
                return element(by.buttonText(obj.value));
                case IdentificationType[IdentificationType.Model]:
                return element(by.model(obj.value));
                case IdentificationType[IdentificationType.Binding]:
                return element(by.binding(obj.value));
                case IdentificationType[IdentificationType.LinkText]:
                return element(by.linkText(obj.value));
                case IdentificationType[IdentificationType.PartialLinkText]:
                return element(by.partialLinkText(obj.value));
            default:
                break;
        }
    }
}