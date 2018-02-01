"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var AccountPage_1 = require("../Pages/AccountPage");
var config_1 = require("../config");
var WebElementLocator_1 = require("../Utilities/WebElementLocator");
describe("check Protractor locators", function () { return __awaiter(_this, void 0, void 0, function () {
    var _this = this;
    var exp, login;
    return __generator(this, function (_a) {
        exp = function () { return __awaiter(_this, void 0, void 0, function () {
            var a;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        a = 12;
                        return [4 /*yield*/, expect(a).toBe(a)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        afterAll(function (done) {
            process.nextTick(done);
        });
        login = new AccountPage_1.AccountPage();
        it('Login Into Account', function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.get(config_1.config.baseUrl)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.element(protractor_1.by.buttonText('Customer Login')).click()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, WebElementLocator_1.WebElementLocator.getDropDownByID('userSelect', 'Harry Potter')];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.element(protractor_1.by.buttonText('Login')).click()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, WebElementLocator_1.WebElementLocator.getDropDownByID('accountSelect', '1005')];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.element.all(protractor_1.by.xpath('/html/body/div/div/div[2]/div/div[2]/strong[1]')).getText().then(function (text) {
                                expect(text).toContain("1005");
                            })];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.element(protractor_1.by.css('[ng-click="deposit()"]')).click()];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.element(protractor_1.by.model('amount')).sendKeys(2000)];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.element(protractor_1.by.xpath('/html/body/div/div/div[2]/div/div[4]/div/form/button')).click()];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, exp()];
                    case 10:
                        _a.sent();
                        protractor_1.browser.sleep(3000);
                        return [2 /*return*/];
                }
            });
        }); });
        return [2 /*return*/];
    });
}); });
//# sourceMappingURL=second.js.map