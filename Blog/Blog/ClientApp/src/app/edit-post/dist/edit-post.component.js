"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EditPostComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var EditPostComponent = /** @class */ (function () {
    function EditPostComponent(router, route, fb, postService) {
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.postService = postService;
        this.errorMessage = '';
        this.isLoading = false;
        this.imageUrls = [];
        this.editForm = this.fb.group({
            'title': ['', [forms_1.Validators.required]],
            'content': ['', [forms_1.Validators.required]],
            'mainImage': ['', [forms_1.Validators.required]],
            'images': [''],
            'videos': ['']
        });
    }
    EditPostComponent.prototype.ngOnInit = function () {
        this.getPost();
    };
    EditPostComponent.prototype.getPost = function () {
        var _this = this;
        var postId = this.route.snapshot.paramMap.get('id');
        if (postId == null) {
            return;
        }
        this.postService.getById(postId)
            .subscribe(function (post) {
            var _a, _b, _c, _d, _e;
            _this.targetPost = post;
            _this.editForm.setValue({
                title: (_a = _this.targetPost) === null || _a === void 0 ? void 0 : _a.title,
                content: (_b = _this.targetPost) === null || _b === void 0 ? void 0 : _b.content,
                mainImage: (_c = _this.targetPost) === null || _c === void 0 ? void 0 : _c.mainImageUrl,
                images: (_d = _this.targetPost) === null || _d === void 0 ? void 0 : _d.images,
                videos: (_e = _this.targetPost) === null || _e === void 0 ? void 0 : _e.videos
            });
        });
    };
    EditPostComponent.prototype.editPost = function () { };
    EditPostComponent.prototype.mainImageHandle = function (image) {
        var _a;
        this.targetPost.mainImageUrl = image;
        (_a = this.editForm.get('mainImage')) === null || _a === void 0 ? void 0 : _a.setValue(image);
    };
    EditPostComponent.prototype.onFileChange = function (event) {
    };
    EditPostComponent.prototype.isSelected = function (image) {
        var _a;
        return image === ((_a = this.targetPost) === null || _a === void 0 ? void 0 : _a.mainImageUrl);
    };
    Object.defineProperty(EditPostComponent.prototype, "username", {
        get: function () {
            return this.editForm.get('title');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditPostComponent.prototype, "content", {
        get: function () {
            return this.editForm.get('content');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditPostComponent.prototype, "mainImage", {
        get: function () {
            return this.editForm.get('mainImage');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditPostComponent.prototype, "images", {
        get: function () {
            return this.editForm.get('images');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditPostComponent.prototype, "videos", {
        get: function () {
            return this.editForm.get('videos');
        },
        enumerable: false,
        configurable: true
    });
    EditPostComponent = __decorate([
        core_1.Component({
            selector: 'app-edit-post',
            templateUrl: './edit-post.component.html',
            styleUrls: ['./edit-post.component.css']
        })
    ], EditPostComponent);
    return EditPostComponent;
}());
exports.EditPostComponent = EditPostComponent;
