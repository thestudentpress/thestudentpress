"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var AppMenu = (function () {
    function AppMenu() {
        this.categorySelected = new core_1.EventEmitter();
        this.menuActive = false;
    }
    AppMenu.prototype.onMenuClick = function () {
        this.menuActive = !this.menuActive;
    };
    AppMenu.prototype.onMenuSelect = function (option) {
        this.categorySelected.emit(option);
        this.menuActive = false;
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], AppMenu.prototype, "categorySelected", void 0);
    AppMenu = __decorate([
        core_1.Component({
            selector: 'menu',
            templateUrl: 'templates/menu.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppMenu);
    return AppMenu;
}());
exports.AppMenu = AppMenu;
//# sourceMappingURL=app.menu.js.map