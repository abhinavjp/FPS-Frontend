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
// Angular Modules
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
// User Modules
var core_module_1 = require("./core/core.module");
var resident_module_1 = require("./resident/resident.module");
// User Components
var app_component_1 = require("./app.component");
var header_component_1 = require("./core/components/header/header.component");
var sidebar_component_1 = require("./core/components/sidebar/sidebar.component");
var resident_list_component_1 = require("./resident/resident-list.component");
var resident_component_1 = require("./resident/resident.component");
// User Routing
var app_routing_1 = require("./app.routing");
var resident_routing_1 = require("./resident/resident.routing");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            core_module_1.CoreModule,
            resident_routing_1.residentRouting,
            app_routing_1.appRouting,
            resident_module_1.ResidentModule
        ],
        declarations: [
            header_component_1.HeaderComponent,
            sidebar_component_1.SidebarComponent,
            app_component_1.AppComponent,
            resident_component_1.ResidentComponent,
            resident_list_component_1.ResidentListComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map