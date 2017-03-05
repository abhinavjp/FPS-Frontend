import { ResidentUpdateResolver } from './resident-manage/resident-update.resolves';
import { ResidentUpdateComponent } from './resident-manage/resident-update.component';
import { residentRouting } from './resident.routing';
import { ResidentComponent } from './resident.component';
import { ResidentListComponent } from './resident-list/resident-list.component';
import { ResidentListResolver } from './resident-list/resident-list.resolves';
import { ResidentService } from './resident.service';
import { NgModule } from '@angular/core';
import { GridModule } from '@progress/kendo-angular-grid';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        residentRouting,
        GridModule,
        //NgbModule.forRoot()
    ],
    exports: [
        ResidentListComponent,
        ResidentUpdateComponent,
        ResidentComponent
    ],
    declarations: [
        ResidentListComponent,
        ResidentUpdateComponent,
        ResidentComponent
    ],
    providers: [
        ResidentService,
        ResidentUpdateResolver,
        ResidentListResolver
    ],
})
export class ResidentModule { }
