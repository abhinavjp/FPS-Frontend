import { ResidentComponent } from './resident/resident.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
    { path: `resident`, component: ResidentComponent}
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
