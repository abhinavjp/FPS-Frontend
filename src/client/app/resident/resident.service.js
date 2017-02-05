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
var core_config_service_1 = require("../core/core-config.service");
var core_http_service_1 = require("../core/core-http.service");
var ResidentService = (function () {
    function ResidentService(coreConfigService, coreHttpService) {
        this.coreConfigService = coreConfigService;
        this.coreHttpService = coreHttpService;
        this.residentApiUrl = this.coreConfigService.apiUrl + 'Resident/';
    }
    ResidentService.prototype.getResidentList = function () {
        var requestUrl = this.residentApiUrl + 'GetList';
        return this.coreHttpService.getRequest(requestUrl);
    };
    ResidentService.prototype.getResidentById = function (residentId) {
        var requestUrl = this.residentApiUrl + 'GetById';
        return this.coreHttpService.getRequestWithParameters(requestUrl, { id: residentId });
    };
    ResidentService.prototype.createResident = function (resident) {
        var requestUrl = this.residentApiUrl + 'Create';
        return this.coreHttpService.postRequest(requestUrl, resident);
    };
    ResidentService.prototype.updateResident = function (resident) {
        var requestUrl = this.residentApiUrl + 'Update';
        return this.coreHttpService.postRequest(requestUrl, resident);
    };
    ResidentService.prototype.deleteResident = function (residentId) {
        var requestUrl = this.residentApiUrl + 'Delete';
        return this.coreHttpService.postRequest(requestUrl, residentId);
    };
    return ResidentService;
}());
ResidentService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_config_service_1.CoreConfigService, core_http_service_1.CoreHttpService])
], ResidentService);
exports.ResidentService = ResidentService;
//# sourceMappingURL=resident.service.js.map