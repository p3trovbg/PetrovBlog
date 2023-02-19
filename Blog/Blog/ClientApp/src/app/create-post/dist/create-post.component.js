"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreatePostComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var CreatePostComponent = /** @class */ (function () {
    function CreatePostComponent(fb) {
        this.fb = fb;
        this.errorMessage = '';
        this.createForm = fb.group({
            'title': ['', [forms_1.Validators.required]],
            'content': ['', [forms_1.Validators.required]],
            'mainImage': [''],
            'images': [''],
            'videos': ['']
        });
    }
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
