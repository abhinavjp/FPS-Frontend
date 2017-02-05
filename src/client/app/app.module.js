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
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var kendo_angular_grid_1 = require("@progress/kendo-angular-grid");
var environment_1 = require("./environment");
var app_routing_1 = require("./app.routing");
var resident_routing_1 = require("./resident/resident.routing");
var core_module_1 = require("./core/core.module");
var resident_module_1 = require("./resident/resident.module");
var app_component_1 = require("./app.component");
var header_component_1 = require("./core/components/header/header.component");
var sidebar_component_1 = require("./core/components/sidebar/sidebar.component");
var resident_component_1 = require("./resident/resident.component");
var resident_list_component_1 = require("./resident/resident-list.component");
var app_resolver_1 = require("./app.resolver");
var app_service_1 = require("./app.service");
var APP_PROVIDERS = [
    app_resolver_1.APP_RESOLVER_PROVIDERS,
    app_service_1.AppState
];
var AppModule = (function () {
    function AppModule(appRef, appState) {
        this.appRef = appRef;
        this.appState = appState;
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [app_component_1.AppComponent],
        declarations: [
            header_component_1.HeaderComponent,
            sidebar_component_1.SidebarComponent,
            app_component_1.AppComponent,
            resident_component_1.ResidentComponent,
            resident_list_component_1.ResidentListComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            kendo_angular_grid_1.GridModule,
            core_module_1.CoreModule,
            resident_routing_1.residentRouting,
            app_routing_1.appRouting,
            resident_module_1.ResidentModule
        ],
        providers: [
            environment_1.ENV_PROVIDERS,
            APP_PROVIDERS
        ]
    }),
    __metadata("design:paramtypes", [core_1.ApplicationRef, app_service_1.AppState])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map