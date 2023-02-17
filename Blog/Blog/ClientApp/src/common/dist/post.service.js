"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostService = void 0;
var core_1 = require("@angular/core");
var PostService = /** @class */ (function () {
    function PostService(httpClient) {
        this.httpClient = httpClient;
        this.postByIdUrl = '/post/get/';
        this.allUrl = '/post/all';
        this.addPostUrl = '/post/add';
        this.editPostUrl = '/post/edit';
        this.deletePostUrl = '/post/delete';
    }
    PostService.prototype.getById = function (id) {
        return this.httpClient.get(this.postByIdUrl + id);
    };
    PostService.prototype.all = function () {
        return this.httpClient.get(this.allUrl);
    };
    PostService.prototype.add = function (newPost) {
        return this.httpClient.post(this.addPostUrl, newPost);
    };
    PostService.prototype.edit = function (editPost) {
        return this.httpClient.put(this.addPostUrl, editPost);
    };
    PostService.prototype["delete"] = function (id) {
        return this.httpClient["delete"](this.deletePostUrl);
    };
    PostService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], PostService);
    return PostService;
}());
exports.PostService = PostService;
