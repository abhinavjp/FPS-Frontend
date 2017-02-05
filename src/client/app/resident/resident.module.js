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
var resident_list_resolves_1 = require("./resident-list.resolves");
var resident_service_1 = require("./resident.service");
var core_1 = require("@angular/core");
var ResidentModule = (function () {
    function ResidentModule() {
    }
    return ResidentModule;
}());
ResidentModule = __decorate([
    core_1.NgModule({
        imports: [],
        exports: [],
        declarations: [],
        providers: [
            resident_service_1.ResidentService,
            resident_list_resolves_1.ResidentListResolver
        ],
    }),
    __metadata("design:paramtypes", [])
], ResidentModule);
exports.ResidentModule = ResidentModule;
//# sourceMappingURL=resident.module.js.map