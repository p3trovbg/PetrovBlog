"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var about_me_component_1 = require("./about-me/about-me.component");
var create_post_component_1 = require("./create-post/create-post.component");
var edit_post_component_1 = require("./edit-post/edit-post.component");
var home_component_1 = require("./home/home.component");
var login_component_1 = require("./login/login.component");
var post_details_component_1 = require("./post-details/post-details.component");
var posts_component_1 = require("./posts/posts.component");
var routes = [
    { path: '', component: home_component_1.HomeComponent, data: { animation: 'home' } },
    { path: 'posts', component: posts_component_1.PostsComponent, data: { animation: 'posts' } },
    { path: 'about', component: about_me_component_1.AboutMeComponent, data: { animation: 'about' } },
    { path: 'login', component: login_component_1.LoginComponent, data: { animation: 'login' } },
    { path: 'create', component: create_post_component_1.CreatePostComponent, data: { animation: 'create' } },
    { path: 'detail/:id', component: post_details_component_1.PostDetailsComponent, data: { animation: 'detail' } },
    { path: 'edit/:id', component: edit_post_component_1.EditPostComponent, data: { animation: 'edit' } },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
