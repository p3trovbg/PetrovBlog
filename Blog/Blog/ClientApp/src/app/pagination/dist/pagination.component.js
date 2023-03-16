"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PaginationComponent = void 0;
var core_1 = require("@angular/core");
var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.pageChanged = new core_1.EventEmitter();
    }
    PaginationComponent.prototype.ngOnInit = function () {
        this.onPageChange(this.currentPage);
    };
    PaginationComponent.prototype.onPageChange = function (page) {
        this.pageChanged.emit(page);
    };
    Object.defineProperty(PaginationComponent.prototype, "isHasPrevious", {
        get: function () {
            return this.currentPage > 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "isHasNext", {
        get: function () {
            return this.currentPage < this.totalPages;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "next", {
        get: function () {
            return this.currentPage + 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PaginationComponent.prototype, "previous", {
        get: function () {
            return this.currentPage - 1;
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        core_1.Input()
    ], PaginationComponent.prototype, "currentPage");
    __decorate([
        core_1.Input()
    ], PaginationComponent.prototype, "totalPages");
    __decorate([
        core_1.Output()
    ], PaginationComponent.prototype, "pageChanged");
    PaginationComponent = __decorate([
        core_1.Component({
            selector: 'app-pagination',
            templateUrl: './pagination.component.html',
            styleUrls: ['./pagination.component.css']
        })
    ], PaginationComponent);
    return PaginationComponent;
}());
exports.PaginationComponent = PaginationComponent;
