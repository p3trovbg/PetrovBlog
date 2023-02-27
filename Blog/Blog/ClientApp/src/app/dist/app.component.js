"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var animations_1 = require("./animations");
var AppComponent = /** @class */ (function () {
    function AppComponent(contexts) {
        this.contexts = contexts;
        this.title = 'app';
    }
    AppComponent.prototype.getRouteAnimationData = function () {
        var _a, _b, _c, _d;
        var result = (_d = (_c = (_b = (_a = this.contexts.getContext('primary')) === null || _a === void 0 ? void 0 : _a.route) === null || _b === void 0 ? void 0 : _b.snapshot) === null || _c === void 0 ? void 0 : _c.data) === null || _d === void 0 ? void 0 : _d['animation'];
        return result;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css'],
            animations: [
                animations_1.slideInAnimation
            ]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
