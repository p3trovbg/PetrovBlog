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
exports.CreatePostComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var CreatePostComponent = /** @class */ (function () {
    function CreatePostComponent(router, fb, postService) {
        this.router = router;
        this.fb = fb;
        this.postService = postService;
        this.errorMessage = '';
        this.selectedImageIdx = 0;
        this.imageFiles = [];
        this.imageUrls = [];
        this.createForm = this.fb.group({
            'title': ['', [forms_1.Validators.required]],
            'content': ['', [forms_1.Validators.required]],
            'mainImage': ['', [forms_1.Validators.required]],
            'images': [''],
            'videos': ['']
        });
    }
    CreatePostComponent.prototype.createPost = function () {
        // this.createForm.get('images')?.setValue(this.imageFiles);
        var _this = this;
        var _a;
        var newPost = new FormData();
        newPost.append('title', this.createForm.value.title);
        newPost.append('content', this.createForm.value.content);
        newPost.append('mainImage', this.createForm.value.mainImage);
        (_a = this.imageFiles) === null || _a === void 0 ? void 0 : _a.forEach(function (image) {
            if (_this.imageFiles[_this.selectedImageIdx] !== image) {
                newPost.append('images', image);
            }
        });
        this.postService.add(newPost)
            .subscribe(function (postId) { return _this.router.navigateByUrl("/detail/" + postId); });
    };
    CreatePostComponent.prototype.mainImageHandle = function (url) {
        var _a, _b;
        this.selectedElement = url;
        var currentIndex = (_a = this.imageUrls) === null || _a === void 0 ? void 0 : _a.indexOf(url);
        this.selectedImageIdx = currentIndex;
        var currentFile = this.imageFiles[currentIndex];
        (_b = this.createForm.get('mainImage')) === null || _b === void 0 ? void 0 : _b.setValue(currentFile);
    };
    CreatePostComponent.prototype.onFileChange = function (event) {
        var _this = this;
        __spreadArrays(event.target.files).forEach(function (file) {
            var _a;
            (_a = _this.imageFiles) === null || _a === void 0 ? void 0 : _a.push(file);
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function (_event) {
                var _a;
                (_a = _this.imageUrls) === null || _a === void 0 ? void 0 : _a.push(reader.result);
            };
        });
    };
    CreatePostComponent.prototype.isSelected = function (element) {
        return element == this.selectedElement;
    };
    Object.defineProperty(CreatePostComponent.prototype, "username", {
        get: function () {
            return this.createForm.get('title');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreatePostComponent.prototype, "content", {
        get: function () {
            return this.createForm.get('content');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreatePostComponent.prototype, "mainImage", {
        get: function () {
            return this.createForm.get('mainImage');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreatePostComponent.prototype, "images", {
        get: function () {
            return this.createForm.get('images');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreatePostComponent.prototype, "videos", {
        get: function () {
            return this.createForm.get('videos');
        },
        enumerable: false,
        configurable: true
    });
    CreatePostComponent = __decorate([
        core_1.Component({
            selector: 'app-create-post',
            templateUrl: './create-post.component.html',
            styleUrls: ['./create-post.component.css']
        })
    ], CreatePostComponent);
    return CreatePostComponent;
}());
exports.CreatePostComponent = CreatePostComponent;
