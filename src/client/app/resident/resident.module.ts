import { CoreModule } from '../core/core.module';
import { ToasterService } from '../core/services/toaster.service';
import { ResidentUpdateResolver } from './resident-manage/resident-update.resolves';
import { ResidentUpdateComponent } from './resident-manage/resident-update.component';
import { residentRouting } from './resident.routing';
import { ResidentComponent } from './resident.component';
import { ResidentListComponent } from './resident-list/resident-list.component';
import { ResidentListResolver } from './resident-list/resident-list.resolves';
import { ResidentService } from './resident.service';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridModule } from '@progress/kendo-angular-grid';

@NgModule({
    imports: [
        residentRouting,
        GridModule,
        CoreModule,
        FormsModule,
        ReactiveFormsModule
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
        ResidentListResolver,
        ToasterService
    ],
})
export class ResidentModule { }
