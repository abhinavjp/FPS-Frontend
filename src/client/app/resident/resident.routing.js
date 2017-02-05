"use strict";
var router_1 = require("@angular/router");
var resident_list_component_1 = require("./resident-list.component");
var resident_component_1 = require("./resident.component");
var resident_list_resolves_1 = require("./resident-list.resolves");
var residentRoutes = [
    {
        path: 'resident',
        component: resident_component_1.ResidentComponent,
        children: [
            {
                path: 'list',
                component: resident_list_component_1.ResidentListComponent,
                resolve: {
                    residentList: resident_list_resolves_1.ResidentListResolver
                }
            }
        ]
    }
];
exports.residentRouting = router_1.RouterModule.forChild(residentRoutes);
//# sourceMappingURL=resident.routing.js.map