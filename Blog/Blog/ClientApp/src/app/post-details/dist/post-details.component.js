"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PostDetailsComponent = void 0;
var core_1 = require("@angular/core");
var PostDetailsComponent = /** @class */ (function () {
    function PostDetailsComponent(activatedRoute, router, postService, loginService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.postService = postService;
        this.loginService = loginService;
        this.postId = this.activatedRoute.snapshot.paramMap.get('id');
    }
    Object.defineProperty(PostDetailsComponent.prototype, "isLogin", {
        get: function () {
            return this.loginService.isLogged;
        },
        enumerable: false,
        configurable: true
    });
    PostDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postService.getById(this.postId)
            .subscribe({
            next: function (post) {
                _this.post = post;
                _this.post.images.map(function (x) {
                    x.image = x.url,
                        x.thumbImage = x.url;
                });
            },
            error: function (err) { return _this.errorMessage = err.error; }
        });
    };
    PostDetailsComponent.prototype.deleteHandle = function (id) {
        var _this = this;
        this.postService["delete"](id)
            .subscribe(function () { return _this.router.navigateByUrl('/posts'); });
    };
    PostDetailsComponent = __decorate([
        core_1.Component({
            selector: 'app-post-details',
            templateUrl: './post-details.component.html',
            styleUrls: ['./post-details.component.css']
        })
    ], PostDetailsComponent);
    return PostDetailsComponent;
}());
exports.PostDetailsComponent = PostDetailsComponent;
