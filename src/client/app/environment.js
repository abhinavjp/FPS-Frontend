"use strict";
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var PROVIDERS = [];
var _decorateModuleRef = function identity(value) { return value; };
_decorateModuleRef = function (modRef) {
    var appRef = modRef.injector.get(core_1.ApplicationRef);
    var cmpRef = appRef.components[0];
    var _ng = window.ng;
    platform_browser_1.enableDebugTools(cmpRef);
    window.ng.probe = _ng.probe;
    window.ng.coreTokens = _ng.coreTokens;
    return modRef;
};
PROVIDERS = PROVIDERS.slice();
exports.decorateModuleRef = _decorateModuleRef;
exports.ENV_PROVIDERS = PROVIDERS.slice();
//# sourceMappingURL=environment.js.map