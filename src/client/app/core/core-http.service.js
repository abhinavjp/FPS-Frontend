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
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var CoreHttpService = (function () {
    function CoreHttpService(http) {
        this.http = http;
    }
    CoreHttpService.prototype.getRequest = function (apiUrl) {
        return this.http.get(apiUrl)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server Error'); });
    };
    CoreHttpService.prototype.getRequestWithParameters = function (apiUrl, parameterObject) {
        var requestParams = this.getParametersFromObject(parameterObject);
        var requestOptions = new http_1.RequestOptions({ search: requestParams });
        return this.http.get(apiUrl, requestOptions)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server Error'); });
    };
    CoreHttpService.prototype.postRequest = function (apiUrl, tRequest) {
        return this.http.post(apiUrl, tRequest)
            .map(function (res) { return res.json(); })
            .catch(function (error) { return Rx_1.Observable.throw(error.json().error || 'Server Error'); });
    };
    CoreHttpService.prototype.getParametersFromObject = function (parameterObject) {
        var requestParams = new http_1.URLSearchParams();
        var properties = Object.keys(parameterObject);
        for (var index in properties) {
            if (properties.hasOwnProperty(index)) {
                var key = properties[index];
                var value = parameterObject.hasOwnProperty(key) ? parameterObject[key] : null;
                if (value === null || value === undefined) {
                    continue;
                }
                requestParams.set(key, value);
            }
        }
        return requestParams;
    };
    return CoreHttpService;
}());
CoreHttpService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CoreHttpService);
exports.CoreHttpService = CoreHttpService;
//# sourceMappingURL=core-http.service.js.map