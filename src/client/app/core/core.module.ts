import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToasterService } from './services/toaster.service';
// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// User Imports
import { CoreHelperService } from './services/core-helper.services';
import { CoreHttpService } from './services/core-http.service';
import { CoreConfigService } from './services/core-config.service';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ToastModule.forRoot(),
        NgbModule.forRoot()
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        ErrorDialogComponent
    ],
    declarations: [
        HeaderComponent,
        SidebarComponent,
        ErrorDialogComponent
    ],
    providers: [
        CoreHttpService,
        CoreHelperService,
        CoreConfigService,
        ToasterService
    ],
})
export class CoreModule { }
