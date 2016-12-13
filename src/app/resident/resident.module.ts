import { ResidentListResolver } from './resident-list.resolves';
import { ResidentService } from './resident.service';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [
        ResidentService,
        ResidentListResolver
    ],
})
export class ResidentModule { }
