"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostsComponent = void 0;
var core_1 = require("@angular/core");
var PostsComponent = /** @class */ (function () {
    function PostsComponent(loginService, http, postService) {
        this.loginService = loginService;
        this.postService = postService;
        this.posts = [];
        this.http = http;
    }
    Object.defineProperty(PostsComponent.prototype, "isLogin", {
        get: function () {
            return this.loginService.isLogged;
        },
        enumerable: false,
        configurable: true
    });
    PostsComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    PostsComponent.prototype.getAll = function () {
        var _this = this;
        this.postService.all()
            .subscribe(function (posts) { return _this.posts = posts; });
    };
    PostsComponent = __decorate([
        core_1.Component({
            selector: 'app-posts',
            templateUrl: './posts.component.html',
            styleUrls: ['./posts.component.css']
        })
    ], PostsComponent);
    return PostsComponent;
}());
exports.PostsComponent = PostsComponent;
