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
var CoreHelperService = (function () {
    function CoreHelperService() {
    }
    CoreHelperService.prototype.isNullOrUndefined = function (tObj) {
        return tObj === null || tObj === undefined;
    };
    CoreHelperService.prototype.isStringNullOrEmpty = function (text) {
        return this.isNullOrUndefined(text) || text === '';
    };
    CoreHelperService.prototype.isStringNullOrWhitespace = function (text) {
        return this.isStringNullOrEmpty(text) || text.trim() === '';
    };
    CoreHelperService.prototype.isArrayEmpty = function (tArray) {
        return this.isNullOrUndefined(tArray) || tArray.length <= 0;
    };
    return CoreHelperService;
}());
CoreHelperService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], CoreHelperService);
exports.CoreHelperService = CoreHelperService;
//# sourceMappingURL=core-helper.services.js.map