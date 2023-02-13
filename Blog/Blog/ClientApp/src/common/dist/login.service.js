"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginService = void 0;
var core_1 = require("@angular/core");
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.tokenName = 'token';
        this.isLogin = false;
        this.url = 'https://localhost:44366/identity/login';
        this.http = http;
    }
    LoginService.prototype.login = function (user) {
        return this.http.post(this.url, user);
    };
    LoginService.prototype.saveToken = function (token) {
        localStorage.setItem(this.tokenName, token);
        this.isLogin = true;
    };
    LoginService.prototype.getToken = function () {
        return localStorage.getItem(this.tokenName);
    };
    LoginService.prototype.logout = function () {
        localStorage.removeItem(this.tokenName);
        this.isLogin = false;
    };
    LoginService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
