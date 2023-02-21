"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var app_routing_module_1 = require("./app-routing.module");
var icon_1 = require("@angular/material/icon");
var app_component_1 = require("./app.component");
var nav_menu_component_1 = require("./nav-menu/nav-menu.component");
var home_component_1 = require("./home/home.component");
var posts_component_1 = require("./posts/posts.component");
var about_me_component_1 = require("./about-me/about-me.component");
var login_component_1 = require("./login/login.component");
var side_bar_component_1 = require("./side-bar/side-bar.component");
var post_details_component_1 = require("./post-details/post-details.component");
var auth_interceptor_1 = require("./common/auth-interceptor");
var ng_image_slider_1 = require("ng-image-slider");
var animations_1 = require("@angular/platform-browser/animations");
var common_1 = require("@angular/common");
var create_post_component_1 = require("./create-post/create-post.component");
var edit_post_component_1 = require("./edit-post/edit-post.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                nav_menu_component_1.NavMenuComponent,
                home_component_1.HomeComponent,
                posts_component_1.PostsComponent,
                about_me_component_1.AboutMeComponent,
                login_component_1.LoginComponent,
                side_bar_component_1.SideBarComponent,
                post_details_component_1.PostDetailsComponent,
                create_post_component_1.CreatePostComponent,
                edit_post_component_1.EditPostComponent
            ],
            imports: [
                icon_1.MatIconModule,
                common_1.CommonModule,
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.ReactiveFormsModule,
                ng_image_slider_1.NgImageSliderModule,
                animations_1.BrowserAnimationsModule
            ],
            providers: [
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: auth_interceptor_1.AuthInterceptor,
                    multi: true
                }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
