import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
//import { removeNgStyles, createNewHosts, createInputTransfer } from '@angularClass/hmr';

/*
 * Platform and Environment providers/directives/pipes
 */
import { ENV_PROVIDERS } from './environment';
import { appRouting } from './app.routing';
import { CoreModule } from './core/core.module';
import { ResidentModule } from './resident/resident.module';
// App is our top level component
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState, InternalStateType } from './app.service';

// Application wide providers
const APP_PROVIDERS = [
  APP_RESOLVER_PROVIDERS,
  AppState
];

type StoreType = {
  state: InternalStateType,
  restoreInputValues: () => void,
  disposeOldHosts: () => void
};

/**
 * `AppModule` is the main entry point into Angular2's bootstraping process
 */
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
  ],
  imports: [ // import Angular's modules
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    CoreModule,
    appRouting,
    ResidentModule
  ],
  providers: [ // expose our Services and Providers into Angular's dependency injection
    ...ENV_PROVIDERS,
    ...APP_PROVIDERS
  ]
})
export class AppModule {
  constructor(public appRef: ApplicationRef, public appState: AppState) { }

  // hmrOnInit(store: StoreType) {
  //   if (!store || !store.state) return;
  //   console.log('HMR store', JSON.stringify(store, null, 2));
  //   // set state
  //   this.appState._state = store.state;
  //   // set input values
  //   if ('restoreInputValues' in store) {
  //     let restoreInputValues = store.restoreInputValues;
  //     setTimeout(restoreInputValues);
  //   }

  //   this.appRef.tick();
  //   delete store.state;
  //   delete store.restoreInputValues;
  // }

  // hmrOnDestroy(store: StoreType) {
  //   const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
  //   // save state
  //   const state = this.appState._state;
  //   store.state = state;
  //   // recreate root elements
  //   store.disposeOldHosts = createNewHosts(cmpLocation);
  //   // save input values
  //   store.restoreInputValues = createInputTransfer();
  //   // remove styles
  //   removeNgStyles();
  // }

  // hmrAfterDestroy(store: StoreType) {
  //   // display new elements
  //   store.disposeOldHosts();
  //   delete store.disposeOldHosts;
  // }

}
















// // Angular Modules
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpModule, JsonpModule } from '@angular/http';
// import { GridModule } from '@progress/kendo-angular-grid';
// // User Modules
// import { CoreModule } from './core/core.module';
// import { ResidentModule } from './resident/resident.module';
// // User Components
// import { AppComponent } from './app';
// import { HeaderComponent } from './core/components/header/header';
// import { SidebarComponent } from './core/components/sidebar/sidebar';
// import { ResidentComponent, ResidentListComponent } from './resident/resident';
// // User Routing
// import { appRouting } from './app.routing';
// import { residentRouting } from './resident/resident.routing';

// @NgModule({
//     imports: [
//         BrowserModule,
//         FormsModule,
//         ReactiveFormsModule,
//         HttpModule,
//         JsonpModule,
//         GridModule,
//         CoreModule,
//         residentRouting,
//         appRouting,
//         ResidentModule
//     ],
//     declarations: [
//         HeaderComponent,
//         SidebarComponent,
//         AppComponent,
//         ResidentComponent,
//         ResidentListComponent
//     ],
//     bootstrap: [AppComponent]
// })
// export class AppModule {

// }
