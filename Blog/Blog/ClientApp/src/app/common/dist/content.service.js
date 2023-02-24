"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ContentService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var global_component_1 = require("../global-component");
var ContentService = /** @class */ (function () {
    function ContentService(httpClient) {
        this.httpClient = httpClient;
        this.imageUrl = '/content';
        this.HttpUploadOptions = {
            headers: new http_1.HttpHeaders({ "Content-Type": "undefined" })
        };
    }
    ContentService.prototype.uploadImages = function (contentFiles) {
        var form = new FormData();
        contentFiles.forEach(function (file) {
            form.append('contentFiles', file);
        });
        return this.httpClient.post(global_component_1.GlobalComponent.appUrl + this.imageUrl, form);
    };
    ContentService.prototype.deleteImage = function (id) {
        return this.httpClient["delete"](global_component_1.GlobalComponent.appUrl + this.imageUrl + ("/" + id));
    };
    ContentService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ContentService);
    return ContentService;
}());
exports.ContentService = ContentService;
