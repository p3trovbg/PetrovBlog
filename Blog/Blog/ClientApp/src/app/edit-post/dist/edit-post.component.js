"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.EditPostComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var EditPostComponent = /** @class */ (function () {
    function EditPostComponent(contentService, router, route, fb, postService) {
        this.contentService = contentService;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.postService = postService;
        this.errorMessage = '';
        this.isLoading = false;
        this.imageUrls = [];
        this.newImagesFile = [];
        this.editForm = this.fb.group({
            'id': [],
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
                id: _this.targetPost.id,
                title: (_a = _this.targetPost) === null || _a === void 0 ? void 0 : _a.title,
                content: (_b = _this.targetPost) === null || _b === void 0 ? void 0 : _b.content,
                mainImage: (_c = _this.targetPost) === null || _c === void 0 ? void 0 : _c.mainImageUrl,
                images: (_d = _this.targetPost) === null || _d === void 0 ? void 0 : _d.images,
                videos: (_e = _this.targetPost) === null || _e === void 0 ? void 0 : _e.videos
            });
        });
    };
    EditPostComponent.prototype.editPost = function () {
        var _this = this;
        var _a, _b, _c, _d;
        (_a = this.editForm.get('images')) === null || _a === void 0 ? void 0 : _a.setValue((_b = this.targetPost) === null || _b === void 0 ? void 0 : _b.images);
        (_c = this.editForm.get('mainImage')) === null || _c === void 0 ? void 0 : _c.setValue((_d = this.targetPost) === null || _d === void 0 ? void 0 : _d.mainImageUrl);
        this.isLoading = true;
        this.postService.edit(this.editForm).subscribe({
            next: function (postId) {
                _this.router.navigate(['/detail/', postId]);
                _this.isLoading = false;
            },
            error: function (er) { return _this.errorMessage = 'Invalid edit'; }
        });
    };
    ;
    EditPostComponent.prototype.removeImageHandle = function (targetImage) {
        var _this = this;
        this.contentService.deleteImage(targetImage.id).subscribe(function () {
            var _a;
            var result = (_a = _this.targetPost) === null || _a === void 0 ? void 0 : _a.images.filter(function (image) { return image.id != targetImage.id; });
            _this.targetPost.images = result;
        });
    };
    EditPostComponent.prototype.mainImageHandle = function (image) {
        var _a;
        var lastedImageUrl = (_a = this.targetPost) === null || _a === void 0 ? void 0 : _a.mainImageUrl;
        this.targetPost.mainImageUrl = image.url;
        image.url = lastedImageUrl;
    };
    EditPostComponent.prototype.onFileChange = function (event) {
        var _this = this;
        this.contentService.uploadImages(__spreadArrays(event.target.files))
            .subscribe(function (x) {
            var _a;
            var _b;
            return (_b = _this.targetPost) === null || _b === void 0 ? void 0 : (_a = _b.images).push.apply(_a, x);
        });
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
