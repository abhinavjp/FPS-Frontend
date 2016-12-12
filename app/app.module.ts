// Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { GridModule } from '@progress/kendo-angular-grid';
// User Modules
import { CoreModule } from './core/core.module';
import { ResidentModule } from './resident/resident.module';
// User Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { ResidentListComponent } from './resident/resident-list.component';
import { ResidentComponent } from './resident/resident.component';
// User Routing
import { appRouting } from './app.routing';
import { residentRouting } from './resident/resident.routing';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        JsonpModule,
        GridModule,
        CoreModule,
        residentRouting,
        appRouting,
        ResidentModule
    ],
    declarations: [
        HeaderComponent,
        SidebarComponent,
        AppComponent,
        ResidentComponent,
        ResidentListComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
