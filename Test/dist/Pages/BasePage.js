"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var IdentificationType;
(function (IdentificationType) {
    IdentificationType[IdentificationType["Xpath"] = 0] = "Xpath";
    IdentificationType[IdentificationType["Css"] = 1] = "Css";
    IdentificationType[IdentificationType["Id"] = 2] = "Id";
    IdentificationType[IdentificationType["Name"] = 3] = "Name";
    IdentificationType[IdentificationType["PartialLinkText"] = 4] = "PartialLinkText";
    IdentificationType[IdentificationType["ButtonText"] = 5] = "ButtonText";
    IdentificationType[IdentificationType["Model"] = 6] = "Model";
    IdentificationType[IdentificationType["ClassName"] = 7] = "ClassName";
    IdentificationType[IdentificationType["Binding"] = 8] = "Binding";
    IdentificationType[IdentificationType["LinkText"] = 9] = "LinkText";
})(IdentificationType = exports.IdentificationType || (exports.IdentificationType = {}));
var BasePage = /** @class */ (function () {
    function BasePage() {
    }
    BasePage.prototype.ElementLocator = function (obj) {
        switch (obj.type) {
            case IdentificationType[IdentificationType.Css]:
                return protractor_1.element(protractor_1.by.css(obj.value));
            case IdentificationType[IdentificationType.Xpath]:
                return protractor_1.element(protractor_1.by.xpath(obj.value));
            case IdentificationType[IdentificationType.Id]:
                return protractor_1.element(protractor_1.by.id(obj.value));
            case IdentificationType[IdentificationType.Name]:
                return protractor_1.element(protractor_1.by.name(obj.value));
            case IdentificationType[IdentificationType.ButtonText]:
                return protractor_1.element(protractor_1.by.buttonText(obj.value));
            case IdentificationType[IdentificationType.Model]:
                return protractor_1.element(protractor_1.by.model(obj.value));
            case IdentificationType[IdentificationType.Binding]:
                return protractor_1.element(protractor_1.by.binding(obj.value));
            case IdentificationType[IdentificationType.LinkText]:
                return protractor_1.element(protractor_1.by.linkText(obj.value));
            case IdentificationType[IdentificationType.PartialLinkText]:
                return protractor_1.element(protractor_1.by.partialLinkText(obj.value));
            default:
                break;
        }
    };
    return BasePage;
}());
exports.BasePage = BasePage;
//# sourceMappingURL=BasePage.js.map