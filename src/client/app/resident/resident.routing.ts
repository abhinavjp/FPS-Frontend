import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResidentListComponent } from './resident-list/resident-list.component';
import { ResidentComponent } from './resident.component';
import { ResidentListResolver } from './resident-list/resident-list.resolves';
import { ResidentUpdateResolver } from './resident-manage/resident-update.resolves';
import { ResidentUpdateComponent } from './resident-manage/resident-update.component';
import { ResidentCreateComponent } from './resident-manage/resident-create.component';

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
            },
            // {
            //     path: 'create',
            //     component: ResidentCreateComponent,
            //     resolve: {
            //         residentList: ResidentListResolver
            //     }
            // },
            {
                path: 'update?:residentId',
                component: ResidentUpdateComponent,
                resolve: {
                    residentData: ResidentUpdateResolver
                }
            }
        ]
    }
];
export const residentRouting: ModuleWithProviders = RouterModule.forChild(residentRoutes);


