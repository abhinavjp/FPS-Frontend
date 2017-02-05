import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResidentListComponent } from './resident-list.component';
import { ResidentComponent } from './resident.component';
import { ResidentListResolver } from './resident-list.resolves';

const residentRoutes: Routes = [
    {
        path: 'resident',
        component: ResidentComponent,
        children: [
            {
                path: 'list',
                component: ResidentListComponent,
                resolve: {
                    residentList: ResidentListResolver
                }
            }
        ]
    }
];


export const residentRouting: ModuleWithProviders = RouterModule.forChild(residentRoutes);
