// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// User Imports
import { CoreHelperService } from './core-helper.services';
import { CoreHttpService } from './core-http.service';
import { CoreConfigService } from './core-config.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [],
    declarations: [
    ],
    providers: [
        CoreHttpService,
        CoreHelperService,
        CoreConfigService
    ],
})
export class CoreModule { }
