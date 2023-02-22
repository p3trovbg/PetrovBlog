"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostService = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var global_component_1 = require("../global-component");
var PostService = /** @class */ (function () {
    function PostService(httpClient) {
        this.httpClient = httpClient;
        this.url = '/post/';
        this.allUrl = '/post/all';
        this.HttpUploadOptions = {
            headers: new http_1.HttpHeaders({ "Content-Type": "multipart/form-data" })
        };
    }
    PostService.prototype.getById = function (id) {
        return this.httpClient.get(global_component_1.GlobalComponent.appUrl + this.url + id);
    };
    PostService.prototype.all = function () {
        return this.httpClient.get(global_component_1.GlobalComponent.appUrl + this.allUrl);
    };
    PostService.prototype.add = function (newPost) {
        var result = this.httpClient.post(global_component_1.GlobalComponent.appUrl + this.url + 'add', newPost)
            .pipe(rxjs_1.map(function (response) { return response.id; }));
        return result;
    };
    PostService.prototype.edit = function (editPost) {
        return this.httpClient.put(global_component_1.GlobalComponent.appUrl + this.url, editPost);
    };
    PostService.prototype["delete"] = function (id) {
        return this.httpClient["delete"](global_component_1.GlobalComponent.appUrl + this.url + id);
    };
    PostService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], PostService);
    return PostService;
}());
exports.PostService = PostService;
