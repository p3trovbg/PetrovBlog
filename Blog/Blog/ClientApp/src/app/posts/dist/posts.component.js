"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.PostsComponent = void 0;
var core_1 = require("@angular/core");
var PostsComponent = /** @class */ (function () {
    function PostsComponent(http, baseUrl, loginService) {
        this.isLogin = false;
        this.posts = [];
        this.http = http;
        this.loginService = loginService;
        this.baseUrl = baseUrl;
        this.postsUrl = 'https://localhost:44366/post/all';
    }
    PostsComponent.prototype.ngOnInit = function () {
        if (this.loginService.getToken() != null) {
            this.isLogin = true;
        }
        this.getAll();
    };
    PostsComponent.prototype.getAll = function () {
        var _this = this;
        this.getPosts()
            .subscribe(function (posts) { return _this.posts = posts; });
    };
    PostsComponent.prototype.getPosts = function () {
        return this.http.get(this.postsUrl);
    };
    PostsComponent = __decorate([
        core_1.Component({
            selector: 'app-posts',
            templateUrl: './posts.component.html',
            styleUrls: ['./posts.component.css']
        }),
        __param(1, core_1.Inject('BASE_URL'))
    ], PostsComponent);
    return PostsComponent;
}());
exports.PostsComponent = PostsComponent;
