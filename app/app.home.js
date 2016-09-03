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
var piece_1 = require("./piece");
var AppHome = (function () {
    function AppHome() {
        this.menu = false;
        this.sectionHeight = 3;
        this.pieces = piece_1.PIECES;
    }
    AppHome.prototype.menuSelect = function () {
        if (this.menu) {
            this.sectionHeight = 3;
            this.menu = false;
            this.one = null;
        }
        else {
            this.sectionHeight = 40;
            this.menu = true;
            this.one = "all";
        }
    };
    AppHome.prototype.cardSelect = function (piece) {
        if (this.currentPiece == piece) {
            this.currentPiece = null;
        }
        else {
            this.currentPiece = piece;
        }
    };
    AppHome.prototype.imageURL = function (piece) {
        return "url(images/" + piece.id + ".jpg)";
    };
    AppHome.prototype.classNumber = function (n) {
        return "piece-container _" + n % 3 + " __" + n % 2;
    };
    AppHome = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: 'templates/home.html',
        }), 
        __metadata('design:paramtypes', [])
    ], AppHome);
    return AppHome;
}());
exports.AppHome = AppHome;
//# sourceMappingURL=app.home.js.map